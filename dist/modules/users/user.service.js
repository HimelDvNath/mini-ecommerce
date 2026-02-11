"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const db_1 = require("../../config/db");
const addToCart = async (userId, productId, quantity) => {
    const cartRes = await db_1.pool.query(`SELECT * FROM carts WHERE user_id = $1`, [
        userId,
    ]);
    let cartId;
    if (cartRes.rows.length === 0) {
        const newCart = await db_1.pool.query(`INSERT INTO carts(user_id) VALUES($1) RETURNING *`, [userId]);
        cartId = newCart.rows[0].id;
    }
    else {
        cartId = cartRes.rows[0].id;
    }
    const itemRes = await db_1.pool.query(`SELECT * FROM cart_items WHERE cart_id = $1 AND product_id = $2`, [cartId, productId]);
    if (itemRes.rows.length === 0) {
        await db_1.pool.query(`INSERT INTO cart_items(cart_id, product_id, quantity) VALUES($1, $2, $3)`, [cartId, productId, quantity]);
    }
    return { message: "Product added to cart" };
};
const removeFromCart = async (userId, productId) => {
    const cartRes = await db_1.pool.query(`SELECT * FROM carts WHERE user_id = $1`, [
        userId,
    ]);
    if (cartRes.rows.length === 0)
        throw new Error("Cart not found");
    const cartId = cartRes.rows[0].id;
    const result = await db_1.pool.query(`DELETE FROM cart_items WHERE cart_id = $1 AND product_id = $2 RETURNING *`, [cartId, productId]);
    if (result.rows.length === 0)
        throw new Error("Product not in cart");
    return { message: "Product removed from cart" };
};
const placeOrder = async (cartId) => {
    const client = await db_1.pool.connect();
    try {
        await client.query("BEGIN");
        const userRes = await client.query(`SELECT user_id FROM carts WHERE id = $1 FOR UPDATE`, [cartId]);
        if (userRes.rows.length === 0)
            throw new Error("Cart not found");
        const userId = userRes.rows[0].user_id;
        const itemsRes = await client.query(`
            SELECT ci.product_id, ci.quantity, p.price, p.stock
            FROM cart_items ci
            JOIN products p ON ci.product_id = p.id
            WHERE ci.cart_id = $1
            FOR UPDATE
            `, [cartId]);
        if (itemsRes.rows.length === 0)
            throw new Error("Cart is empty");
        for (const item of itemsRes.rows) {
            if (item.quantity > item.stock) {
                throw new Error(`Not enough stock for product ${item.product_id}`);
            }
        }
        let total = 0;
        for (const item of itemsRes.rows) {
            total += item.price * item.quantity;
        }
        // Create order
        const orderRes = await client.query(`INSERT INTO orders(user_id, total_amount) VALUES($1, $2) RETURNING *`, [userId, total]);
        const orderId = orderRes.rows[0].id;
        for (const item of itemsRes.rows) {
            await client.query(`INSERT INTO order_items(order_id, product_id, quantity, price)
                 VALUES($1, $2, $3, $4)`, [orderId, item.product_id, item.quantity, item.price]);
            await client.query(`UPDATE products SET stock = stock - $1 WHERE id = $2`, [item.quantity, item.product_id]);
        }
        await client.query(`DELETE FROM cart_items WHERE cart_id = $1`, [
            cartId,
        ]);
        await client.query("COMMIT");
        return {
            message: "Order placed successfully",
            order: orderRes.rows[0],
        };
    }
    catch (error) {
        await client.query("ROLLBACK");
        throw error;
    }
    finally {
        client.release();
    }
};
exports.userServices = {
    addToCart,
    removeFromCart,
    placeOrder,
};
//# sourceMappingURL=user.service.js.map
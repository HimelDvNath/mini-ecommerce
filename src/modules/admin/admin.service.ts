import { pool } from "../../config/db";

const getAllOrders = async () => {
    return await pool.query(`SELECT * FROM orders`);
};
const updateOrder = async (id: Number, payload: any) => {
    const {status} = payload;
    const result = await pool.query(
        `UPDATE orders
         SET status = $1
         WHERE id = $2
         RETURNING *`,
        [status, id],
    );
    return result
};
const getAllProducts = async () => {
    return await pool.query(`SELECT * FROM products`);
};
export const adminServices = {
    getAllOrders,
    getAllProducts,
    updateOrder
};

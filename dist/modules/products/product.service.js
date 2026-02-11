"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const db_1 = require("../../config/db");
const createProduct = async (payload) => {
    const { name, description, price, stock } = payload;
    const result = await db_1.pool.query(`INSERT INTO products(name, description, price, stock)
         VALUES($1, $2, $3, $4)
         RETURNING *`, [name, description, price, stock]);
    return result;
};
const updateProduct = async (id, payload) => {
    const { price, stock } = payload;
    const result = await db_1.pool.query(`UPDATE products
         SET 
             price = $1,
             stock = $2,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $3
         RETURNING *`, [price, stock, id]);
    return result;
};
const deleteProduct = async (id) => {
    const result = await db_1.pool.query(`DELETE FROM products
         WHERE id = $1
         RETURNING *`, [id]);
    return result;
};
exports.productServices = {
    createProduct,
    updateProduct,
    deleteProduct,
};
//# sourceMappingURL=product.service.js.map
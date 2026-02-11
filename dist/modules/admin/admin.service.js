"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminServices = void 0;
const db_1 = require("../../config/db");
const getAllOrders = async () => {
    return await db_1.pool.query(`SELECT * FROM orders`);
};
const updateOrder = async (id, payload) => {
    const { status } = payload;
    const result = await db_1.pool.query(`UPDATE orders
         SET status = $1
         WHERE id = $2
         RETURNING *`, [status, id]);
    return result;
};
const getAllProducts = async () => {
    return await db_1.pool.query(`SELECT * FROM products`);
};
exports.adminServices = {
    getAllOrders,
    getAllProducts,
    updateOrder
};
//# sourceMappingURL=admin.service.js.map
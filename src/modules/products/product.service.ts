import { pool } from "../../config/db";

const createProduct = async (payload: any) => {
    const { name, description, price, stock } = payload;

    const result = await pool.query(
        `INSERT INTO products(name, description, price, stock)
         VALUES($1, $2, $3, $4)
         RETURNING *`,
        [name, description, price, stock]
    );

    return result;
};
const updateProduct = async (id: number, payload: any) => {
    const {price, stock } = payload;

    const result = await pool.query(
        `UPDATE products
         SET 
             price = $1,
             stock = $2,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $3
         RETURNING *`,
        [ price, stock, id]
    );

    return result;
};
const deleteProduct = async (id: number) => {
    const result = await pool.query(
        `DELETE FROM products
         WHERE id = $1
         RETURNING *`,
        [id]
    );

    return result;
};

export const productServices = {
    createProduct,
    updateProduct,
    deleteProduct,
};

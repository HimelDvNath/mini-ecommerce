import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
    connectionString: config.CONNECTION_STRING,
});

const initDB = async () => {
    await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                password TEXT NOT NULL,
                role VARCHAR(20) CHECK (role IN ('ADMIN', 'CUSTOMER')) DEFAULT 'CUSTOMER',
                is_blocked BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                description TEXT,
                price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
                stock INT NOT NULL CHECK (stock >= 0),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    await pool.query(`
            CREATE TABLE IF NOT EXISTS carts (
                id SERIAL PRIMARY KEY,
                user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    await pool.query(`
            CREATE TABLE IF NOT EXISTS cart_items (
                id SERIAL PRIMARY KEY,
                cart_id INTEGER REFERENCES carts(id) ON DELETE CASCADE,
                product_id INTEGER REFERENCES products(id),
                quantity INT NOT NULL CHECK (quantity > 0),
                UNIQUE(cart_id, product_id)
            );
        `);
    await pool.query(`
            CREATE TABLE IF NOT EXISTS orders (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id),
                total_amount NUMERIC(12,2) NOT NULL,
                status VARCHAR(20) CHECK (status IN ('PENDING','SHIPPED','DELIVERED')) DEFAULT 'PENDING',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    await pool.query(`
            CREATE TABLE IF NOT EXISTS order_items (
                id SERIAL PRIMARY KEY,
                order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
                product_id INTEGER REFERENCES products(id),
                quantity INT NOT NULL,
                price NUMERIC(10,2) NOT NULL
            );
        `);
};
export default initDB;

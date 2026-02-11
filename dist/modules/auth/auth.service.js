"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const db_1 = require("../../config/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const createUser = async (payload) => {
    const { name, email, password, role } = payload;
    try {
        const hashPass = await bcryptjs_1.default.hash(password, 10);
        const result = await db_1.pool.query(`INSERT INTO Users(name, email, password, role) VALUES($1, $2, $3, $4) RETURNING *`, [name, email, hashPass, role]);
        return result;
    }
    catch (error) {
        throw error;
    }
};
const userLogIn = async (payload) => {
    const { email, password } = payload;
    try {
        const result = await db_1.pool.query(`SELECT * FROM Users WHERE email = $1`, [email]);
        const user = result.rows[0];
        if (!user) {
            return null;
        }
        const match = await bcryptjs_1.default.compare(password, user.password);
        if (!match) {
            return false;
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, name: user.name, email: user.email, role: user.role }, config_1.default.SECRET, {
            expiresIn: "7d",
        });
        delete user.password;
        return { token, user };
    }
    catch (error) {
        throw error;
    }
};
exports.authServices = {
    createUser,
    userLogIn,
};
//# sourceMappingURL=auth.service.js.map
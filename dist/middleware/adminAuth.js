"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const adminAuth = () => {
    return async (req, res, next) => {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken?.split(" ")[1];
            if (!token) {
                return res.status(400).json({
                    success: false,
                    message: "Provide Bearer Token and  Try again!!",
                    errors: "Bearer Token Not Found!",
                });
            }
            const decoder = jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
            const role = decoder.role;
            if (role.toLowerCase() === "admin") {
                return next();
            }
            return res.status(401).json({
                success: false,
                message: "Only admin allowed",
                errors: "Access Denied",
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
                errors: error,
            });
        }
    };
};
exports.default = adminAuth;
//# sourceMappingURL=adminAuth.js.map
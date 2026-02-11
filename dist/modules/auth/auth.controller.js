"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
const createUser = async (req, res) => {
    try {
        const result = await auth_service_1.authServices.createUser(req.body);
        if (typeof result === "string") {
            return res.status(400).json({
                success: false,
                message: result,
            });
        }
        delete result.rows[0].password;
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result.rows[0],
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
const userLogIn = async (req, res) => {
    try {
        const result = await auth_service_1.authServices.userLogIn(req.body);
        if (result === null) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                errors: "Check email. Then try again!",
            });
        }
        else if (!result) {
            return res.status(400).json({
                success: false,
                message: "Password is wrong",
                errors: "Check password. Then try again!",
            });
        }
        else {
            return res.status(200).json({
                success: true,
                message: "Login successful",
                data: {
                    token: result.token,
                    user: result.user,
                },
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            errors: error,
        });
    }
};
exports.authController = {
    userLogIn,
    createUser,
};
//# sourceMappingURL=auth.controller.js.map
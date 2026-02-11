"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const addToCart = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;
        const result = await user_service_1.userServices.addToCart(user_id, product_id, quantity);
        res.status(201).json({
            success: true,
            message: result.message,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const removeFromCart = async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        const result = await user_service_1.userServices.removeFromCart(user_id, product_id);
        res.status(200).json({
            success: true,
            message: result.message,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const placeOrder = async (req, res) => {
    try {
        const { cart_id } = req.body;
        console.log(cart_id);
        const result = await user_service_1.userServices.placeOrder(cart_id);
        res.status(201).json({
            success: true,
            message: result.message,
            data: result.order,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.userController = {
    addToCart,
    removeFromCart,
    placeOrder,
};
//# sourceMappingURL=user.controller.js.map
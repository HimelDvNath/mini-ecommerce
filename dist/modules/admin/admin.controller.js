"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const admin_service_1 = require("./admin.service");
const getAllOrders = async (req, res) => {
    try {
        const result = await admin_service_1.adminServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders Retrieve Successfully",
            data: result.rows
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await admin_service_1.adminServices.updateOrder(Number(id), req.body);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Order updated successfully",
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
const getAllProducts = async (req, res) => {
    try {
        const result = await admin_service_1.adminServices.getAllProducts();
        res.status(200).json({
            success: true,
            message: "Products Retrieve Successfully",
            data: result.rows
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
exports.adminController = {
    getAllOrders,
    getAllProducts,
    updateOrder
};
//# sourceMappingURL=admin.controller.js.map
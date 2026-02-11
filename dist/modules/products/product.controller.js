"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const createProduct = async (req, res) => {
    try {
        const result = await product_service_1.productServices.createProduct(req.body);
        return res.status(201).json({
            success: true,
            message: "Product created successfully",
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
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await product_service_1.productServices.updateProduct(Number(id), req.body);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
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
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await product_service_1.productServices.deleteProduct(Number(id));
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
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
exports.productController = {
    createProduct,
    updateProduct,
    deleteProduct,
};
//# sourceMappingURL=product.controller.js.map
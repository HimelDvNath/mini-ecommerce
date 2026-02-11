import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const result = await productServices.createProduct(req.body);

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            errors: error,
        });
    }
};
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await productServices.updateProduct(
            Number(id),
            req.body
        );

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
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            errors: error,
        });
    }
};
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await productServices.deleteProduct(Number(id));

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
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            errors: error,
        });
    }
};

export const productController = {
    createProduct,
    updateProduct,
    deleteProduct,
};

import { Request, Response } from "express";
import { adminServices } from "./admin.service";

const getAllOrders = async(req:Request, res: Response)=>{
    try {
        const result = await adminServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders Retrieve Successfully",
            data: result.rows
        });
    } catch (error:any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
const updateOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await adminServices.updateOrder(
            Number(id),
            req.body
        );

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
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            errors: error,
        });
    }
};
const getAllProducts = async(req:Request, res: Response)=>{
    try {
        const result = await adminServices.getAllProducts();
        res.status(200).json({
            success: true,
            message: "Products Retrieve Successfully",
            data: result.rows
        });
    } catch (error:any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
export const adminController = {
    getAllOrders,
    getAllProducts,
    updateOrder
}
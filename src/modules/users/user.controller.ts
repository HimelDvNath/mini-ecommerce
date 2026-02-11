import { Request, Response } from "express";
import { userServices } from "./user.service";

const addToCart = async (req: Request, res: Response) => {
    try {
        const { user_id, product_id, quantity } = req.body;

        const result = await userServices.addToCart(
            user_id,
            product_id,
            quantity,
        );

        res.status(201).json({
            success: true,
            message: result.message,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const removeFromCart = async (req: Request, res: Response) => {
    try {
        const { user_id, product_id } = req.body;

        const result = await userServices.removeFromCart(user_id, product_id);

        res.status(200).json({
            success: true,
            message: result.message,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const placeOrder = async (req: Request, res: Response) => {
    try {
        const { cart_id } = req.body;
        console.log(cart_id);
        const result = await userServices.placeOrder(cart_id);

        res.status(201).json({
            success: true,
            message: result.message,
            data: result.order,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const userController = {
    addToCart,
    removeFromCart,
    placeOrder,
};

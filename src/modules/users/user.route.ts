import express from "express";
import { userController } from "./user.controller";
import customerAuth from "../../middleware/customerAuth";
import adminAuth from "../../middleware/adminAuth";

const router = express.Router();

router.post("/cart/add", customerAuth(), userController.addToCart);
router.delete("/cart/remove", customerAuth(), userController.removeFromCart);
router.post("/order", customerAuth(), userController.placeOrder);

export const userRoutes = router;

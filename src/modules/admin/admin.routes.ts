import express from "express";
import adminAuth from "../../middleware/adminAuth";
import { adminController } from "./admin.controller";

const router = express.Router();

router.get("/orders", adminAuth(), adminController.getAllOrders);
router.patch("/orders/:id", adminAuth(), adminController.updateOrder);
router.get("/products", adminAuth(), adminController.getAllProducts);
export const adminRoutes = router;

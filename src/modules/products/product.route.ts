import express from "express";
import adminAuth from "../../middleware/adminAuth";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/", adminAuth(), productController.createProduct);
router.patch("/:id", adminAuth(), productController.updateProduct); 
router.delete("/:id", adminAuth(), productController.deleteProduct);

export const productRoutes = router;

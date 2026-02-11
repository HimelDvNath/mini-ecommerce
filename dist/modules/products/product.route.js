"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const adminAuth_1 = __importDefault(require("../../middleware/adminAuth"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/", (0, adminAuth_1.default)(), product_controller_1.productController.createProduct);
router.patch("/:id", (0, adminAuth_1.default)(), product_controller_1.productController.updateProduct);
router.delete("/:id", (0, adminAuth_1.default)(), product_controller_1.productController.deleteProduct);
exports.productRoutes = router;
//# sourceMappingURL=product.route.js.map
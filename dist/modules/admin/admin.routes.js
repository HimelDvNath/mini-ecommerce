"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const adminAuth_1 = __importDefault(require("../../middleware/adminAuth"));
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.get("/orders", (0, adminAuth_1.default)(), admin_controller_1.adminController.getAllOrders);
router.patch("/orders/:id", (0, adminAuth_1.default)(), admin_controller_1.adminController.updateOrder);
router.get("/products", (0, adminAuth_1.default)(), admin_controller_1.adminController.getAllProducts);
exports.adminRoutes = router;
//# sourceMappingURL=admin.routes.js.map
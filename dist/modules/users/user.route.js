"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const customerAuth_1 = __importDefault(require("../../middleware/customerAuth"));
const router = express_1.default.Router();
router.post("/cart/add", (0, customerAuth_1.default)(), user_controller_1.userController.addToCart);
router.delete("/cart/remove", (0, customerAuth_1.default)(), user_controller_1.userController.removeFromCart);
router.post("/order", (0, customerAuth_1.default)(), user_controller_1.userController.placeOrder);
exports.userRoutes = router;
//# sourceMappingURL=user.route.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const db_1 = __importDefault(require("./config/db"));
const auth_routes_1 = require("./modules/auth/auth.routes");
const product_route_1 = require("./modules/products/product.route");
const user_route_1 = require("./modules/users/user.route");
const admin_routes_1 = require("./modules/admin/admin.routes");
const app = (0, express_1.default)();
const port = config_1.default.PORT;
//parser
app.use(express_1.default.json());
(0, db_1.default)();
app.use("/api/auth", auth_routes_1.authRoutes);
app.use("/api/products", product_route_1.productRoutes);
app.use("/api/users", user_route_1.userRoutes);
app.use("/api/admin", admin_routes_1.adminRoutes);
app.get('/', (req, res) => {
    res.send("Mini-Ecommerce server is running");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map
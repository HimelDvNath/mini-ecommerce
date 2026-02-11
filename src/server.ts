import express, { Request, Response } from "express";
import config from "./config";
import initDB from "./config/db";
import { authRoutes } from "./modules/auth/auth.routes";
import { productRoutes } from "./modules/products/product.route";
import { userRoutes } from "./modules/users/user.route";
import { adminRoutes } from "./modules/admin/admin.routes";

const app = express();
const port = config.PORT;
//parser
app.use(express.json());

initDB();
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

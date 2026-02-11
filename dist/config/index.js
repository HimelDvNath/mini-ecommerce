"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
const config = {
    CONNECTION_STRING: process.env.CONNECTION_STRING,
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
};
exports.default = config;
//# sourceMappingURL=index.js.map
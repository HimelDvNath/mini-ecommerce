import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
    CONNECTION_STRING: process.env.CONNECTION_STRING,
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
}
export default config;
import { config } from "dotenv";

config();

//Database
export const MONGODB_URI:any = process.env.MONGODB_URI || 3000;

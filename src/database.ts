import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

export const startConnection = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("DB connection to:", db.connection.name);
  } catch (error) {
    console.error(">>Error: ", error);
  }
  console.log(">> Database is connected");
};

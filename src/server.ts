import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port: number | string = process.env.PORT || 5000;

// database connect
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/aliaMadrasah");
  app.listen(port, () => {
    console.log(`Server is running  ${port} and Database Connect`);
  });
}
main().catch((err) => console.log(err));

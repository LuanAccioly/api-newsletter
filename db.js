import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const db_pass = process.env.DB_PASS;
mongoose.connect(
  `mongodb+srv://accioly:${db_pass}@ufrpe-newsletter.c39wedp.mongodb.net/?retryWrites=true&w=majority`,
  { dbName: "newsletter" }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", async function () {
  console.log("Database connected successfully");
});

export default db;

import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
mongoose.connect(
  `mongodb+srv://${user}:${pass}@ufrpe-newsletter.c39wedp.mongodb.net/?retryWrites=true&w=majority`,
  { dbName: "newsletter" }
);

async function db() {
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));

  db.once("open", async function () {
    console.log("Database connected successfully");
  });
}

export default db;

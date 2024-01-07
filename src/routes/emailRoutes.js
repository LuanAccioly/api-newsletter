import { setEmail, deleteEmail, countEmails } from "../controllers/email.js";
import express from "express";
import * as dotenv from "dotenv";

const router = express.Router();

dotenv.config();

router.get("/email/count", countEmails);
router.post("/email/new", setEmail);
router.delete("/email/delete", deleteEmail);

export default router;

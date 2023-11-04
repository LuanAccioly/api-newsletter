import {
  getEmails,
  setEmail,
  deleteEmail,
  countEmails,
  sendNews,
} from "../controllers/email.js";
import express from "express";
import * as dotenv from "dotenv";
import { allowOnlyIP } from "../middleware/allowedIP.js";

const allowedIP = process.env.ALLOWED_IP;
const router = express.Router();

dotenv.config();

router.get("/email/all", getEmails);
router.get("/email/count", countEmails);
router.post("/email/new", setEmail);
router.post("/email/send", allowOnlyIP(allowedIP), sendNews);
router.delete("/email/delete", deleteEmail);

export default router;

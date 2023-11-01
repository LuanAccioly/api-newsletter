import {
  getEmails,
  setEmail,
  deleteEmail,
  countEmails,
} from "../controllers/email.js";
import express from "express";
const router = express.Router();

router.get("/email/all", getEmails);
router.get("/email/count", countEmails);
router.post("/email/new", setEmail);
router.delete("/email/delete", deleteEmail);

export default router;

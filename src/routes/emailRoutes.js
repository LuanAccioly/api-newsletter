import { getEmails, setEmail, deleteEmail } from "../controllers/email.js";
import express from "express";
const router = express.Router();

router.get("/getemails", getEmails);
router.post("/setemail", setEmail);
router.delete("/deleteemail", deleteEmail);

export default router;

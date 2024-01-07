import Emails from "../models/Email/index.js";
import { Types } from "mongoose";

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const countEmails = async (req, res) => {
  const emails = await Emails.find();
  const ip = req.ip;
  res.status(200).json({ countEmails: emails[0]?.emails.length || 0, ip: ip });
};

export const setEmail = async (req, res) => {
  const { email } = req.body;
  const emails = await Emails.find();
  if (emails[0]?.emails.includes(email))
    return res.status(400).json({ message: "Email já cadastrado!" });

  if (validateEmail(email)) {
    await Emails.findOneAndUpdate(
      { _id: emails[0]?._id || new Types.ObjectId() },
      {
        emails: [...(emails[0] ? emails[0].emails : []), email],
      },
      { upsert: true }
    );
    return res.status(201).json({ message: "Email adicionado com sucesso!" });
  } else {
    return res.status(400).json({ message: "Email inválido!" });
  }
};

export const deleteEmail = async (req, res) => {
  const { email } = req.body;
  const emails = await Emails.find();
  if (validateEmail(email)) {
    await Emails.findOneAndUpdate(
      { _id: emails[0]._id },
      {
        emails: emails[0].emails.filter((item) => item !== email),
      }
    );
    return res.status(201).json({ message: "Email removido com sucesso!" });
  } else {
    return res.status(400).json({ message: "Email inválido!" });
  }
};

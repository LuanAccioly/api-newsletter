import mongoose from "mongoose";
const emailsSchema = new mongoose.Schema({
  emails: [String],
});

export default mongoose.model("Emails", emailsSchema);

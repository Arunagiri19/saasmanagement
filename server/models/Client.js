const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  email: String,
  company: String,
});

module.exports = mongoose.model("Client", clientSchema);

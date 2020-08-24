const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true, unique: false },
  number: { type: String, required: false, unique: false },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true, unique: false },
});

module.exports = model("Feedback", schema);

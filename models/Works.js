const { Schema, model } = require("mongoose");

const schema = new Schema({
  workName: { type: String, required: true },
  myWork: { type: String },
  smallDescription: { type: String },
  urlAdress: { type: String, required: true, unique: true },
  onlineUrl: { type: String },
  background: { type: String },
  workTitle: { type: String },
  aboutProject: { type: String },
  fontName: { type: String },
  technologyUsed: { type: String },
});

module.exports = model("Works", schema);

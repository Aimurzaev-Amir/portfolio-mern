const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  id: { type: String, required: false, unique: true },
  workName: { type: String, required: false, unique: false },
  myWork: { type: String, required: false, unique: false },
  smallDescription: { type: String, required: false, unique: false },
  workPreview: { type: String, required: false, unique: false },
  workBackground: { type: String, required: false, unique: false },
  workPhoto: [{ type: Types.ObjectId, ref: "Img" }],
  previewDescription: { type: String, required: false, unique: false },
  photoDescription: { type: String, required: false, unique: false },
  urlAdress: { type: String, required: false, unique: true },
  onlineUrl: { type: String, required: false, unique: false },

  workTitle: { type: String, required: false, unique: false },
  aboutProject: { type: String, required: false, unique: false },
  fontName: { type: String, required: false, unique: false },
  textStyles: [{ type: Types.ObjectId, ref: "textStyles" }],
  colors: [{ type: Types.ObjectId, ref: "colors" }],
  whatIDid: [{ type: Types.ObjectId, ref: "whatIDid" }],
  technologyUsed: { type: String, required: false, unique: false },
  desktopImg: [{ type: Types.ObjectId, ref: "desktopImg" }],
  mobileImg: [{ type: Types.ObjectId, ref: "mobileImg" }],
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Works", schema);

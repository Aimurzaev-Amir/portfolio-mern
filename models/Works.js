const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  id: { type: String, required: false, unique: true },
  workName: { type: String, required: false, unique: false },
  whatIDid: { type: String, required: false, unique: true },
  workPreview: { type: String, required: false, unique: false },
  workBackground: { type: String, required: false, unique: false },
  workPhoto: { type: String, required: false, unique: false },
  previewDescription: { type: String, required: false, unique: false },
  photoDescription: { type: String, required: false, unique: false },
  urlAdress: { type: String, required: false, unique: true },
  onlineUrl: { type: String, required: false, unique: true },
  additional: [{ type: Types.ObjectId, ref: "additional" }],
});

module.exports = model("Work", schema);
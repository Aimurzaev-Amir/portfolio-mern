const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  articleName: { type: String },
  articleDate: { type: String },
  articleSmallDescription: { type: String },
  articlePreview: { type: String },
  previewDescription: { type: String },
  urlAdress: { type: String },
  comments: { type: String },
  likes: { type: String },
  fullVersion: [{ type: Types.ObjectId, ref: "textStyles" }],
});

module.exports = model("Articles", schema);

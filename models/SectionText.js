const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  text: { type: String },
  textPosition: { type: String },
  owner: { type: Types.ObjectId, ref: "ArticleFullVersion" },
});

module.exports = model("SectionText", schema);

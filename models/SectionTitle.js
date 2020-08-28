const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String },
  titlePosition: { type: String },
  owner: { type: Types.ObjectId, ref: "ArticleFullVersion" },
});

module.exports = model("SectionTitle", schema);

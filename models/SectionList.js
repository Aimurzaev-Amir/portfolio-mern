const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  listItem: { type: String },
  owner: { type: Types.ObjectId, ref: "ArticleFullVersion" },
});

module.exports = model("SectionList", schema);

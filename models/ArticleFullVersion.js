const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  sectionTitle: [{ type: Types.ObjectId, ref: "SectionTitle" }],
  sectionText: [{ type: Types.ObjectId, ref: "SectionText" }],
  sectionList: [{ type: Types.ObjectId, ref: "SectionList" }],
  sectionImg: [{ type: Types.ObjectId, ref: "SectionImg" }],
  owner: { type: Types.ObjectId, ref: "Articles" },
});

module.exports = model("ArticleFullVersion", schema); 

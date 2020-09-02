const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  articleName: { type: String },
  articleDate: { type: String },
  articleSmallDescription: { type: String },
  articleImg: [{ type: Types.ObjectId, ref: "ArticleImg" }],
  urlAdress: { type: String },
  comments: { type: String },
  likes: { type: String },
  fullVersion: [{ type: Types.ObjectId, ref: "textStyles" }],
});

module.exports = model("Articles", schema);

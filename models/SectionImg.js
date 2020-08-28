const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  img: { type: String },
  sectionImgDescr: { type: String },
  imgWidth: { type: String },
  imgPositioning: { type: String },
  owner: { type: Types.ObjectId, ref: "ArticleFullVersion" },
});

module.exports = model("SectionImg", schema);

const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    name: { type: String, required: true },
    descr: { type: String, required: true },
    type: { type: String, required: true },
    img: { type: String, required: true },
    imgType: { type: String, required: true },
    owner: { type: Types.ObjectId, ref: "Works" },
  });

module.exports = model("ArticleImg", schema); 

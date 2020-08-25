const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  id: { type: String, required: false, unique: true },
  img: { type: String, required: false, unique: false },
  imgDescr: { type: String, required: false, unique: false },
  owner: { type: Types.ObjectId, ref: "Works" },
});

module.exports = model("mobileImg", schema);
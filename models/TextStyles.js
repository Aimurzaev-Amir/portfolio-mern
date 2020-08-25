const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  id: { type: String, required: false, unique: true },
  name: { type: String, required: false, unique: false },
  size: { type: String, required: false, unique: false },
  weight: { type: String, required: false, unique: false },
  owner: { type: Types.ObjectId, ref: "Works" },
});

module.exports = model("textStyles", schema);
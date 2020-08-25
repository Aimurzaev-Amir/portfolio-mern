const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  id: { type: String, required: false, unique: true },
  color: { type: String, required: false, unique: false },
  owner: { type: Types.ObjectId, ref: "Works" },
});

module.exports = model("colors", schema);
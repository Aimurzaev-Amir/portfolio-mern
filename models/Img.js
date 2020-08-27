const { Schema, model, Types } = require("mongoose");

// const schema = new Schema({
//   fieldname: { type: String },
//   originalname: { type: String },
//   encoding: { type: String },
//   mimetype: { type: String },
//   buffer: { type: Buffer },
//   size: { type: Number },
//   owner: { type: Types.ObjectId, ref: "Works" },
// });

const schema = new Schema({
  name: { type: String },
  fieldname: { type: String },
  contentType: { type: String },
  path: { type: String },
  image: { type: Buffer },
  owner: { type: Types.ObjectId, ref: "Works" },
});

module.exports = model("Img", schema);

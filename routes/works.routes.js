const { Router } = require("express");
const Works = require("../models/Works");
const Colors = require("../models/Colors");
const textStyles = require("../models/TextStyles");
const whatIDid = require("../models/WhatIDid");
const Img = require("../models/Img");
const router = Router();

// /api/works/create
router.post("/create", async (req, res) => {
  try {
    // const { id, urlAdress } = req.body;
    const Work = new Works(req.body);

    await Work.save();

    res.status(201).json({ Work });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/:id
router.patch("/:id", async (req, res) => {
  try {
    const Work = await Works.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({ Work });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/
router.get("/", async (req, res) => {
  try {
    const WorksData = await Works.find();
    res.json(WorksData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/:id
router.get("/:id", async (req, res) => {
  try {
    const Work = await Works.findById(req.params.id);
    res.json(Work);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/create-color
router.post("/create-color", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.body.id });
    const workId = Work._id;
    const Color = new Colors({ color: req.body.color, owner: workId });
    await Color.save();

    res.status(201).json({ Color });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/colors/:urlAdress
router.get("/colors/:id", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.params.id });
    const workId = Work._id;
    console.log(workId);
    const colorsData = await Colors.find({ owner: workId });
    res.json(colorsData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/create-textStyle
router.post("/create-textStyle", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.body.id });
    const workId = Work._id;
    const { name, size, weight } = req.body;
    const textStyle = new textStyles({ name, size, weight, owner: workId });

    await textStyle.save();

    res.status(201).json({ textStyle });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/textStyles/:id
router.get("/textStyles/:id", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.params.id });
    const workId = Work._id;
    const textStyle = await textStyles.find({ owner: workId });
    res.json(textStyle);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/create-didPoint
router.post("/create-didPoint", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.body.id });
    const workId = Work._id;
    const didPoint = new whatIDid({ name: req.body.newPoint, owner: workId });

    await didPoint.save();

    res.status(201).json({ didPoint });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/textStyles/:id
router.get("/didPoint/:id", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.params.id });
    const workId = Work._id;
    const textStyle = await whatIDid.find({ owner: workId });
    res.json(textStyle);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/addPhoto
router.post("/addPhoto", async (req, res) => {
  const { name, descr, type, img, owner } = req.body;
  const imageData = new Img({
    name,
    descr,
    type,
    owner,
  });
  saveImage(imageData, img);
  try {
    const newImg = await imageData.save();
    res.redirect("/admin/create-new-work");
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// accessable mimetypes
const imageMimeTypes = ["image/jpeg", "image/png", "image/gif"];

// creating function for decoding to utf-8 type for economy space in the database
function saveImage(imageData, imgEncoded) {
  if (imgEncoded == null) {
    return;
  }

  const img = JSON.parse(imgEncoded);
  if (img != null && imageMimeTypes.includes(img.type)) {
    imageData.img = new Buffer.from(img.data, "utf-8");
    imageData.imgType = img.type;
  }
}

// /api/works/getPhotos/:type
router.get("/getPhotos/:type", async (req, res) => {
  try {
    const img = await Img.find({ type: req.params.type });
    res.json(img);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/getPhotos/:owner
router.get("/getPhotos/:owner", async (req, res) => {
  try {
    const img = await Img.find({ _id: req.params.owner });
    res.json(img);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/updatePhotos/:id
router.patch("/updatePhoto/:id", async (req, res) => {
  try {
    const Image = await Img.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({ Image });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

module.exports = router;

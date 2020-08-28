const { Router } = require("express");
const Works = require("../models/Works");
const Colors = require("../models/Colors");
const textStyles = require("../models/TextStyles");
const whatIDid = require("../models/WhatIDid");
// const auth = require("../middleware/auth.middleware");
// const config = require("config");
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




// // Image post in mongoDb part started

// const path = require("path");
// const crypto = require("crypto");
// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");
// const Grid = require("gridfs-stream");
// const mongoose = require("mongoose");

// const conn = mongoose.createConnection(config.get("mongoURI"), {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // init gfs
// let gfs;

// conn.once("open", () => {
//   console.log("connections is opened ");
//   // init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("uploads");
// });

// // create storage engine
// const storage = new GridFsStorage({
//   url: config.get("mongoURI"),
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString("hex") + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: "uploads",
//         };
//         resolve(fileInfo);
//       });
//     });
//   },
// });
// const upload = multer({ storage });

// // /api/works/uploadFiles (upload image data to database)
// router.post("/uploadFiles", upload.single("file"), (req, res) => {
//   // res.json({ file: req.file });
//   res.redirect("/admin/create-new-work");
// });

// // api/works/files (get all images data)
// router.get("/files", (req, res) => {
//   gfs.files.find().toArray((err, files) => {
//     // Check if files
//     if (!files || files.length === 0) {
//       return res.status(404).json({
//         err: "No files exist",
//       });
//     }
//     // Files exist
//     return res.json(files);
//   });
// });

// // api/works/files/:filename (get current image data)
// router.get("/files/:filename", (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     // Check if file
//     if (!files || files.length === 0) {
//       return res.status(404).json({
//         err: "No files exist",
//       });
//     }
//     // File exist
//     return res.json(file);
//   });
// });

// // api/works/images/:filename (get all images)
// router.get("/images/:filename", (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     // Check if file
//     if (!files || files.length === 0) {
//       return res.status(404).json({
//         err: "No files exist",
//       });
//     }
//     // Check if image
//     if (file.contentType === "image/jpeg" || ile.contentType === "image/png") {
//       // Read output to browser
//       const readstream = gfs.createReadStream(file.fileName);
//       readstream.pipe(res);
//     } else {
//       res.status(404).json({
//         err: "Not an image",
//       });
//     }
//   });
// });

// // api/works/images/:filename (get current photo)
// router.get("/images/:filename", (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     // Check if file
//     if (!files || files.length === 0) {
//       return res.status(404).json({
//         err: "No files exist",
//       });
//     }
//     // Check if image
//     if (file.contentType === "image/jpeg" || ile.contentType === "image/png") {
//       // Read output to browser
//       const readstream = gfs.createReadStream(file.fileName);
//       readstream.pipe(res);
//     } else {
//       res.status(404).json({
//         err: "Not an image",
//       });
//     }
//   });
// });

module.exports = router;

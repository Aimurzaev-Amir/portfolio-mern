const { Router } = require("express");
const Articles = require("../models/Articles");
const ArticleFullVersion = require("../models/ArticleFullVersion");
const ArticleImg = require("../models/ArticleImg");
const router = Router();

// Creating main routes for Articles Model.

// /api/articles/create
router.post("/create", async (req, res) => {
  try {
    const { articleName, articleSmallDescription, urlAdress } = req.body;
    const Article = new Articles({ articleName, articleSmallDescription, urlAdress });

    await Article.save();

    res.status(201).json({ Article });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/addPhoto
router.post("/addPhoto", async (req, res) => {
  const { name, descr, type, img, owner } = req.body;
  const imageData = new ArticleImg({
    name,
    descr,
    type,
    owner,
  });
  saveImage(imageData, img);
  try {
    const newImg = await imageData.save();
    res.redirect("/admin/update-latest-article");
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

// /api/articles/createFull
router.post("/createFull", async (req, res) => {
  try {
    const Article = Articles.findOne().sort({ field: -_id }).limit(1);
    // const Article = await Articles.findOne({ _id: req.body.id });
    // const articleId = Article._id;
    // const FullVersion = new ArticleFullVersion({ color: req.body.color, owner: articleId });
    // await FullVersion.save();

    // res.status(201).json({ FullVersion });
    res.status(201).json({ Article });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/:id
router.patch("/:id", async (req, res) => {
  try {
    const Article = await Articles.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({ Article });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/
router.get("/", async (req, res) => {
  try {
    const ArticlesData = await Articles.find();
    res.json(ArticlesData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/:id
router.get("/:id", async (req, res) => {
  try {
    const Article = await Articles.findById(req.params.id);
    res.json(Article);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

module.exports = router;

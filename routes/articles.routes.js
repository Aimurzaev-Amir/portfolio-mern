const { Router } = require("express");
const Articles = require("../models/Articles");
const ArticlesImages = require("../models/ArticlesImages");
const ArticleBlock = require("../models/ArticleBlock");
const BlocksImages = require("../models/BlocksImages");
const router = Router();

// Creating main routes for Articles Model.

// /api/articles/create
router.post("/create", async (req, res) => {
  try {
    const Article = new Articles(req.body);
    console.log(Article);
    await Article.save();

    res.status(201).json({ Article });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/", async (req, res) => {
  try {
    const ArticlesData = await Articles.find();
    res.json(ArticlesData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

router.post("/createArticleBlock", async (req, res) => {
  try {
    const Block = new ArticleBlock(req.body);
    console.log(Block);
    await Block.save();

    res.status(201).json({ Block });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/getArticleBlockData", async (req, res) => {
  try {
    const ArticleBlockData = await ArticleBlock.find();
    res.json(ArticleBlockData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/addPhoto
router.post("/addPhoto", async (req, res) => {
  const { descr, type, img, owner } = req.body;
  const imageData = new ArticlesImages({
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

router.post("/block/addPhoto", async (req, res) => {
  const { descr, type, img, articleOwner, blockOwner } = req.body;
  const imageData = new BlocksImages({
    descr,
    type,
    articleOwner,
    blockOwner,
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

module.exports = router;

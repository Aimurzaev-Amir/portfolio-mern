const { Router } = require("express");
const Articles = require("../models/Articles");
const ArticleFullVersion = require("../models/ArticleFullVersion");
const router = Router();


// Creating main routes for Articles Model.

// /api/articles
router.post("/create", async (req, res) => {
  try {
    const Article = new Articles(req.body);

    await Article.save();

    res.status(201).json({ Articles });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/createFull
router.post("/createFull", async (req, res) => {
  try {
    const Article = await Articles.findOne({ _id: req.body.id });
    const articleId = Article._id;
    const FullVersion = new ArticleFullVersion({ color: req.body.color, owner: articleId });
    await FullVersion.save();

    res.status(201).json({ FullVersion });
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

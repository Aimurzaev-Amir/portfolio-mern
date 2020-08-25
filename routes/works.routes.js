const { Router } = require("express");
const Works = require("../models/Works");
const auth = require("../middleware/auth.middleware");
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
    const Work = await Works.updateOne({ id: req.params.id }, { $set: req.body });
    res.json({ Work });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/
router.get("/", auth, async (req, res) => {
  try {
    const Works = await Works.find({ owner: req.user.userId });
    res.json(links);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/:id
router.get("/:id", auth, async (req, res) => {
  try {
    const Work = await Works.findById(req.params.id);
    res.json(Work);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

module.exports = router;

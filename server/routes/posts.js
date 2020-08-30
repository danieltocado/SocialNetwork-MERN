const express = require("express");

const PostController = require("../controllers/PostController");

const router = express.Router();

router.get("/all", PostController.getAll);
router.get("/:id", PostController.getPostByUser);
router.get("/following/:id", PostController.getPostsfromFollowed);
router.post("/create", PostController.create);

module.exports = router;
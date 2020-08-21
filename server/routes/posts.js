const express = require("express");

const PostController = require("../controllers/PostController");

const router = express.Router();

router.get("/all", PostController.getAll);
router.post("/create", PostController.create);

module.exports = router;
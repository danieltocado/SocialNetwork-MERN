const express = require("express");

const { auth, isAdmin } = require("../middlewares/auth.js");

const UploadController = require("../controllers/UploadController");

const router = express.Router();

router.post("/upload", UploadController.create);

module.exports = router;
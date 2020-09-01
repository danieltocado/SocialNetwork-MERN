const express = require("express");

const auth = require("../middlewares/auth.js");

const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/all", UserController.getAll);
router.get("/five", UserController.getFive);
router.get("/info", UserController.getInfo)
router.post('/post/:id', UserController.getPostsbyUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/update/:id", UserController.update);
router.post("/logout", auth, UserController.logout);
router.get("/:username", UserController.profile);
router.delete("/:email", UserController.delete);

module.exports = router;
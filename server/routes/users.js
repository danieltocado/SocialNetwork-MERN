const express = require("express");

const auth = require("../middlewares/auth.js");

const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/all", UserController.getAll);
router.get("/info", UserController.getInfo)
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/update", UserController.update);
router.post("/logout", auth, UserController.logout);
router.post("/profile", UserController.profile);
router.delete("/:email", UserController.delete);

module.exports = router;
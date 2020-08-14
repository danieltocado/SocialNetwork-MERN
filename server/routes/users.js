const express = require("express");

const { auth, isAdmin } = require("../middlewares/auth.js");

const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/info", UserController.getInfo)
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/update", UserController.update);
router.post("/logout", UserController.logout);
router.post("/profile", UserController.profile);
router.delete("/:email", UserController.delete);

module.exports = router;
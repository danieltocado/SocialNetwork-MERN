const express = require("express");

const auth = require("../middlewares/auth.js");

const FollowController = require("../controllers/FollowController");

const router = express.Router();

router.post("/follow", auth, FollowController.startFollow)
router.delete("/follow/:id", auth, FollowController.stopFollow);
router.get("/following/:id", auth, FollowController.followingUsers);
router.get("/followed/:id?", auth, FollowController.followedUsers);
router.get("/follows/:followed?", auth, FollowController.userFollows);


module.exports = router;
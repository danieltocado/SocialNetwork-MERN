const Like = require("../models/Like");

const LikeController = {

    async likePost(req, res) {
        try {
            const like = await Like.create(req.body);
            res.send({
              like,
              message: "Post liked.",
            });
        } catch (error) {
          console.error(error);
          res.status(500).send({
            message: "Post like error",
            error,
          });
        }
      },

}

module.exports = LikeController;
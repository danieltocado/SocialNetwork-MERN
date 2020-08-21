//Models

const Post = require("../models/Post");

const PostController = {

  async create(req, res) {
    try {
    const post = await Post.create(req.body);
      res.send({
        post,
        message: "Post creado con éxito.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al crear el post.",
        error,
      });
    }
  },

  async getAll(req, res) {
    try {
      const posts = await Post.find().populate({path: 'user'}).sort({date: -1});
      res.send(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al obtener todos los post.",
      });
    }
  },
};

module.exports = PostController;
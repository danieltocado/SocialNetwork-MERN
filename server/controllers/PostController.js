//Models

const Post = require("../models/Post");
const Follow = require("../models/Follow");

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

  async getPostByUser(req,res) {
    try {
      const userId = req.params.id;
      const post = await Post.find({ 'user': userId }).populate('user').sort({date: -1});
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al obtener los post del usuario.",
      });
    }
  },

  async getPostsfromFollowed(req,res) {
    try {
      const userId = req.params.id;
      const post = await Post.find({ 'user': userId }).populate('user')
      post.followers = await Follow.find({'user': userId}).populate({path: 'followed'})
      res.send(post.followers);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al obtener los post de los usuarios que sigues.",
      });
    }
  },
};

module.exports = PostController;
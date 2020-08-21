const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    name: String,
    username: String,
    text: String,
    image: String,
    avatar: String, 
    date: { type: Date, default: Date.now },
    user: { type: Schema.ObjectId, ref:'User' }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
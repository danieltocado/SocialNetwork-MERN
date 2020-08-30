const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LikeSchema = new mongoose.Schema({
    user: { type: Schema.ObjectId, ref:'User' },
    post: { type: Schema.ObjectId, ref:'Post' }
});

const Like = mongoose.model("Like", LikeSchema);

module.exports = Like;
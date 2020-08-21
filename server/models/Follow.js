const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FollowSchema = new mongoose.Schema({
    user: { type: Schema.ObjectId, ref:'User' },
    followed: { type: Schema.ObjectId, ref:'User' }
});

const Follow = mongoose.model("Follow", FollowSchema);

module.exports = Follow;
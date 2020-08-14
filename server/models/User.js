const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birthdate: {
        type: Date,
        required: false,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },  
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    tokens: {
        type: [String],
    },
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
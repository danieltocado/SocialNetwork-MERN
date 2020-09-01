const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    
    username: {
        type: String,
        trim: true,
        required: 'Username is required',
        unique: 'Username must be unique',
    },
    name: {
        type: String,
        trim: true,
        required: 'Name is required',
    },
    surname: {
        type: String,
        trim: true,
        required: 'Surname is required',
    },
    email: {
        type: String,
        trim: true,
        required: 'Email is required',
        unique: 'Email must be unique',
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
    bio: {
        type: String,
        trim: true,
    },
    avatar: {
        type: String,
        trim: true,
    },
    ubication: {
        type: String,
        trim: true,
    },
    website: {
        type: String,
        trim: true,
    }
});



const User = mongoose.model('User', UserSchema)



module.exports = User;
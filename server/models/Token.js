const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  id_user: {
    type: String,
    required: true,
  },
});

const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;
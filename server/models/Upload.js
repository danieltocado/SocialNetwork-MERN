const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
  file: String,
  file_name: String,
  file_description: String
});

const Upload = mongoose.model("Upload", UploadSchema);

module.exports = Upload;
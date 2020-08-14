//Models
const Upload = require("../models/Upload.js");


const UploadController = {

  async create(req, res) {
    try {
    const file = await Upload.create(req.body);
      res.send({
        file,
        message: "Archivo subido con éxito.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al crear el archivo.",
        error,
      });
    }
  },
};

module.exports = UploadController;
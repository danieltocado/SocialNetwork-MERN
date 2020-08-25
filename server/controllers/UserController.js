const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Models
const User = require("../models/User.js");
const Token = require("../models/Token.js");

const UserController = {

  async register(req, res) {
    try {
      const hash = await bcrypt.hash(req.body.password, 8);
      req.body.password = hash;

      const user = await User.create(req.body);
      res.send({
        user,
        message: "Usuario creado con éxito.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al crear el usuario.",
        error,
      });
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.find().populate({path: 'posts'})
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al obtener todos los usuarios.",
      });
    }
  },

  async getPostsbyUser(req,res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id).populate('posts');
      res.send(user.posts);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al obtener todos los usuarios.",
      });
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
        
      });

      if (!user) {
        return res.status(400).send({
          message: "Credenciales incorrectos.",
        });
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send({
          message: "Credenciales incorrectos!!!",
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        "SECRET"
      );

      await User.findByIdAndUpdate(user._id, {
        $push: {
          tokens: token,
        },
      });

      res.send({
        message: "Te has logeado con éxito.",
        user,
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al logear el usuario.",
        error,
      });
    }
  },

  async update(req,res) {
    try {
      const userId = req.params.id;
      const dataUpdate = req.body; 

      delete dataUpdate.password;

      const user = await User.findByIdAndUpdate(userId, dataUpdate, { new: true }); 
      res.send({message: "Has actualizado con éxito.", user});
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al updatear el usuario.",
        error,
    });
   } 
  },

  

  async logout(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.user._id, {
        $pull: {
          tokens: req.headers.authorization,
        },
      });

      res.send({message: "Te has deslogeado con éxito.", user});
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al deslogear el usuario.",
        error,
      });
    }
  },

  async profile(req, res) {
    try {
      await Token.findOne({
        _id: req.body.token,
      }).then((token) => {
        if (token) {
          const userChoose = req.body;

          User.findOne({
            username: userChoose.name,
          })
            .then((users) => {
              if (users) {
                res.send(users);
              }
            })
            .catch((error) => console.log(error));
        } else {
          res.send({
            message: "El usuario debe estar logeado.",
          });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al mostrar el perfil de usuario.",
        error,
      });
    }
  },

  async delete(req, res) {
    try {
      const user = await User.findOneAndDelete({
        email: req.params.email,
      });
      res.send({
        message: "Usuario eliminado con éxito",
        user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al eliminar el usuario.",
        error,
      });
    }
  },

  getInfo(req, res) {
    res.send(req.user);
  },

  
};

module.exports = UserController;
//Models

const Follow = require("../models/Follow");

const FollowController = {
  async startFollow(req, res) {
    try {
        const follow = await Follow.create(req.body);
        res.send({
          follow,
          message: "Usuario seguido con éxtio.",
        });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al seguir al usuario.",
        error,
      });
    }
  },

  async stopFollow(req, res) {
    try {
    var userId = req.user.sub;
    var followId = req.params.id;  
    const follow = await Follow.find({'user':userId, 'followed':followId}).remove
      res.status(200).send({message: 'El follow se ha eliminado', follow});
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al dejar de seguir al usuario.",
      });
    }
  },

  async followingUsers(req, res) {
    try {
        var userId = req.user.sub;

        if(req.params.id){
            userId = req.params.id;
        }

        const following = await Follow.find({user:userId}).populate({path: 'followed'}) 
        res.status(200).send({message: 'El follow se ha encontrado', following});
       
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al mostrar los usuarios.",
      });
    }
  },

  async followedUsers(req, res) {
    try {
        var userId = req.user.sub;

        if(req.params.id){
            userId = req.params.id;
        }

        const followed = await Follow.find({followed:userId}).populate('user') 
        res.status(200).send({message: 'El follow se ha encontrado', followed});
       
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al mostrar los usuarios.",
      });
    }
  },

  async userFollows(req, res) {
    try {
        var userId = req.user.sub;

        var find = Follow.find({user: userId});

        if(req.params.followed){
            find = Follow.find({followed: userId});
        }

        const userfollow = find.populate('user followed')
        res.status(200).send({message: 'El follow se ha encontrado', userfollow});
       
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al mostrar los usuarios.",
      });
    }
  },

};

module.exports = FollowController;

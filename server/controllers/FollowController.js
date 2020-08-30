//Models

const Follow = require("../models/Follow");

const FollowController = {
  async startFollow(req, res) {
    try {
        const follow = await Follow.create(req.body);
        res.send({
          follow,
          message: "Usuario seguido con éxito.",
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
      const userId = req.user.id; 
      const followId = req.params.id; 

      const unfollow = await Follow.find({'user': userId, 'followed': followId}).remove()
      res.status(200).send({
       unfollow,
        message: "Has dejado de seguir al usuario con éxito.",
      });
      
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al dejar de seguir al usuario.",
        error,
    })
    }     
    
  },

  async followingUsers(req, res) {
    try {
      const userId = req.params.id; 
      const username = req.user.username;
 
      const following = await Follow.find({'user': userId}).populate({path: 'followed'})
      res.status(200).send({
        message: "Usuarios seguidos por usuario con Id: " + userId,
        following,
      });
      
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al mostrar los usuarios seguidos.",
        error,
    })
    } 
  },

  async followedUsers(req, res) {
    try {
      const userId = req.params.id; 
      const username = req.user.username;
 
      const followed = await Follow.find({'followed': userId}).populate({path: 'user'})
      res.status(200).send({
        message: "Seguidores de usuario con Id: "  + userId,
        followed,
      });
      
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un error al mostrar los seguidores.",
        error,
    })
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

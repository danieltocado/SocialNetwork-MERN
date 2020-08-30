import React from "react";
import Axios from "axios";
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import { update } from "../../redux/actions/users";
import "./profile.scss";

const Profile = () => {
  
  const user = useSelector((state) => state.user);

  const onSubmit = (event) => {
    console.log(user._id)

    event.preventDefault();
    const userupdate = {
      name: event.target.name.value,
      surname: event.target.surname.value,
      username: event.target.username.value,
      //email: event.target.email.value,
      birthdate: event.target.birthdate.value,
      avatar: event.target.avatar.value,
      bio: event.target.bio.value,
      gender: event.target.gender.value,
      
    };
  
    update(user._id, userupdate)
    
    console.log("Usuario actualizado ", user._id)
  };
  

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Actualización de perfil</h2>
      </div>
      <div className="post_container">
      <div className="user_container">
          <div className="user_info">
            <div className="user_left">
              <img src={user.avatar} className="profile_avatar" alt="" srcset=""/>
            </div>

            <div className="user_right">
              <h1>{user.name} {user.surname}</h1> 
              <span className="username">@{user.username}</span>

              <h3>{user.email}</h3>
              <h4>{user.bio}</h4>

              <h3>Following: 
              Followers:
            </h3>

            </div>
          </div>
          

          <div className="user_bottom">
           
          
          {/*<Link to={"/" + userProfile?.user.username + "/followers"}><h3>Followers</h3></Link> */}
          </div>
        </div>
        </div>
      {user?._id ? (
        
        <form onSubmit={onSubmit} className="signup-form">
          
          <h2>Actualización</h2>
          <p className="hint-text">
            Actualiza tu cuenta. Añade una foto de perfil y una pequeña biografía tuya!
          </p>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={user.name}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="surname"
                  placeholder={user.surname}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder={user.username}
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={user.email}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <select className="form-control" name="gender"  defaultValue="value1" required>
                  <option value="value1">
                    Género
                  </option>
                  <option value="male">Hombre</option>
                  <option value="female">Mujer</option>
                </select>
              </div>
              <div className="col">
                <input
                  type="date"
                  className="form-control"
                  name="birthdate"
                  placeholder="Fecha de nacimiento"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
              <div className="col">
                <input
                  type="textarea"
                  cols="40" rows="5"
                  className="form-control"
                  name="bio"
                  placeholder="Escribe unas pocas líneas sobre tí."
                />
              </div>
           </div>
           <div className="form-group">
              <div className="col">
                <input
                  type="textarea"
                  cols="40" rows="5"
                  className="form-control"
                  name="avatar"
                  placeholder="Enlace de tu avatar."
                />
              </div>
              
          </div>
          

          <div className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block">
              Actualiza
            </button>
          </div>
        </form>
      ) : (
        <p>no se ha encontrado user </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({user: state.user});
export default connect(mapStateToProps)(Profile);

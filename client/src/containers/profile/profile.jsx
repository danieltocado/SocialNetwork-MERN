import React from "react";
import { useSelector } from 'react-redux';
import { update } from "../../redux/actions/users";
import "./profile.scss";


const Profile = () => {
    
    const user = useSelector(state => state.user);

    const onSubmit = (event) => {
        event.preventDefault();
        const user = {
          name: event.target.name.value,
          surname: event.target.surname.value,
          username: event.target.username.value,
          email: event.target.email.value,
          birthdate: event.target.birthdate.value,
          password: event.target.password.value,
          password2: event.target.password2.value,
          gender: event.target.gender.value,
        };
    
        update(user)
                .then(() => {
                    setTimeout(() => {
                        //window.location.reload()
                    }, 1000);
                })
                .catch(error => {
                    console.log(error)
                });
        console.log(user);
    
    }

    return (
        <div className="feed">
        {/* Header */}
        <div className="feed_header">
          <h2>Perfil</h2>
        </div>
        {user?._id
        
        ?
          
        <form onSubmit={onSubmit} className="signup-form">
     
        <h2>Actualizacion</h2>
            <p className="hint-text">Crea tu cuenta. Es gratis y tardas menos de un minuto.</p>
        <div className="form-group">
                <div className="row">
                    <div className="col"><input type="text" className="form-control" name="name" placeholder="Nombre" /></div>
                    <div className="col"><input type="text" className="form-control" name="surname" placeholder="Apellidos" /></div>
                </div>        	
        </div>
        <div className="form-group">
                <div className="row">
                    <div className="col"><input type="text" className="form-control" name="username" placeholder="Nombre de usuario" /></div>
                    <div className="col"><input type="email" className="form-control" name="email" placeholder="Correo electrónico" /></div>
                </div>        	
        </div>
        <div className="form-group">
                <div className="row">
                    <div className="col">
              <select className="form-control" name="gender" required>
                <option value="value1" selected>Género</option> 
                <option value="male">Hombre</option>
                <option value="female">Mujer</option>
              </select></div>
                    <div className="col"><input type="date" className="form-control" name="birthdate" placeholder="Fecha de nacimiento" /></div>
                </div>        	
        </div>
        <div className="row">
                <div className="col"><input type="password" id="password" name="password" className="form-control" name="first_name" placeholder="Introduce tu contraseña" /></div>
                <div className="col"><input type="password" id="password2" name="password2" className="form-control" name="last_name" placeholder="Repite tu contraseña" /></div>
          
            </div> 
        
            <div className="form-group">
          <button type="submit" className="btn btn-success btn-lg btn-block">Actualisa</button>
        </div>
         
                         
        </form>
            
        :
          <p>no se ha encontrado user </p>
        }
      </div>
    );
  
}

export default Profile;
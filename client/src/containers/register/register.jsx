import React, { useState } from "react";
import { register } from "../../redux/actions/users";
import "./register.scss";
//import { useHistory } from 'react-router-dom';


const Register = (props) => {
  const [passwordError, setPasswordError] = useState("");
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

    if (user.password !== user.password2) {
      return setPasswordError(
        <p classNameName="passwordError">
          <i className="fas fa-exclamation-triangle" /> <br/>Las contraseñas no
          coinciden.
        </p>
      );
    }

    register(user)
            .then(() => {
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch(error => {
                console.log(error)
            });
    console.log(user);

    
  };
  return (
    <form onSubmit={onSubmit} className="signup-form">
     
    <h2>Registro</h2>
		<p className="hint-text">Crea tu cuenta. Es gratis y tardas menos de un minuto.</p>
    <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" className="form-control" name="name" placeholder="Nombre" required="required"/></div>
				<div className="col"><input type="text" className="form-control" name="surname" placeholder="Apellidos" required="required"/></div>
			</div>        	
    </div>
    <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" className="form-control" name="username" placeholder="Nombre de usuario" required="required"/></div>
				<div className="col"><input type="email" className="form-control" name="email" placeholder="Correo electrónico" required="required"/></div>
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
				<div className="col"><input type="date" className="form-control" name="birthdate" placeholder="Fecha de nacimiento" required="required"/></div>
			</div>        	
    </div>
    <div className="row">
			<div className="col"><input type="password" id="password" name="password" className="form-control" name="first_name" placeholder="Introduce tu contraseña" required="required"/></div>
			<div className="col"><input type="password" id="password2" name="password2" className="form-control" name="last_name" placeholder="Repite tu contraseña" required="required"/></div>
      
		</div> 
    <div className="form-group hint-text">
			<label className="form-check-label"><input type="checkbox" required="required" className="hint-text"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div className="form-group">
      <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
    </div>
    <div className="row">
      <span>{passwordError}</span>
    </div>   
                     
    </form>
  );
};

export default Register;
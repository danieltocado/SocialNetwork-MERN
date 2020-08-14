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
      email: event.target.email.value,
      birthdate: event.target.birthdate.value,
      password: event.target.password.value,
      password2: event.target.password2.value,
      gender: event.target.gender.value,
    };

    if (user.password !== user.password2) {
      return setPasswordError(
        <p className="passwordError">
          <i class="fas fa-exclamation-triangle" /> Las contraseñas no
          coinciden.
        </p>
      );
    }

    register(user)
            .then(() => {
                setTimeout(() => {
                    //props.history.push('/login')
                }, 1000);
            })
            .catch(error => {
                console.log(error)
            });
    console.log(user);

    
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="contenedor">
        <div className="contenedor_login">
          <h2 className="h2-box">Ya estas registrado? Logeate!</h2>
          <button className="btn_logged">LOGEATE</button>
        </div>
        <div className="contenedor_registro">
          <h2 className="h2-box">
            Rellena los datos, para unirte a la mejor comunidad de viajes!
          </h2>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">
              Nombre
            </label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Surname"
              name="surname"
              id="surname"
              required
            />
            <label htmlFor="surname" className="form__label">
              Apellidos
            </label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group field">
            <input
              type="date"
              className="form__field"
              placeholder="Fecha de nacimiento"
              name="birthdate"
              id="birthdate"
              required
            />
            <label htmlFor="birthdate" className="form__label">
              Fecha de nacimiento
            </label>
          </div>
          <div className="form__group field">
            <input
              type="password"
              minLength="8"
              className="form__field"
              placeholder="Contraseña"
              name="password"
              id="password"
              required
            />
            <label htmlFor="password" className="form__label">
              Contraseña
            </label>
          </div>
          <div className="form__group field">
            <input
              type="password"
              minLength="8"
              className="form__field"
              placeholder="Contraseña"
              name="password2"
              id="password2"
              required
            />
            <label htmlFor="password2" className="form__label">
              Repite la contraseña
            </label>
          </div>
          <span>{passwordError}</span>
    
          <div className="form__group field">
            <input
              type="input"
              
              className="form__field"
              placeholder="genero"
              name="gender"
              id="gender"
              required
            />
            <label htmlFor="gender" className="form__label">
              Male o female
            </label>
          </div>
          <button className="btn_logged" type="submit">
            REGISTRATE
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
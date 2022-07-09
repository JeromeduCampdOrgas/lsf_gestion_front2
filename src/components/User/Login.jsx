import { useState } from "react";
import configAxios from "../../config/configAxios";
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { addConnexion } from "../../feature/users/userSlice";

//********** styled-components */

import "../../styles/Admin/users/login.scss";
/****** Pages *************************/
import Signin from "./Signin";

const Login = () => {
  const [signed, setSigned] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const goSignin = () => {
    setSigned(!signed);
  };
  const connexion = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value && password.value) {
      configAxios
        .post("login", {
          email: email.value,
          password: password.value,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            dispatch(addConnexion(response.data.token));
            //dispatch(isConnected(true));
            navigate("/", { replace: true });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("C'est tout vide");
    }
  };
  return signed ? (
    <Signin />
  ) : (
    <div id="form-container">
      <form id="login-form">
        <input id="email" type="text" placeholder="votre email" />
        <input id="password" type="password" placeholder="mot de passe" />
        <input
          className="btn"
          type="button"
          value="Se connecter"
          onClick={() => connexion()}
        />
        <div id="inscription">
          <span>Pas encore de compte? </span>
          <input
            className="btn"
            type="button"
            value="S'inscrire"
            onClick={() => {
              goSignin();
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default Login;

import { useState } from "react";
import configAxios from "../../config/configAxios";

//********** styled-components */
import styled from "styled-components";
/****** Pages *************************/
import Signin from "./Signin";
//************ CSS **************************************/
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 40%;
  background-color: #29567e;
  border-radius: 15px;

  & input {
    padding: 3px;
    margin: 10px auto;
  }

  & .btn {
    width: 20%;
    margin-top: 25px;
  }
  & div {
    width: 80%;
    text-align: center;
    background-color: #08ad56;
    border-radius: 15px;
    margin-top: 25px;
    margin-bottom: 25px;
    & span {
      padding: 10px;
    }
    & .btn {
      background-color: #ad5608;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;

    .btn {
      width: 45%;
      background-color: red;
    }
  }
`;

//*************Fin CSS **********************************/

const Login = () => {
  const [signed, setSigned] = useState(false);
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
            console.log(response.data.user);
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      console.log("C'est tout vide");
    }
  };
  return signed ? (
    <Signin />
  ) : (
    <LoginFormStyled id="login-form" signed={signed} setSigne={setSigned}>
      <input id="email" type="text" placeholder="votre email" />
      <input id="password" type="password" placeholder="mot de passe" />
      <input
        className="btn"
        type="button"
        value="Se connecter"
        onClick={() => connexion()}
      />
      <div>
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
    </LoginFormStyled>
  );
};
export default Login;

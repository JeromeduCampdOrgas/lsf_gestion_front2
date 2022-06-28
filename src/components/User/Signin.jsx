import { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
const H1 = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
`;

const SigninFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 40%;
  background-color: rgb(127, 127, 225);
  border-radius: 15px;

  & input {
    padding: 3px;
    margin: 10px auto;
  }

  & .btn {
    width: 20%;
    margin-top: 25px;
    padding: 10px;
    border-radius: 15px;
    border: none;
  }
  .btn:hover {
    transform: scale(1.1);
    transition: all 0.2s linear;
  }
  & div {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-top: 25px;
    margin-bottom: 25px;
    & span {
      padding: 10px;
    }
    & #btn-valid {
      background-color: #08ad56;
    }
    & #btn-escape {
      background-color: red;
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

const Signin = () => {
  const [escape, setEscape] = useState(false);
  const escaping = () => {
    setEscape(!escape);
  };
  return escape ? (
    <Login />
  ) : (
    <div className="signin">
      <H1>je m'inscris</H1>
      <SigninFormStyled>
        <input id="nom" type="text" placeholder="votre nom" />
        <input id="prenom" type="text" placeholder="votre prénom" />
        <input id="email" type="text" placeholder="votre email" />
        <input id="password" type="password" placeholder="mot de passe" />
        <div>
          <input id="btn-valid" className="btn" type="button" value="Valider" />

          <input
            id="btn-escape"
            className="btn"
            type="button"
            value="Annuler"
            onClick={() => {
              escaping();
            }}
          />
        </div>
      </SigninFormStyled>
    </div>
  );
};
export default Signin;

/****** Modules **********/
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }, { setopen }) => {
  return (
    <Ul open={open} setopen={setopen}>
      <li id="home">
        <Link
          className="navbar__link"
          to={"/"}
          onClick={() => (open ? setopen(false) : "")}
        >
          Accueil
        </Link>
      </li>
      <li>About us</li>
      <li>Contact us</li>
      <li id="login">
        <Link
          className="navbar__link"
          to={"/connexion"}
          onClick={() => (open ? setopen(false) : "")}
        >
          Se connecter
        </Link>
      </li>
      <li>Sign Up</li>
    </Ul>
  );
};
export default RightNav;

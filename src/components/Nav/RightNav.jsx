import { Link } from "react-router-dom";
import styled from "styled-components";
/***** Users  */
import { deleteConnexion } from "../../feature/users/userSlice";
import { deleteUsersList } from "../../feature/users/usersListSlice";
import { deleteUserData } from "../../feature/users/selectedUserDataSlice";
import { deleteSelection } from "../../feature/users/selectedUserSlice";
import { deleteRoles } from "../../feature/users/rolesSlice";
/**** Refuges */
import { deleteRefugesList } from "../../feature/refuges/refugesListSlice";
import { deleteSelectedRefuge } from "../../feature/refuges/selectedRefugeSlice";
import { deleteRefugeGeo } from "../../feature/refuges/refugeSelectedGeoSlice";
import { deleteRefugeData } from "../../feature/refuges/selectedRefugeDataSlice";
/**** Chiens */
import { deleteChiensList } from "../../feature/chiens/chiensListSlice";
import { deleteSelectedChien } from "../../feature/chiens/selectedChienSlice";
import { deleteChienData } from "../../feature/chiens/selectedChienDataSlice";

import store from "../../app/store.js";
import { Provider, useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";

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
  const utilisateur = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [role, setRole] = useState();
  /**** Déconnexion */
  const disconnect = () => {
    localStorage.removeItem("token");
    setRole("");
    dispatch(deleteConnexion(0));
    dispatch(deleteUsersList());
    dispatch(deleteSelection());
    dispatch(deleteUserData());
    dispatch(deleteRoles());
    dispatch(deleteRefugesList());
    dispatch(deleteRefugeData());
    dispatch(deleteSelectedRefuge());
    dispatch(deleteRefugeGeo());
    dispatch(deleteChiensList());
    dispatch(deleteChienData());
    dispatch(deleteSelectedChien());
  };

  /****** Connexion */
  const connected = () => {
    if (utilisateur.length > 0) {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }
  };
  useEffect(() => {
    connected();
  });

  return (
    <Provider store={store}>
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
          {utilisateur.length > 0 ? (
            <Link
              className="navbar__link"
              to={"/connexion"}
              onClick={() => disconnect()}
            >
              Se déconnecter
            </Link>
          ) : (
            <Link
              className="navbar__link"
              to={"/connexion"}
              onClick={() => (open ? setopen(false) : "")}
            >
              Se connecter
            </Link>
          )}
        </li>

        <li>
          {role === "admin" ? <Link to={"/administration"}>Admin</Link> : ""}
        </li>
      </Ul>
    </Provider>
  );
};
export default RightNav;

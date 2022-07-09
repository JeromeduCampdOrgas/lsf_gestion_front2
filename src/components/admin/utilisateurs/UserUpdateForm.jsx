import { useNavigate } from "react-router-dom";
import store from "../../../app/store";
import { deleteRoles } from "../../../feature/users/rolesSlice";
import {
  addUserData,
  deleteUserData,
} from "../../../feature/users/selectedUserDataSlice";
import { deleteSelection } from "../../../feature/users/selectedUserSlice";
import { getUsersList } from "../../../feature/users/usersListSlice";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import configAxios from "../../../config/configAxios";

/*********  CSS **************/
import "../../../styles/Admin/users/userAdminForm.scss";

const UserUpdateForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const usersList = useSelector((state) => state.usersList[0]);
  const selectedUserId = useSelector((state) => state.selectedUser);
  const selectedUserData = useSelector((state) => state.selectedUserData);
  const listRoles = useSelector((state) => state.roles);

  const [userRole, setUserRole] = useState();
  useEffect(() => {
    console.log(listRoles);
    const userData = usersList.filter(
      (user) => user.id === parseInt(selectedUserId)
    );
    setUserRole(userData[0].role);
    dispatch(addUserData(userData));
  }, [dispatch, selectedUserId, usersList, listRoles]);

  /********** Annulation action et retour page users administration ******/
  //Remise à zero du store
  const clearStore = () => {
    dispatch(deleteUserData());
    dispatch(deleteSelection());
    dispatch(deleteRoles());
  };
  const retour = () => {
    clearStore();
    navigate("/adminUsers", { replace: true });
  };
  const handle = (event) => {
    setUserRole(event.target.value);
  };
  const handleValue = (event) => {
    event.target.value = event.target.placeholder;
  };
  /******** Validation des modifications ***********/

  const validation = async () => {
    //Récupération valeur ou placeholder
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let n_rue = document.getElementById("n_rue");
    let rue = document.getElementById("rue");
    let cp = document.getElementById("cp");
    let ville = document.getElementById("ville");
    let role = userRole;

    const token = localStorage.getItem("token");
    console.log({ token });
    nom.value ? (nom = nom.value) : (nom = nom.placeholder);
    prenom.value ? (prenom = prenom.value) : (prenom = prenom.placeholder);
    email.value ? (email = email.value) : (email = email.placeholder);
    tel.value ? (tel = tel.value) : (tel = tel.placeholder);
    n_rue.value ? (n_rue = n_rue.value) : (n_rue = n_rue.placeholder);
    rue.value ? (rue = rue.value) : (rue = rue.placeholder);
    cp.value ? (cp = cp.value) : (cp = cp.placeholder);
    ville.value ? (ville = ville.value) : (ville = ville.placeholder);
    //appel axios
    await configAxios
      .put(
        `users/${selectedUserId}`,
        {
          nom: nom,
          prenom: prenom,
          email: email,
          tel: tel,
          n_rue: n_rue,
          rue: rue,
          cp: cp,
          ville: ville,
          role: role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        configAxios
          .get("users")
          .then((response) => {
            dispatch(getUsersList(response.data));
            navigate("/adminUsers", { replace: true });
          })
          .catch(() => console.log("ça commence à me faire chier!"));
      })
      .catch(() => console.log("c'est quoi cette embrouille"));
  };

  /**************************************************/
  return (
    <Provider store={store}>
      <div id="user-admin-form">
        <h1>formulaire de modification</h1>

        {selectedUserData[0] ? (
          <form>
            <label className="user-info" htmlFor="nom">
              Nom:
              <input
                id="nom"
                type="text"
                placeholder={selectedUserData[0].nom}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="prenom">
              Prénom:
              <input
                id="prenom"
                type="text"
                placeholder={selectedUserData[0].prenom}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="email">
              Email:
              <input
                id="email"
                type="text"
                placeholder={selectedUserData[0].email}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="tel">
              Tel:
              <input
                id="tel"
                type="text"
                placeholder={selectedUserData[0].tel}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="n_rue">
              N°de rue:
              <input
                id="n_rue"
                type="text"
                placeholder={selectedUserData[0].n_rue}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="rue">
              Rue:
              <input
                id="rue"
                type="text"
                placeholder={selectedUserData[0].rue}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="cp">
              Code postal:
              <input
                id="cp"
                type="text"
                placeholder={selectedUserData[0].cp}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="ville">
              Commune:
              <input
                id="ville"
                type="text"
                placeholder={selectedUserData[0].ville}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="roles">
              Rôle:
              <select
                name="roles"
                id="roles"
                value={userRole}
                onChange={handle}
              >
                {listRoles[0]?.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
            <div id="buttons">
              <input
                id="btn-valid"
                className="btn"
                type="button"
                value="Valider"
                onClick={() => validation()}
              />

              <input
                id="btn-escape"
                className="btn"
                type="button"
                value="Annuler"
                onClick={() => retour()}
              />
            </div>
          </form>
        ) : (
          "coucou"
        )}
      </div>
    </Provider>
  );
};
export default UserUpdateForm;

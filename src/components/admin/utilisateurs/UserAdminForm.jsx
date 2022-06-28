import { useNavigate } from "react-router-dom";
import store from "../../../app/store";
import { deleteRoles } from "../../../feature/users/rolesSlice";
import {
  addUserData,
  deleteUserData,
} from "../../../feature/users/selectedUserDataSlice";
import { deleteSelection } from "../../../feature/users/selectedUserSlice";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

/*********  CSS **************/
import "../../../styles/Admin/users/userAdminForm.scss";

const UserAdminForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const usersList = useSelector((state) => state.usersList[0]);
  const selectedUserId = useSelector((state) => state.selectedUser);
  const selectedUserData = useSelector((state) => state.selectedUserData);
  const listRoles = useSelector((state) => state.roles);
  useEffect(() => {
    const userData = usersList.filter(
      (user) => user.id === parseInt(selectedUserId)
    );

    dispatch(addUserData(userData));
  }, []);

  /********** Annulation action et retour page users administration ******/
  //Remise à zero du store
  const clearStore = () => {
    dispatch(deleteUserData());
    dispatch(deleteSelection());
    dispatch(deleteRoles());
    /*for (let i = 0; i < userDataLength.length; i++) {
      dispatch(deleteSelectedUser());
    }*/
  };
  const retour = () => {
    clearStore();
    navigate("/adminUsers", { replace: true });
  };
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
              />
            </label>
            <label className="user-info" htmlFor="prenom">
              Prénom:
              <input
                id="prenom"
                type="text"
                placeholder={selectedUserData[0].prenom}
              />
            </label>
            <label className="user-info" htmlFor="email">
              Email:
              <input
                id="email"
                type="text"
                placeholder={selectedUserData[0].email}
              />
            </label>
            <label className="user-info" htmlFor="tel">
              Tel:
              <input
                id="tel"
                type="text"
                placeholder={selectedUserData[0].tel}
              />
            </label>
            <label className="user-info" htmlFor="n_rue">
              N°de rue:
              <input
                id="n_rue"
                type="text"
                placeholder={selectedUserData[0].n_rue}
              />
            </label>
            <label className="user-info" htmlFor="rue">
              Rue:
              <input
                id="rue"
                type="text"
                placeholder={selectedUserData[0].rue}
              />
            </label>
            <label className="user-info" htmlFor="cp">
              Code postal:
              <input id="cp" type="text" placeholder={selectedUserData[0].cp} />
            </label>
            <label className="user-info" htmlFor="ville">
              Commune:
              <input
                id="ville"
                type="text"
                placeholder={selectedUserData[0].ville}
              />
            </label>
            <label className="user-info" htmlFor="roles">
              Rôle:
              <select
                name="roles"
                id="roles"
                value={selectedUserData[0].role}
                onChange={(event) => console.log(event.target.value)}
              >
                {listRoles[0].map((role) => (
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
export default UserAdminForm;

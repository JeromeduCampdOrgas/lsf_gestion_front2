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

const UserAdminForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const usersList = useSelector((state) => state.usersList[0]);
  const selectedUserId = useSelector((state) => state.selectedUser);
  const userDataLength = useSelector((state) => state.selectedUserData);

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
      <div>
        <h1>formulaire de modification</h1>
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
            onClick={() => retour()}
          />
        </div>
      </div>
    </Provider>
  );
};
export default UserAdminForm;

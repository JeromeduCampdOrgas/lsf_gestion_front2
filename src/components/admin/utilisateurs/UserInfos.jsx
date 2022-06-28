import store from "../../../app/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSelectedUser } from "../../../feature/users/selectedUserDataSlice";
import { addRoles } from "../../../feature/users/rolesSlice";

const UserInfos = ({ setModif }) => {
  const selectedUser = useSelector((state) => state.selectedUser);
  const usersList = useSelector((state) => state.usersList[0]);
  const userData = usersList.filter(
    (user) => user.id === parseInt(selectedUser)
  );
  let rolesArray = ["delegue"];
  let dispatch = useDispatch();
  const handleModif = () => {
    dispatch(addSelectedUser(userData[0]));

    for (let i = 0; i < usersList.length; i++) {
      let role = usersList[i].role;
      if (!rolesArray.includes(role)) {
        rolesArray.push(role);
      }
    }
    dispatch(addRoles(rolesArray));
    setModif(true);
  };
  let navigate = useNavigate();
  const retour = () => {
    navigate("/adminUsers");
  };

  return (
    <Provider store={store}>
      <div>
        <div>
          <h2>Infos user</h2>
          <div>
            <p>Id: {userData[0].id}</p>
            <p>Nom: {userData[0].nom}</p>
            <p>Prénom: {userData[0].prenom}</p>
            <p>Email: {userData[0].email}</p>
            <p>Tel: {userData[0].tel}</p>
            <p>
              Adresse: {userData[0].n_rue} {userData[0].rue} {userData[0].cp}{" "}
              {userData[0].ville}
            </p>
            <p>Rôle: {userData[0].role}</p>
            <button onClick={() => handleModif()}>Modifier</button>
            <button onClick={() => retour()}>Annuler</button>
          </div>
        </div>
      </div>
    </Provider>
  );
};
export default UserInfos;

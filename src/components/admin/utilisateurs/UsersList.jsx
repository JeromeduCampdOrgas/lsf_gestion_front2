import store from "../../../app/store";
//import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserRow from "../utilisateurs/UserRow";
import "../../../styles/Admin/users/usersList.scss";
import UserDeleteAccountModal from "../../../components/admin/utilisateurs/UserDeleteAccountModal";

const UsersList = ({ openModal }) => {
  let navigate = useNavigate();
  const allUsers = useSelector((state) => state.usersList[0]);
  const displayModal = useSelector((state) => state.deleteModal);

  return (
    <Provider store={store}>
      {!displayModal ? (
        <div>
          <h1>Utilisateurs</h1>
          <p>
            <input
              type="button"
              value="Ajouter un utilisateur"
              onClick={() => navigate(`/usercreate`, { replace: true })}
            />
          </p>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>nom</th>
                <th>prénom</th>
                <th>n°rue</th>
                <th>rue</th>
                <th>cp</th>
                <th>ville</th>
                <th>email</th>
                <th>role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {allUsers?.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <UserDeleteAccountModal />
        </div>
      )}
    </Provider>
  );
};
export default UsersList;

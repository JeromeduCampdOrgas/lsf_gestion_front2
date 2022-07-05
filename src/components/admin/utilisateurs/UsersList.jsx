import store from "../../../app/store";
//import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserRow from "../utilisateurs/UserRow";
import "../../../styles/Admin/users/usersList.scss";
import UserDeleteAccountModal from "../../../components/admin/utilisateurs/UserDeleteAccountModal";
import { useState, useEffect } from "react";

import UserSearch from "../../admin/utilisateurs/UserSearch";

const UsersList = ({ openModal }) => {
  let navigate = useNavigate();
  const allUsers = useSelector((state) => state.usersList[0]);
  const displayModal = useSelector((state) => state.deleteModal);
  /******************** */
  const [userSearch, setUserSearch] = useState();
  useEffect(() => {
    if (allUsers) {
      setUserSearch(allUsers);
    }
  }, [allUsers]);
  /******************** */

  return (
    <Provider store={store}>
      {!displayModal ? (
        <div>
          <h1>Utilisateurs</h1>
          <p>
            <button
              className="btn"
              id="btn-add"
              onClick={() => navigate(`/usercreate`, { replace: true })}
            >
              Ajouter un utilisateur
            </button>
          </p>
          <UserSearch />
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

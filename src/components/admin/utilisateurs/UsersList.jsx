import store from "../../../app/store";

import { Provider, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../../../styles/Admin/users/usersList.scss";
import UserDeleteAccountModal from "../../../components/admin/utilisateurs/UserDeleteAccountModal";

import UserSearch from "../../admin/utilisateurs/UserSearch";

const UsersList = ({ openModal }) => {
  let navigate = useNavigate();

  const displayModal = useSelector((state) => state.deleteModal);
  /******************** */

  /******************** */

  return (
    <Provider store={store}>
      {!displayModal ? (
        <div>
          <div id="title">
            <span>
              <button
                className="btn"
                id="btn-add"
                onClick={() => navigate(`/usercreate`, { replace: true })}
              >
                Ajouter un utilisateur
              </button>
            </span>
            <h1>Utilisateurs</h1>
          </div>
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

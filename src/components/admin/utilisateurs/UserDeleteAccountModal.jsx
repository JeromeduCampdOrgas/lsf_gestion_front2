import "../../../styles/Admin/users/userDeleteAccountModal.scss";
import { hideModal } from "../../../feature/users/deleteModalSlice";
import { useDispatch, useSelector } from "react-redux";
import configAxios from "../../../config/configAxios";
import { useNavigate } from "react-router-dom";
import { getUsersList } from "../../../feature/users/usersListSlice";

const UserDeleteAccountModal = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const selectedUserId = useSelector((state) => state.selectedUser);
  const token = useSelector((state) => state.user);

  const closeModal = () => {
    dispatch(hideModal(false));
  };
  /*******  */
  //`users/delete/${selectedUserId}`
  const deleteValidation = async () => {
    //const token = localStorage.getItem("token");
    let userId = parseInt(selectedUserId);
    console.log({ token });
    //appel axios
    await configAxios
      .delete(`users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        configAxios
          .get("users")
          .then((response) => {
            dispatch(getUsersList(response.data));
            navigate("/adminUsers", { replace: true });
          })
          .catch(() => console.log("ça commence à me faire chier!"));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="modalBackground" onClick={() => closeModal()}>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal()}>X</button>
        </div>
        <div className="title">
          <h1>Etes-vous sûr de vouloir supprimer cet utilisateur</h1>
        </div>

        <div className="footer">
          <button id="cancelBtn" onClick={() => closeModal()}>
            Annuler
          </button>
          <button onClick={() => deleteValidation()}>Continuer</button>
        </div>
      </div>
    </div>
  );
};
export default UserDeleteAccountModal;

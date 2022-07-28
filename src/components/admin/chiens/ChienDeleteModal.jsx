import "../../../styles/Admin/users/userDeleteAccountModal.scss";
import { hideChienDeleteModal } from "../../../feature/chiens/deleteChienModalSlice";
import { useDispatch, useSelector } from "react-redux";
import configAxios from "../../../config/configAxios";
import { useNavigate } from "react-router-dom";
import { getChiensList } from "../../../feature/chiens/chiensListSlice";

const ChienDeleteModal = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const selectedChienId = useSelector((state) => state.selectedChien);
  const token = useSelector((state) => state.user);

  const closeModal = () => {
    dispatch(hideChienDeleteModal(false));
  };
  /*******  */
  //`Chiens/delete/${selectedUserId}`
  const deleteValidation = async () => {
    //const token = localStorage.getItem("token");
    let chienId = parseInt(selectedChienId);

    //appel axios
    await configAxios
      .delete(`chien/${chienId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        configAxios
          .get("refuges")
          .then((response) => {
            dispatch(getChiensList(response.data));
            navigate("/adminChiens", { replace: true });
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
export default ChienDeleteModal;

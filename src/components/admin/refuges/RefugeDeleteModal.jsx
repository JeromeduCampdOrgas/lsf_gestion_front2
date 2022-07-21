import "../../../styles/Admin/users/userDeleteAccountModal.scss";
import { hideRefugeDeleteModal } from "../../../feature/refuges/deleteRefugeModalSlice";
import { useDispatch, useSelector } from "react-redux";
import configAxios from "../../../config/configAxios";
import { useNavigate } from "react-router-dom";
import { getRefugesList } from "../../../feature/refuges/refugesListSlice";

const RefugeDeleteModal = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const selectedRefugeId = useSelector((state) => state.selectedRefuge);
  const token = useSelector((state) => state.user);

  const closeModal = () => {
    dispatch(hideRefugeDeleteModal(false));
  };
  /*******  */
  //`Refuges/delete/${selectedUserId}`
  const deleteValidation = async () => {
    //const token = localStorage.getItem("token");
    let refugeId = parseInt(selectedRefugeId);

    //appel axios
    await configAxios
      .delete(`refuge/${refugeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        configAxios
          .get("refuges")
          .then((response) => {
            dispatch(getRefugesList(response.data));
            navigate("/adminRefuges", { replace: true });
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
export default RefugeDeleteModal;

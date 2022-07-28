import { useSelector, useDispatch, Provider } from "react-redux";
import { useState } from "react";
import { hideModal, showModal } from "../../../feature/users/deleteModalSlice";
import { useNavigate } from "react-router-dom";

import "../../../styles/Admin/refuges/refugeRow.scss";
import "../../../styles/Admin/refuges/mapModal.scss";
import "../../../styles/Admin/refuges/refugesList.scss";
import ChienRow from "./ChienRow";
//import RefugesMap from "./RefugesMap";
import ChienDeleteModal from "../../admin/chiens/ChienDeleteModal";
import store from "../../../app/store";

const ChiensList = () => {
  const chiensList = useSelector((state) => state.chiensList[0]);
  /***************************** */
  const displayModal = useSelector((state) => state.deleteModal);
  const displayDeleteChienModal = useSelector(
    (state) => state.deleteChienModal
  );
  const [openModal, setOpenModal] = useState(false);
  let dispatch = useDispatch();
  const closeModal = () => {
    dispatch(hideModal(false));
  };
  /************************************* */
  const navigate = useNavigate();
  return (
    <Provider store={store}>
      <div>
        {!displayDeleteChienModal ? (
          <div id="list-container">
            {!displayModal ? (
              <div>
                <div id="title">
                  <span>
                    <button
                      className="btn"
                      id="btn-add"
                      onClick={() =>
                        navigate(`/chiencreate`, { replace: true })
                      }
                    >
                      Ajouter un chien
                    </button>
                  </span>
                  <h1>
                    Liste des chiens
                    <span
                      id="show-map"
                      onClick={() => {
                        setOpenModal(true);
                        console.log(openModal);
                        dispatch(showModal(openModal));
                      }}
                    >
                      (voir la carte)
                    </span>
                  </h1>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Image</th>
                      <th>Nom</th>
                      <th>N°de puce</th>
                      <th>Sexe</th>
                      <th>Taille</th>
                      <th>Santé</th>
                      <th>Refuge</th>
                      <th>Statut</th>
                      <th>Localisation</th>
                      <th>Commentaires</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chiensList?.map((chien) => (
                      <ChienRow key={chien.id} chien={chien} />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>
                <div className="modalMapBackground">
                  <div className="modalMapContainer">
                    <div className="titleCloseBtn">
                      <button onClick={() => closeModal()}>X</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <ChienDeleteModal />
        )}
      </div>
    </Provider>
  );
};
export default ChiensList;

import { useSelector, useDispatch, Provider } from "react-redux";
import { useState } from "react";
import { hideModal, showModal } from "../../../feature/users/deleteModalSlice";
import { getStatutsList } from "../../../feature/statuts/statutsListSlice";
import { useNavigate } from "react-router-dom";
import configAxios from "../../../config/configAxios";

//import "../../../styles/Admin/refuges/refugeRow.scss";
//import "../../../styles/Admin/refuges/mapModal.scss";
//import "../../../styles/Admin/refuges/refugesList.scss";
import "../../../styles/Admin/chiens/chiensList.scss";
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
  const getStatusList = () => {
    configAxios
      .get(`statut`)
      .then((response) => dispatch(getStatutsList(response.data)));
  };
  /************************************* */
  const navigate = useNavigate();

  //const chienData = chiensList.filter((chien) => chien.id === 1);
  return (
    <Provider store={store}>
      <div>
        {!displayDeleteChienModal ? (
          <div id="list">
            {!displayModal ? (
              <div>
                <div id="title">
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
                <div id="list-container">
                  <div id="list-actions">
                    <h3>Actions</h3>
                    <button
                      className="btn"
                      id="btn-add"
                      onClick={() =>
                        navigate(`/chiencreate`, { replace: true })
                      }
                    >
                      Ajouter un chien
                    </button>
                    <button
                      className="btn"
                      id="btn-danger"
                      onClick={() => {
                        getStatusList();
                        navigate(`/chienstatut`, { replace: true });
                      }}
                    >
                      Ajouter un statut
                    </button>
                  </div>
                  <div id="list-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Image</th>
                          <th>Nom</th>
                          <th>N°de puce</th>
                          <th>Sexe</th>
                          <th>Chat</th>
                          <th>Taille</th>
                          <th>Santé</th>
                          <th>Refuge</th>
                          <th>Statut</th>
                          <th>Localisation</th>

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
                </div>
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

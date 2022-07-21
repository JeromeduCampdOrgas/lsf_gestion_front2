import { useSelector, useDispatch, Provider } from "react-redux";
import { useState } from "react";
import { hideModal, showModal } from "../../../feature/users/deleteModalSlice";
import { useNavigate } from "react-router-dom";

import "../../../styles/Admin/refuges/refugeRow.scss";
import "../../../styles/Admin/refuges/mapModal.scss";
import "../../../styles/Admin/refuges/refugesList.scss";
import RefugeRow from "./RefugeRow";
import RefugesMap from "./RefugesMap";
import RefugeDeleteModal from "../../admin/refuges/RefugeDeleteModal";
import store from "../../../app/store";

const RefugesList = () => {
  const refugesList = useSelector((state) => state.refugesList[0]);
  /***************************** */
  const displayModal = useSelector((state) => state.deleteModal);
  const displayDeleteRefugeModal = useSelector(
    (state) => state.deleteRefugeModal
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
        {!displayDeleteRefugeModal ? (
          <div id="list-container">
            {!displayModal ? (
              <div>
                <div id="title">
                  <span>
                    <button
                      className="btn"
                      id="btn-add"
                      onClick={() =>
                        navigate(`/refugecreate`, { replace: true })
                      }
                    >
                      Ajouter un refuge
                    </button>
                  </span>
                  <h1>
                    Liste des refuges
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
                      <th>nom</th>
                      <th>localité</th>
                      <th>logo</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {refugesList?.map((refuge) => (
                      <RefugeRow key={refuge.id} refuge={refuge} />
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
                    <RefugesMap />
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <RefugeDeleteModal />
        )}
      </div>
    </Provider>
  );
};
export default RefugesList;

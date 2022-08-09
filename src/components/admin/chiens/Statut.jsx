import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStatutsList } from "../../../feature/statuts/statutsListSlice";
import configAxios from "../../../config/configAxios";
import "../../../styles/Admin/statuts.scss";
const Statut = () => {
  const statutsList = useSelector((state) => state.statutsList[0]);
  const [notNew, setNotNew] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [newStatut, setNewStatut] = useState();
  let dispatch = useDispatch();

  const handleChangeStatut = (e) => {
    setNewStatut(e.target.value);
  };
  /** Créer un statut */
  const createStatut = (e) => {
    if (newStatut.value === "") {
      setEmpty(true);
    } else {
      configAxios
        .post(`statut`, {
          statut: newStatut,
        })
        .then(() => {
          setNotNew(false);
          setEmpty(false);
          setNewStatut();
          configAxios.get(`statut`).then((response) => {
            dispatch(getStatutsList(response.data));
            window.location.reload();
          });
        })
        .catch(() => setNotNew(true));
    }
  };
  /******* Fin créer un statut */
  /**** Supprimer un statut  */
  const deleteStatut = (e) => {
    const token = localStorage.getItem("token");
    let statutToDelete =
      e.target.parentElement.parentElement.firstChild.innerHTML;
    let selectedStatut = statutsList.filter(
      (statut) => statut.statut === statutToDelete
    );
    let idToFind = selectedStatut[0].id;
    configAxios
      .delete(`statut/${idToFind}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        configAxios.get(`statut`).then((response) => {
          dispatch(getStatutsList(response.data));
        });
      });
  };
  /*** Fin supprimer un statut */

  const navigate = useNavigate();
  const statutCancel = () => navigate("/adminChiens", { replace: true });
  return (
    <div id="container">
      <div id="command">
        <div id="statuts-form">
          <form action="">
            <label htmlFor="statut">
              Nouveau statut
              <input
                type="text"
                id="statut"
                name="statut"
                onChange={(e) => {
                  handleChangeStatut(e);
                }}
              />
            </label>
          </form>

          <button
            className="btn"
            id="btn-add"
            type="submit"
            onClick={() => createStatut()}
          >
            Valider
          </button>
          <button
            className="btn"
            id="btn-delete"
            onClick={() => statutCancel()}
          >
            Annuler
          </button>
          {notNew ? <p id="alert">Ce statut existe déjà</p> : ""}
          {empty ? <p id="alert">Le champ est vide</p> : ""}
        </div>
        <button
          className="btn"
          id="previous-page"
          onClick={() => statutCancel()}
        >
          Page précédente
        </button>
      </div>
      <div id="statuts-table">
        <table>
          <thead>
            <tr>
              <th>Statuts existants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {statutsList.map((statut) => (
              <tr key={statut.id}>
                <td>{statut.statut}</td>
                <td className="actions-column">
                  <button
                    className="btn"
                    id="btn-delete"
                    onClick={(e) => deleteStatut(e)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Statut;

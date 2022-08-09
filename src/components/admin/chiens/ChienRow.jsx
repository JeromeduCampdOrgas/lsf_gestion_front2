import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSelectedChien } from "../../../feature/chiens/selectedChienSlice";
import { showChienDeleteModal } from "../../../feature/chiens/deleteChienModalSlice";

const ChienRow = ({ chien }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const chiensList = useSelector((state) => state.chiensList[0]);

  const [openModal, setOpenModal] = useState(false);
  const modifier = () => {
    navigate(`/chienupdate/${chien.id}`, { replace: true });
  };
  const selectedChienId = useSelector((state) => state.selectedChien);
  return (
    <tr>
      <td className="id">{chien.id}</td>
      <td className="logo">
        <img
          className="row-img"
          src={chien.imageUrl}
          crossOrigin="anonymous"
          alt=""
        />
      </td>
      <td className="nom">{chien.nom}</td>

      <td className="puce">{chien.puce}</td>
      <td className="sexe">{chien.sexe}</td>
      <td className="taille">{chien.taille}</td>
      <td className="sante">{chien.sante}</td>
      <td className="refuge">{chien.refuge}</td>
      <td className="statut">{chien.statut}</td>
      <td className="localisation">{chien.localisation}</td>

      <td className="actions">
        <button
          className="btn"
          id="btn-update"
          type="button"
          onClick={(e) => {
            let selectedId =
              e.target.parentElement.parentElement.firstChild.innerHTML;
            dispatch(addSelectedChien(selectedId));
            modifier();
          }}
        >
          Modifier
        </button>

        <button
          className="btn"
          id="btn-delete"
          onClick={(e) => {
            let selectedId =
              e.target.parentElement.parentElement.firstChild.innerHTML;
            dispatch(addSelectedChien(selectedId));
            setOpenModal(true);
            dispatch(showChienDeleteModal(openModal));
          }}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
};
export default ChienRow;

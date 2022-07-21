import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSelectedRefuge } from "../../../feature/refuges/selectedRefugeSlice";
import { showRefugeDeleteModal } from "../../../feature/refuges/deleteRefugeModalSlice";

const RefugeRow = ({ refuge }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const modifier = () => {
    navigate(`/refugeupdate`, { replace: true });
  };

  return (
    <tr>
      <td className="id">{refuge.id}</td>
      <td className="nom">{refuge.nom}</td>
      <td className="localite">{refuge.localite}</td>
      <td className="logo">
        <img
          className="row-img"
          src={refuge.logo}
          crossOrigin="anonymous"
          alt=""
        />
      </td>
      <td className="actions">
        <button
          className="btn"
          id="btn-update"
          type="button"
          onClick={(e) => {
            let selectedId =
              e.target.parentElement.parentElement.firstChild.innerHTML;
            dispatch(addSelectedRefuge(selectedId));
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
            dispatch(addSelectedRefuge(selectedId));
            setOpenModal(true);
            dispatch(showRefugeDeleteModal(openModal));
          }}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
};
export default RefugeRow;

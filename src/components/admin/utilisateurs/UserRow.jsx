import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSelection } from "../../../feature/users/selectedUserSlice";
import { showModal } from "../../../feature/users/deleteModalSlice";
import { useState } from "react";

const UserRow = ({ user }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const modifier = () => {
    navigate(`/userupdate`, { replace: true });
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.nom}</td>
      <td>{user.prenom}</td>
      <td>{user.n_rue}</td>
      <td>{user.rue}</td>
      <td>{user.cp}</td>
      <td>{user.ville}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td id="actions">
        <button
          className="btn"
          id="btn-update"
          type="button"
          onClick={(e) => {
            let selectedId =
              e.target.parentElement.parentElement.firstChild.innerHTML;
            dispatch(addSelection(selectedId));

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
            dispatch(addSelection(selectedId));
            setOpenModal(true);
            dispatch(showModal(openModal));
          }}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
};
export default UserRow;

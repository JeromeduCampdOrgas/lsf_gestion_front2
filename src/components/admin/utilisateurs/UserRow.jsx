import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSelection } from "../../../feature/users/selectedUserSlice";
import { displayModal } from "../../../feature/users/deleteModalSlice";

import { addRoles, deleteRoles } from "../../../feature/users/rolesSlice";
import { useState } from "react";

const UserRow = ({ user }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const usersList = useSelector((state) => state.usersList[0]);
  const [openModal, setOpenModal] = useState(false);
  let rolesArray = [];

  const modifier = () => {
    //remise à zero de la liste des rôles
    dispatch(deleteRoles());
    //reconstitution de la liste des rôles sans doublon
    for (let i = 0; i < usersList.length; i++) {
      let role = usersList[i].role;
      if (!rolesArray.includes(role)) {
        rolesArray.push(role);
      }
    }

    //dispatch de la liste des rôles dans le store
    dispatch(addRoles(rolesArray));

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
        <input
          type="button"
          value="modifier"
          onClick={(e) => {
            let selectedId =
              e.target.parentElement.parentElement.firstChild.innerHTML;
            dispatch(addSelection(selectedId));

            modifier();
          }}
        />

        <button
          onClick={(e) => {
            let selectedId =
              e.target.parentElement.parentElement.firstChild.innerHTML;
            dispatch(addSelection(selectedId));
            setOpenModal(true);
            dispatch(displayModal(openModal));
          }}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
};
export default UserRow;

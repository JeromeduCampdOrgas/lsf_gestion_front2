import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSelection } from "../../../feature/users/selectedUserSlice";
const UserRow = ({ user }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [selection, setSelection] = useState();

  const modifier = () => {
    navigate("/userupdate", { replace: true });
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
      <td>
        <input
          type="button"
          value="modifier"
          onClick={(e) => {
            setSelection(
              e.target.parentElement.parentElement.firstChild.innerHTML
            );
            dispatch(addSelection(selection));
            modifier();
          }}
        />
        <input type="button" value="supprimer" />
      </td>
    </tr>
  );
};
export default UserRow;

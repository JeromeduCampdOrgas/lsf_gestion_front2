import userImg from "../../../assets/images/utilisateurs/users.jpg";
import "../../../styles/Admin/users/users.scss";

import { Link } from "react-router-dom";
import configAxios from "../../../config/configAxios";

//Redux
import { useDispatch } from "react-redux";
import { getUsersList } from "../../../feature/users/usersListSlice";
import { addRoles } from "../../../feature/users/rolesSlice";
const UserCard = () => {
  const dispatch = useDispatch();

  let rolesArray = [];
  const getAllUsers = () => {
    configAxios
      .get("users")
      .then((response) => {
        dispatch(getUsersList(response.data));
        for (let i = 0; i < response.data.length; i++) {
          let role = response.data[i].role;
          if (!rolesArray.includes(role)) {
            rolesArray.push(role);
          }
        }
        dispatch(addRoles(rolesArray));
      })
      .catch(() => console.log(""));
  };
  return (
    <li onClick={() => getAllUsers()}>
      <Link className="users-link" to={"/adminUsers"}>
        <div className="card">
          <div className="image">
            <img className="object-fit_fill" src={userImg} alt="users" />
          </div>
          <p>Gestion des utilisateurs</p>
        </div>
      </Link>
    </li>
  );
};
export default UserCard;

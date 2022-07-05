import userImg from "../../../assets/images/utilisateurs/users.jpg";
import "../../../styles/Admin/users/users.scss";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import configAxios from "../../../config/configAxios";

//Redux
import { useDispatch } from "react-redux";
import { getUsersList } from "../../../feature/users/usersListSlice";
import { addRoles } from "../../../feature/users/rolesSlice";
const UserCard = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList[0]);
  let rolesArray = [];
  const getAllUsers = () => {
    configAxios
      .get("users")
      .then((response) => {
        dispatch(getUsersList(response.data));

        for (let i = 0; i < usersList.length; i++) {
          let role = usersList[i].role;
          if (!rolesArray.includes(role)) {
            rolesArray.push(role);
          }
        }
        dispatch(addRoles(rolesArray));
      })
      .catch(() => console.log("ça commence à me faire chier!"));
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

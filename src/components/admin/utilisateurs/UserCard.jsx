import userImg from "../../../assets/images/utilisateurs/users.jpg";
import "../../../styles/Admin/users/users.scss";
import { Link } from "react-router-dom";
import configAxios from "../../../config/configAxios";
//Redux
import { useDispatch } from "react-redux";
import { getUsersList } from "../../../feature/users/usersListSlice";

const UserCard = () => {
  const dispatch = useDispatch();
  const test = () => {
    configAxios
      .get("users")
      .then((response) => {
        dispatch(getUsersList(response.data));
      })
      .catch(() => console.log("ça commence à me faire chier!"));
  };
  return (
    <li onClick={() => test()}>
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

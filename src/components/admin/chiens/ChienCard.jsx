import "../../../styles/Admin/users/users.scss";
import chienImg from "../../../assets/images/chiens/chiens.jpg";
import { Link } from "react-router-dom";
import "../../../styles/Admin/users/users.scss";
import configAxios from "../../../config/configAxios";
/**** */
import { useDispatch } from "react-redux";
import { getChiensList } from "../../../feature/chiens/chiensListSlice";
import { getRefugesList } from "../../../feature/refuges/refugesListSlice";

const ChienCard = () => {
  let dispatch = useDispatch();
  const getAllChiens = () => {
    configAxios.get(`chiens`).then((response) => {
      dispatch(getChiensList(response.data));
      configAxios
        .get(`refuges`)
        .then((response) => dispatch(getRefugesList(response.data)));
    });
  };
  return (
    <li onClick={() => getAllChiens()}>
      <Link className="chiens-link" to={"/adminChiens"}>
        <div className="card">
          <div className="image">
            <img className="object-fit_fill" src={chienImg} alt="chiens" />
          </div>
          <p>Gestion des chiens</p>
        </div>
      </Link>
    </li>
  );
};
export default ChienCard;

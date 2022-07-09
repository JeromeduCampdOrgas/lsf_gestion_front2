import "../../../styles/Admin/users/users.scss";
import refugeImg from "../../../assets/images/refuges/refuges.png";
import { Link } from "react-router-dom";
import "../../../styles/Admin/users/users.scss";
import configAxios from "../../../config/configAxios";
/**** */
import { useDispatch } from "react-redux";
import { getRefugesList } from "../../../feature/refuges/refugesListSlice";

const RefugeCard = () => {
  let dispatch = useDispatch();
  const getAllRefuges = () => {
    configAxios
      .get(`refuges`)
      .then((response) => dispatch(getRefugesList(response.data)));
  };
  return (
    <li onClick={() => getAllRefuges()}>
      <Link className="refuges-link" to={"/adminRefuges"}>
        <div className="card">
          <div className="image">
            <img className="object-fit_fill" src={refugeImg} alt="refuges" />
          </div>
          <p>Gestion des refuges partenaires</p>
        </div>
      </Link>
    </li>
  );
};
export default RefugeCard;

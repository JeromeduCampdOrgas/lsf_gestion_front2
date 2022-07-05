import "../../../styles/Admin/users/users.scss";
import refugeImg from "../../../assets/images/refuges/refuges.png";
import { Link } from "react-router-dom";
import "../../../styles/Admin/users/users.scss";

const RefugeCard = () => {
  return (
    <li onClick={() => console.log("coucou")}>
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

import { useSelector } from "react-redux";

import ChienCard from "../chiens/ChienCard";
import "../../../styles/GlobalDisplay/chienCard.scss";
const Chiens = () => {
  const chiensList = useSelector((state) => state.chiensList[0]);
  return (
    <div>
      <h1>Page des chiens</h1>
      <div id="dogs-container">
        {chiensList?.map((chien) => (
          <ChienCard key={chien.id} chien={chien} />
        ))}
      </div>
    </div>
  );
};
export default Chiens;

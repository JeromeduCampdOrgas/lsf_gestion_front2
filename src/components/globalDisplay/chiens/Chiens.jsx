import { useSelector } from "react-redux";

import ChienCard from "../chiens/ChienCard";
import "../../../styles/GlobalDisplay/chienCard.scss";
import { useEffect } from "react";
import { useState } from "react";

const Chiens = () => {
  const chiensList = useSelector((state) => state.chiensList[0]);
  //const statutsList = useSelector((state) => state.statutsList);

  const selectedStatut = useSelector((state) => state.selectedStatut);
  const selectedList = chiensList.filter(
    (chien) => chien.statut == selectedStatut
  );

  return (
    <div>
      <h1>Page des chiens: "{selectedStatut}"</h1>

      <div id="dogs-container">
        {selectedList?.map((chien) => (
          <ChienCard key={chien.id} chien={chien} />
        ))}
      </div>
    </div>
  );
};
export default Chiens;

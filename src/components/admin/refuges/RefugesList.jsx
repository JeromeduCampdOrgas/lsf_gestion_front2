import { useSelector } from "react-redux/es/exports";
import "../../../styles/Admin/refuges/refugeRow.scss";
import RefugeRow from "./RefugeRow";
import RefugesMap from "./RefugesMap";

const RefugesList = () => {
  const refugesList = useSelector((state) => state.refugesList[0]);
  /***************************** */

  /************************************* */
  return (
    <div>
      <h1>Liste des refuges</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>nom</th>
            <th>localité</th>
            <th>logo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {refugesList?.map((refuge) => (
            <RefugeRow key={refuge.id} refuge={refuge} />
          ))}
        </tbody>
      </table>
      <RefugesMap />
      {refugesList.map((refuge) => (
        <div key={refuge.id}>
          <p>latitude: {refuge.latitude}</p>
          <p>longitude: {refuge.longitude}</p>
        </div>
      ))}
    </div>
  );
};
export default RefugesList;

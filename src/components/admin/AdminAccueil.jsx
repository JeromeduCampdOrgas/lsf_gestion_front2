import UserCard from "./utilisateurs/UserCard";
import RefugeCard from "./refuges/RefugeCard";
import ChienCard from "./chiens/ChienCard";
const AdminAccueil = () => {
  return (
    <div>
      <h1>Page d'administration</h1>
      <div id="cards-menu">
        <UserCard />
        <RefugeCard />
        <ChienCard />
      </div>
      <ul>
        <li>Gestion des chiens</li>
      </ul>
    </div>
  );
};
export default AdminAccueil;

import UserCard from "./utilisateurs/UserCard";
import RefugeCard from "./refuges/RefugeCard";
const AdminAccueil = () => {
  return (
    <div>
      <h1>Page d'administration</h1>
      <div id="cards-menu">
        <UserCard />
        <RefugeCard />
      </div>
      <ul>
        <li>Gestion des chiens</li>
        <li>Gestion des refuges</li>
      </ul>
    </div>
  );
};
export default AdminAccueil;

import UserCard from "./utilisateurs/UserCard";
const AdminAccueil = () => {
  return (
    <div>
      <h1>Page d'administration</h1>
      <UserCard />
      <ul>
        <li>Gestion des utilisateurs</li>
        <li>Gestion des chiens</li>
        <li>Gestion des refuges</li>
      </ul>
    </div>
  );
};
export default AdminAccueil;

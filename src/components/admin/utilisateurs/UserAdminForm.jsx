import { useNavigate } from "react-router-dom";
const UserAdminForm = () => {
  let navigate = useNavigate();
  const retour = () => {
    navigate("/adminUsers", { replace: true });
  };
  return (
    <div>
      <h1>formulaire de modification</h1>
      <input id="nom" type="text" placeholder="votre nom" />
      <input id="prenom" type="text" placeholder="votre prénom" />
      <input id="email" type="text" placeholder="votre email" />
      <input id="password" type="password" placeholder="mot de passe" />
      <div>
        <input id="btn-valid" className="btn" type="button" value="Valider" />

        <input
          id="btn-escape"
          className="btn"
          type="button"
          value="Annuler"
          onClick={() => retour()}
        />
      </div>
    </div>
  );
};
export default UserAdminForm;

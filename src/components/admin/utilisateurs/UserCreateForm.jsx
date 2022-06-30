import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import configAxios from "../../../config/configAxios";

const UserCreateForm = () => {
  let navigate = useNavigate();
  const listRoles = useSelector((state) => state.roles);
  const [userRole, setUserRole] = useState("abonne");
  const handle = (event) => {
    setUserRole(event.target.value);
  };
  const retour = () => {
    navigate("/adminUsers", { replace: true });
  };
  /******* Validation *******************************/
  //TO DO

  //3- appeler axios: route = post("/signup")
  const createUser = () => {
    //1- récupérer les valeurs des champs
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let n_rue = document.getElementById("n_rue").value;
    let rue = document.getElementById("rue").value;
    let cp = document.getElementById("cp").value;
    let ville = document.getElementById("ville").value;
    let password = document.getElementById("password").value;
    let role = userRole;
    //2- vérifier les champs obligatoires

    if (!nom || !prenom || !email || !password) {
      console.log("mentions obligatoires");
    } else {
      //3- appeler axios: route = post("/signup")
      configAxios
        .post("signup", {
          nom: nom,
          prenom: prenom,
          email: email,
          tel: tel,
          n_rue: n_rue,
          rue: rue,
          cp: cp,
          ville: ville,
          role: role,
          password: password,
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  };
  /**************************************************/
  return (
    <div id="user-admin-form">
      <h1>formulaire de création</h1>
      <form>
        <label className="user-info" htmlFor="nom">
          Nom:<span>*</span>
          <input id="nom" type="text" />
        </label>
        <label className="user-info" htmlFor="prenom">
          Prénom:<span>*</span>
          <input id="prenom" type="text" />
        </label>
        <label className="user-info" htmlFor="email">
          Email:<span>*</span>
          <input id="email" type="text" />
        </label>
        <label className="user-info" htmlFor="tel">
          Tel:
          <input id="tel" type="text" />
        </label>
        <label className="user-info" htmlFor="n_rue">
          N°de rue:
          <input id="n_rue" type="text" />
        </label>
        <label className="user-info" htmlFor="rue">
          Rue:
          <input id="rue" type="text" />
        </label>
        <label className="user-info" htmlFor="cp">
          Code postal:
          <input id="cp" type="text" />
        </label>
        <label className="user-info" htmlFor="ville">
          Commune:
          <input id="ville" type="text" />
        </label>
        <label className="user-info" htmlFor="password">
          Mot de passe<span>*</span>
          <input id="password" type="text" />
        </label>
        <label className="user-info" htmlFor="roles">
          Rôle:
          <select name="roles" id="roles" value={userRole} onChange={handle}>
            {listRoles[0].map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <div id="buttons">
          <input
            id="btn-valid"
            className="btn"
            type="button"
            value="Valider"
            onClick={() => createUser()}
          />

          <input
            id="btn-escape"
            className="btn"
            type="button"
            value="Annuler"
            onClick={() => {
              retour();
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default UserCreateForm;

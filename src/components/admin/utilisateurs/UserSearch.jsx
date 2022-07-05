import "../../../styles/Admin/users/search.scss";
import UserRow from "./UserRow";

import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserSearch = () => {
  const [searchState, setSearchState] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const usersList = useSelector((state) => state.usersList[0]);
  const [searchType, setSearchType] = useState("nom");
  const listRoles = useSelector((state) => state.roles);
  const [userRole, setUserRole] = useState("delegue");
  const handle = (event) => {
    setUserRole(event.target.value);
  };
  /********************** */

  const searching = (event) => {
    setSearchState(event.target.value.toLowerCase());
  };
  const handleChangeRadio = (event) => {
    setSearchType(event.target.value);
  };
  useEffect(() => {
    let listeFiltree;
    if (usersList) {
      switch (searchType) {
        case "nom":
          listeFiltree = usersList.filter(
            (user) =>
              user.role === userRole &&
              user.nom.toLowerCase().includes(searchState)
          );
          break;
        case "prenom":
          listeFiltree = usersList.filter(
            (user) =>
              user.role === userRole &&
              user.prenom.toLowerCase().includes(searchState)
          );
          break;
        case "cp":
          listeFiltree = usersList.filter(
            (user) =>
              user.role === userRole && parseInt(user.cp).includes(searchState)
          );
          break;

        default:
          console.log(`Sorry, we are out of ${searchType}.`);
      }
    }
    setFinalList(listeFiltree);
  }, [searchState, usersList, searchType, userRole]);

  /***************** */

  return (
    <div id="search-div">
      <div id="searchBar-container">
        <div id="search-bar">
          Rechercher par
          <div>
            <label className="user-info" htmlFor="roles">
              Rôle:
              <select
                name="roles"
                id="roles"
                value={userRole}
                onChange={handle}
              >
                {listRoles[0].map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <fieldset>
            <legend>Sélectionner un type de recherche</legend>
            <div>
              <input
                type="radio"
                id="nom"
                name="searchType"
                value="nom"
                checked={searchType === "nom"}
                onChange={handleChangeRadio}
              />
              <label htmlFor="nom">Nom</label>
            </div>
            <div>
              <input
                type="radio"
                id="prenom"
                name="searchType"
                value="prenom"
                checked={searchType === "prenom"}
                onChange={handleChangeRadio}
              />
              <label htmlFor="prenom">Prénom</label>
            </div>
            <div>
              <input
                type="radio"
                id="cp"
                name="searchType"
                value="cp"
                checked={searchType === "cp"}
                onChange={handleChangeRadio}
              />
              <label htmlFor="cp">Département</label>
            </div>
          </fieldset>
          <input
            type="text"
            onChange={searching}
            placeholder="Tapez votre recherche"
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>nom</th>
            <th>prénom</th>
            <th>n°rue</th>
            <th>rue</th>
            <th>cp</th>
            <th>ville</th>
            <th>email</th>
            <th>role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {finalList?.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserSearch;

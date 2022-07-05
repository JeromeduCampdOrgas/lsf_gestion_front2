import "../../../styles/Admin/users/search.scss";
import UserRow from "./UserRow";

import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserSearch = (props) => {
  const [searchState, setSearchState] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const usersList = useSelector((state) => state.usersList[0]);

  const searching = (event) => {
    setSearchState(event.target.value);
  };
  useEffect(() => {
    let listeFiltree;
    listeFiltree = usersList.filter((user) => user.nom.includes(searchState));
    setFinalList(listeFiltree);
  }, [searchState]);

  console.log(finalList);
  return (
    <div id="search-div">
      <span>Rechercher</span>
      <input type="text" onChange={searching} />
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
          {finalList.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserSearch;

import store from "../../../app/store";
import { Provider, useSelector } from "react-redux";
import UserRow from "../utilisateurs/UserRow";
import "../../../styles/Admin/users/usersList.scss";

const UsersList = () => {
  const allUsers = useSelector((state) => state.usersList[0]);
  return (
    <Provider store={store}>
      <div>
        <h1>Users List</h1>
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
            </tr>
          </thead>

          <tbody>
            {allUsers?.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </Provider>
  );
};
export default UsersList;

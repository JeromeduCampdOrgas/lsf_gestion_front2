import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Layout/Home";
import Login from "./components/User/Login";

import AdminAccueil from "./components/admin/AdminAccueil";
/** Admin Users  */
import UsersList from "./components/admin/utilisateurs/UsersList";
import UserVue from "./components/admin/utilisateurs/UserVue";
import UserCreateForm from "./components/admin/utilisateurs/UserCreateForm";
/**** Admin Refuges */
import RefugesList from "./components/admin/refuges/RefugesList";
import RefugeUpdateForm from "./components/admin/refuges/RefugeUpdateForm";
import RefugeCreateForm from "./components/admin/refuges/RefugeCreateForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/administration" element={<AdminAccueil />} />
            <Route path="/adminUsers" element={<UsersList />} />
            <Route path="/userupdate" element={<UserVue />} />
            <Route path="/usercreate" element={<UserCreateForm />} />
            <Route path="/adminRefuges" element={<RefugesList />} />
            <Route path="/refugeupdate" element={<RefugeUpdateForm />} />
            <Route path="/refugecreate" element={<RefugeCreateForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Layout/Home";
import Login from "./components/User/Login";

import AdminAccueil from "./components/admin/AdminAccueil";
import UsersList from "./components/admin/utilisateurs/UsersList";
import UserVue from "./components/admin/utilisateurs/UserVue";

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
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./app/store";

/*******CSS */
import "./styles/app.scss";

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
/**** Admin Chiens */
import ChiensList from "./components/admin/chiens/ChiensList";
import ChienUpdateForm from "./components/admin/chiens/ChienUpdateForm";
import ChienCreateForm from "./components/admin/chiens/ChienCreateForm";
/****** Admin statuts */
import Statuts from "./components/admin/chiens/Statut";
import { Provider } from "react-redux";
/****** Global Display */
import Chiens from "./components/globalDisplay/chiens/Chiens";

/******* Test */

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <div id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/connexion" element={<Login />} />
              {/****** Debut Administration *******************************/}
              <Route path="/administration" element={<AdminAccueil />} />
              <Route path="/adminUsers" element={<UsersList />} />
              <Route path="/userupdate" element={<UserVue />} />
              <Route path="/usercreate" element={<UserCreateForm />} />
              <Route path="/adminRefuges" element={<RefugesList />} />
              <Route path="/refugeupdate" element={<RefugeUpdateForm />} />
              <Route path="/refugecreate" element={<RefugeCreateForm />} />
              <Route path="/adminChiens" element={<ChiensList />} />
              <Route path="/chienupdate/:id" element={<ChienUpdateForm />} />
              <Route path="/chiencreate" element={<ChienCreateForm />} />
              <Route path="/chienstatut" element={<Statuts />} />
              {/* Debut Global Display */}
              <Route path="/chiens" element={<Chiens />} test="test" />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

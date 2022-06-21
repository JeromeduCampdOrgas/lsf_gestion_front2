import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Layout/Home";
import Login from "./components/User/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

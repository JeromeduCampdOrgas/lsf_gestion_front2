import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { Provider } from "react-redux";
//import { store } from "./redux/user/userSlice";
//import { store } from "./app/store";

import Home from "./components/Layout/Home";
import Login from "./components/User/Login";
//<Provider store={store}>  </Provider>
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

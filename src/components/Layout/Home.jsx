import { useEffect } from "react";
import { useDispatch } from "react-redux";
import configAxios from "../../config/configAxios";
import { getChiensList } from "../../feature/chiens/chiensListSlice";
const Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    configAxios.get(`chiens`).then((response) => {
      dispatch(getChiensList(response.data));
    }, []);
  });
  return (
    <div className="home">
      <h1>ACCUEIL</h1>
    </div>
  );
};
export default Home;

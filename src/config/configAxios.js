/*import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "http://localhost:5000/api/", //"https://lsf-back.herokuapp.com/api/",
  headers: {
    Authorization: token,
  },
});

export default instance;*/
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
});
instance.defaults.headers.common["Authorization"] =
  localStorage.getItem("token");

export default instance;

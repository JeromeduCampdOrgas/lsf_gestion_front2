import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRefugesList } from "../../../feature/refuges/refugesListSlice";
import configAxios from "../../../config/configAxios";

import "../../../styles/Admin/refuges/refugeAdminForm.scss";

const RefugeCreateForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [logoFile, setLogoFile] = useState();

  const retour = () => {
    navigate("/adminRefuges", { replace: true });
  };
  /****** state de la ville */
  const [queryValue, setQueryValue] = useState();

  /********** Paramètres géoloc */
  const axios = require("axios");
  const params = {
    access_key: "5ce5eeac7ae3cc99b41e6cbfd5e04f0f",
    query: queryValue,
  };
  /******* Validation *******************************/

  const createRefuge = async () => {
    //1- récupérer les valeurs des champs
    let nom = document.getElementById("nom").value;
    //récupérer la localité
    let localite = document.getElementById("localite").value;
    //2- vérifier les champs obligatoires
    if (!nom || !localite || !logoFile) {
      console.log("mentions obligatoires");
    } else {
      //3- Récupérer les coordonnée GPS
      await axios
        .get("http://api.positionstack.com/v1/forward", { params })
        .then((response) => {
          const formData = new FormData();
          formData.set("nom", nom);
          formData.set("localite", localite);
          formData.set("logo", logoFile);
          formData.set("latitude", response.data.data[0].latitude);
          formData.set("longitude", response.data.data[0].longitude);
          //4- appeler axios: route = post("/refuge")
          configAxios
            .post("refuge", formData)
            .then(() => {
              configAxios
                .get("refuges")
                .then((response) => {
                  dispatch(getRefugesList(response.data));
                  retour();
                })
                .catch(() => console.log("ça commence à me faire chier!"));
            })
            .catch((err) => console.log(err));
        });
    }
  };
  /**************************************************/
  return (
    <div id="refuge-admin-form">
      <h1>formulaire de création</h1>
      <form>
        <label className="refuge-info" htmlFor="nom">
          Nom:<span>*</span>
          <input id="nom" type="text" />
        </label>
        <label className="refuge-info" htmlFor="logo">
          Logo:<span>*</span>
          <input
            id="logo"
            type="file"
            onChange={(e) => {
              setLogoFile(e.target.files[0]);
            }}
          />
        </label>
        <label className="refuge-info" htmlFor="localite">
          Localité:<span>*</span>
          <input
            id="localite"
            type="text"
            onChange={(e) => setQueryValue(e.target.value)}
          />
        </label>

        <div id="buttons">
          <input
            id="btn-valid"
            className="btn"
            type="button"
            value="Valider"
            onClick={() => createRefuge()}
          />

          <input
            id="btn-escape"
            className="btn"
            type="button"
            value="Annuler"
            onClick={() => {
              retour();
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default RefugeCreateForm;

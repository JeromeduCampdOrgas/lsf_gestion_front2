import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChiensList } from "../../../feature/chiens/chiensListSlice";
import configAxios from "../../../config/configAxios";

import "../../../styles/Admin/refuges/refugeAdminForm.scss";

const ChienCreateForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [logoFile, setLogoFile] = useState();

  const retour = () => {
    navigate("/adminChiens", { replace: true });
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

  const createChien = () => {
    console.log("je crée");
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
            onClick={() => createChien()}
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
export default ChienCreateForm;

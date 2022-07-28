import { useNavigate } from "react-router-dom";
import store from "../../../app/store";
import {
  addChienData,
  //deleteRefugeData,
} from "../../../feature/chiens/selectedChienDataSlice";

import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import configAxios from "../../../config/configAxios";

/*********  CSS **************/
import "../../../styles/Admin/chiens/chienAdminForm.scss";
import { useState } from "react";

const ChienUpdateForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  /********** Paramètres géoloc */
  //const axios = require("axios");

  /*************** */
  const chiensList = useSelector((state) => state.chiensList[0]);
  const selectedChienId = useSelector((state) => state.selectedChien);
  const selectedChienData = useSelector((state) => state.selectedChienData);
  //const refugeSelectedGeo = useSelector((state) => state.refugeSelectedGeo);
  /******************** */
  const [logoImg, setLogoImg] = useState();
  const refugesList = useSelector((state) => state.refugesList[0]);
  useEffect(() => {
    const chienData = chiensList.filter(
      (chien) => chien.id === parseInt(selectedChienId)
    );
    dispatch(addChienData(chienData));

    setLogoImg(chienData[0].imageUrl);
  }, [dispatch, selectedChienId, chiensList]);

  /********** Annulation action et retour page users administration ******/
  //Remise à zero du store

  const retour = () => {
    navigate("/adminChiens", { replace: true });
  };

  const handleValue = (event) => {
    event.target.value = event.target.placeholder;
  };

  /******** Validation des modifications ***********/

  const validation = async () => {
    console.log("je valide");
  };

  /**************************************************/
  return (
    <Provider store={store}>
      <div id="chien-admin-form">
        <h1>formulaire de modification</h1>

        {selectedChienData[0] ? (
          <form>
            <div id="selected-dog">
              <div id="selected-dog-info">
                <label className="chien-info" htmlFor="nom">
                  Nom:
                  <input
                    id="nom"
                    type="text"
                    placeholder={selectedChienData[0].nom}
                    onFocus={handleValue}
                  />
                </label>
                <label className="chien-info" htmlFor="logo">
                  Image:
                  <input
                    id="logo"
                    type="file"
                    onChange={(e) => setLogoImg(e.target.files)}
                  />
                </label>
                <label className="chien-info" htmlFor="puce">
                  N° de puce:
                  <input
                    id="puce"
                    type="text"
                    placeholder={selectedChienData[0].puce}
                    onFocus={handleValue}
                  />
                </label>
                <label className="chien-info" htmlFor="taille">
                  Taille:
                  <input
                    id="taille"
                    type="text"
                    placeholder={selectedChienData[0].taille}
                    onFocus={handleValue}
                  />
                </label>

                <label className="chien-info" htmlFor="sexe">
                  Sexe:
                  <select name="sexe" id="sexe">
                    <option value="">Mâle</option>
                    <option value="">Femelle</option>
                  </select>
                </label>
                <label className="chien-info" htmlFor="sante">
                  Santé:
                  <input
                    id="sante"
                    type="text"
                    placeholder={selectedChienData[0].sante}
                    onFocus={handleValue}
                  />
                </label>
                <label className="chien-info" htmlFor="taille">
                  Taille:
                  <input
                    id="nom"
                    type="text"
                    placeholder={selectedChienData[0].taille}
                    onFocus={handleValue}
                  />
                </label>
                <label className="chien-info" htmlFor="refuge">
                  Refuge
                  <select name="refuge" id="refuge">
                    <option value=""></option>
                    {refugesList?.map((refuge) => (
                      <option key={refuge.id} value={refuge.nom}>
                        {refuge.nom}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="chien-info" htmlFor="statut">
                  Statut
                  <select name="statut" id="statut">
                    <option value="accueil">Accueil en France</option>
                    <option value="espagne">En Espagne</option>
                    <option value="adopte">Adopté</option>
                    <option value="encours">Dossier en cours</option>
                    <option value="reserve">Réservé</option>
                  </select>
                </label>
                <label className="chien-info" htmlFor="localisation">
                  Localisation (saisir ville si adopté ou en accueil):
                  <input
                    id="localisation"
                    type="text"
                    placeholder={selectedChienData[0].sante}
                    onFocus={handleValue}
                  />
                </label>
                <label className="chien-info" htmlFor="commentaires">
                  Commentaires
                </label>
                <textarea
                  name="commentaires"
                  id="commentaires"
                  cols="30"
                  rows="10"
                ></textarea>

                <div id="buttons">
                  <input
                    id="btn-valid"
                    className="btn"
                    type="button"
                    value="Valider"
                    onClick={() => validation()}
                  />
                  <input
                    id="btn-escape"
                    className="btn"
                    type="button"
                    value="Annuler"
                    onClick={() => retour()}
                  />
                </div>
              </div>
              <div id="selected-dog-img">
                <img
                  id="dog-img"
                  src={logoImg}
                  crossOrigin="anonymous"
                  alt=""
                />
              </div>
            </div>
          </form>
        ) : (
          "coucou"
        )}
      </div>
    </Provider>
  );
};
export default ChienUpdateForm;

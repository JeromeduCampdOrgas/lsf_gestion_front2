import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getChiensList,
  deleteChiensList,
} from "../../../feature/chiens/chiensListSlice";
import { getRefugesList } from "../../../feature/refuges/refugesListSlice";
import configAxios from "../../../config/configAxios";

import Picker from "../outils/Picker";
import "../../../styles/Admin/refuges/refugeAdminForm.scss";

const ChienCreateForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const refugesList = useSelector((state) => state.refugesList[0]);
  const statutsList = useSelector((state) => state.statutsList[0]);
  /******* Infos chien */
  const [dogNom, setDogNom] = useState("");
  const [dogPuce, setDogPuce] = useState("");
  const [dogTaille, setDogTaille] = useState("");
  const [dogSante, setDogSante] = useState("");
  const [dogLocalisation, setDogLocalisation] = useState("");
  const [dogImg, setDogImg] = useState("");
  const [maDate, setMaDate] = useState("");
  const [dogSexe, setDogSexe] = useState("");
  const [dogRefuge, setDogRefuge] = useState("");
  const [dogStatut, setDogStatut] = useState("En Espagne");
  const [dogCommentaires, setDogCommentaires] = useState("");
  const [dogChat, setDogChat] = useState("");

  /*********  handle Actions */
  const handleDogName = (event) => setDogNom(event.target.value);
  const handleDogPuce = (event) => setDogPuce(event.target.value);
  const handleDogTaille = (event) => setDogTaille(event.target.value);
  const handleDogSante = (event) => setDogSante(event.target.value);
  const handleDogLocalisation = (event) =>
    setDogLocalisation(event.target.value);
  const handleDogImg = (event) => {
    setDogImg(event.target.files[0]);
  };
  const handleDogSexe = (event) => setDogSexe(event.target.value);
  const handleDogChat = (event) => setDogChat(event.target.value);
  const handleDogRefuge = (event) => setDogRefuge(event.target.value);
  const handleDogCommentaires = (event) =>
    setDogCommentaires(event.target.value);
  const handleDogStatut = (event) => setDogStatut(event.target.value);
  /******* Navigation */
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
  /**** Erreur Formulaire */
  const [errForm, setErrForm] = useState(false);
  const checkForm = (e) => {
    e.preventDefault();
    if (dogNom === "" || dogImg === "") setErrForm("Données non valides");
  };
  /******* Validation *******************************/

  const validationForm = (e) => {
    if (!dogNom || !dogImg) {
      console.log("données non valides:au moins 1 nom, 1 image");
      setErrForm(true);
      checkForm();
    } else {
      dispatch(deleteChiensList());
      let sexe = document.getElementById("sexe");
      let refuge = document.getElementById("refuge");
      let statut = document.getElementById("statut");
      let chat = document.getElementById("chat");
      dogSexe ? (sexe = dogSexe) : (sexe = sexe.value);
      dogRefuge ? (refuge = dogRefuge) : (refuge = refuge.value);
      dogStatut ? (statut = dogStatut) : (statut = statut.value);
      dogChat ? (chat = dogChat) : (chat = chat.value);

      const formData = new FormData();
      formData.set("nom", dogNom);
      formData.set("puce", dogPuce);
      formData.set("sante", dogSante);
      formData.set("taille", dogTaille);
      formData.set("localisation", dogLocalisation);
      formData.set("imageUrl", dogImg);
      formData.set("naissance", maDate);
      formData.set("sexe", sexe);
      formData.set("chat", dogChat);
      formData.set("refuge", refuge);
      formData.set("statut", statut);
      formData.set("commentaires", dogCommentaires);
      const token = localStorage.getItem("token");

      configAxios
        .post(`chiens`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          configAxios.get(`chiens`).then((response) => {
            dispatch(getChiensList(response.data));
            configAxios.get(`refuges`).then((response) => {
              dispatch(getRefugesList(response.data));
            });
          });
        });
    }
  };
  /*** test datepicker */
  const [selectedDate, setSelectedDate] = useState();

  const [showPicker, setShowPicker] = useState(false);
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setShowPicker(!showPicker);
    setMaDate(value.toLocaleDateString("fr"));
  };

  /**************************************************/
  return (
    <div id="chien-admin-form">
      <h1>Formulaire de création</h1>
      {errForm ? (
        <div
          className="err-form"
          style={{
            fontSize: "25px",
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <span>Erreur dans le formulaire: au moins un nom et une image.</span>
        </div>
      ) : (
        ""
      )}

      <form>
        <div id="selected-dog">
          <div id="selected-dog-info">
            <label className="chien-info" htmlFor="nom">
              Nom:
              <input id="nom" type="text" onChange={handleDogName} />
            </label>
            <label className="chien-info" htmlFor="logo">
              Image:
              <input id="logo" type="file" onChange={handleDogImg} />
            </label>
            <label className="chien-info" htmlFor="naissance">
              Né le:
              {showPicker ? (
                <div>
                  <div className="btn-close-container">
                    <button
                      className="btn close-calendar"
                      onClick={() => setShowPicker(false)}
                    >
                      X
                    </button>
                  </div>
                  <Picker handleDateChange={handleDateChange} />
                </div>
              ) : (
                <input
                  id="birthday-date"
                  type="text"
                  onClick={() => setShowPicker(!showPicker)}
                  onChange={handleDateChange}
                  defaultValue={maDate ? maDate : ""}
                />
              )}
            </label>
            <label className="chien-info" htmlFor="puce">
              N° de puce:
              <input id="puce" type="text" onChange={handleDogPuce} />
            </label>
            <label className="chien-info" htmlFor="taille">
              Taille:
              <input id="taille" type="text" onChange={handleDogTaille} />
            </label>

            <label
              className="chien-info"
              htmlFor="sexe"
              onChange={handleDogSexe}
            >
              <select name="sexe" id="sexe">
                <option value="Mâle">Mâle</option>
                <option value="Femelle">Femelle</option>
              </select>
            </label>
            <label
              className="chien-info"
              htmlFor="chat"
              onChange={handleDogChat}
            >
              <select name="chat" id="chat">
                <option value="Ok">Ok</option>
                <option value="Ko">Ko</option>
                <option value="encours">En cours</option>
              </select>
            </label>
            <label className="chien-info" htmlFor="sante">
              Santé:
              <input id="sante" type="text" onChange={handleDogSante} />
            </label>

            <label className="chien-info" htmlFor="refuge">
              Refuge
              <select name="refuge" id="refuge" onChange={handleDogRefuge}>
                <option defaultValue=""></option>
                {refugesList?.map((refuge) => (
                  <option key={refuge.id} value={refuge.nom}>
                    {refuge.nom}
                  </option>
                ))}
              </select>
            </label>
            <label className="chien-info" htmlFor="statut">
              Statut
              <select name="statut" id="statut" onChange={handleDogStatut}>
                {statutsList.map((statut) => (
                  <option key={statut.id}>{statut.statut}</option>
                ))}
              </select>
            </label>
            <label className="chien-info" htmlFor="localisation">
              Localisation (saisir la ville si adopté ou en accueil):
              <input
                id="localisation"
                type="text"
                onChange={handleDogLocalisation}
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
              onChange={handleDogCommentaires}
            ></textarea>

            <div id="buttons">
              <input
                id="btn-valid"
                className="btn"
                type="button"
                value="Valider"
                onClick={() => {
                  validationForm();
                  retour();
                }}
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
        </div>
      </form>
    </div>
  );
};
export default ChienCreateForm;

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import store from "../../../app/store";
import configAxios from "../../../config/configAxios";

import { getChiensList } from "../../../feature/chiens/chiensListSlice";
import { getRefugesList } from "../../../feature/refuges/refugesListSlice";
import { addChienData } from "../../../feature/chiens/selectedChienDataSlice";

import Picker from "../outils/Picker";
/*********  CSS **************/
import "../../../styles/Admin/chiens/chienAdminForm.scss";
import "../../../styles/outils/datepicker.css";

const ChienUpdateForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const chiensList = useSelector((state) => state.chiensList[0]);
  const statutsList = useSelector((state) => state.statutsList[0]);
  const selectedChienId = useSelector((state) => state.selectedChien);
  const selectedChienData = useSelector((state) => state.selectedChienData);
  const refugesList = useSelector((state) => state.refugesList[0]);

  const [showPicker, setShowPicker] = useState(false);
  const [dogImg, setDogImg] = useState();
  const [maDate, setMaDate] = useState();
  const [dogSexe, setDogSexe] = useState();
  const [dogRefuge, setDogRefuge] = useState();
  const [dogStatut, setDogStatut] = useState();
  const [dogChat, setDogChat] = useState();

  useEffect(() => {
    const chienData = chiensList.filter(
      (chien) => chien.id === parseInt(selectedChienId)
    );
    dispatch(addChienData(chienData));
    setDogImg(chienData[0].imageUrl);
    setMaDate(chienData[0].naissance);
    setDogSexe(chienData[0].sexe);
    setDogChat(chienData[0].chat);
    setDogRefuge(chienData[0].refuge);
    setDogStatut(chienData[0].statut);
  }, [dispatch, selectedChienId, chiensList]);

  /*** test datepicker */
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (value) => {
    setSelectedDate(value);
    setShowPicker(!showPicker);
    setMaDate(value.toLocaleDateString("fr"));
  };

  const handleChangeSexe = (e) => setDogSexe(e.target.value);
  const handleChangeRefuge = (e) => setDogRefuge(e.target.value);
  const handleChangeStatut = (e) => {
    setDogStatut(e.target.value);
  };
  const handleChangeChat = (e) => setDogChat(e.target.value);
  const handleChangeImg = (e) => {
    setDogImg(e.target.files[0]);
  };

  const retour = () => {
    navigate("/adminChiens", { replace: true });
  };

  const handleValue = (event) => {
    event.target.value = event.target.placeholder;
  };

  /******** Validation des modifications ***********/

  const validation = async () => {
    let nom = document.getElementById("nom");
    let puce = document.getElementById("puce");
    let taille = document.getElementById("taille");
    let sante = document.getElementById("sante");
    let localisation = document.getElementById("localisation");
    let commentaires = document.getElementById("commentaires");
    let sexe = document.getElementById("sexe");
    let refuge = document.getElementById("refuge");
    let statut = document.getElementById("statut");
    let chat = document.getElementById("chat");
    nom.value ? (nom = nom.value) : (nom = nom.placeholder);
    puce.value ? (puce = puce.value) : (puce = puce.placeholder);
    taille.value ? (taille = taille.value) : (taille = taille.placeholder);
    sante.value ? (sante = sante.value) : (sante = sante.placeholder);
    localisation.value
      ? (localisation = localisation.value)
      : (localisation = localisation.placeholder);
    commentaires.value
      ? (commentaires = commentaires.value)
      : (commentaires = commentaires.placeholder);
    /******    ****/

    dogSexe ? (sexe = dogSexe) : (sexe = sexe.value);
    dogRefuge ? (refuge = dogRefuge) : (refuge = refuge.value);
    dogStatut ? (statut = dogStatut) : (statut = statut.value);
    dogChat ? (chat = dogChat) : (chat = chat.value);
    /*********** */

    const formData = new FormData();
    formData.set("nom", nom);
    formData.set("imageUrl", dogImg);
    formData.set("naissance", maDate);
    formData.set("puce", puce);
    formData.set("taille", taille);
    formData.set("sexe", sexe);
    formData.set("chat", chat);
    formData.set("sante", sante);
    formData.set("refuge", refuge);
    formData.set("statut", statut);
    formData.set("localisation", localisation);
    formData.set("commentaires", commentaires);
    const token = localStorage.getItem("token");

    configAxios
      .put(`chiens/${selectedChienId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        configAxios.get(`chiens`).then((response) => {
          dispatch(getChiensList(response.data));
          configAxios.get(`refuges`).then((response) => {
            dispatch(getRefugesList(response.data));
            window.location.reload();
          });
        });
      });
  };

  /**************************************************/
  return (
    <Provider store={store}>
      <div id="chien-admin-form">
        <h1>Formulaire de modification</h1>

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
                  <input id="logo" type="file" onChange={handleChangeImg} />
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
                      placeholder={selectedChienData[0].naissance}
                    />
                  )}
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
                  Sexe:{dogSexe}
                  <select name="sexe" id="sexe" onChange={handleChangeSexe}>
                    <option value="Mâle" key="1">
                      Mâle
                    </option>
                    <option value="Femelle" key="2">
                      Femelle
                    </option>
                  </select>
                </label>

                <label
                  className="chien-info"
                  htmlFor="chat"
                  onChange={handleChangeChat}
                >
                  Chat
                  <select name="chat" id="chat">
                    <option value="Ok" key="1">
                      Ok
                    </option>
                    <option value="Ko" key="2">
                      Ko
                    </option>
                    <option value="encours" key="3">
                      En cours
                    </option>
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

                <label className="chien-info" htmlFor="refuge">
                  Refuge
                  <select
                    name="refuge"
                    id="refuge"
                    onChange={handleChangeRefuge}
                  >
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
                  <select
                    name="statut"
                    id="statut"
                    value={dogStatut}
                    onChange={handleChangeStatut}
                  >
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
                    onClick={() => {
                      validation();
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
              <div id="selected-dog-img">
                <img id="dog-img" src={dogImg} crossOrigin="anonymous" alt="" />
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

import { useNavigate } from "react-router-dom";
import store from "../../../app/store";

//import { deleteSelection } from "../../../feature/refuges/selectedRefugeSlice";
import { getRefugesList } from "../../../feature/refuges/refugesListSlice";
import {
  addRefugeData,
  //deleteRefugeData,
} from "../../../feature/refuges/selectedRefugeDataSlice";
import {
  addRefugeGeo,
  deleteRefugeGeo,
} from "../../../feature/refuges/refugeSelectedGeoSlice";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import configAxios from "../../../config/configAxios";

/*********  CSS **************/
import "../../../styles/Admin/users/userAdminForm.scss";
import { useState } from "react";

const RefugeUpdateForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  /****** state de la ville */
  const [queryValue, setQueryValue] = useState();

  /********** Paramètres géoloc */
  const axios = require("axios");
  const params = {
    access_key: "5ce5eeac7ae3cc99b41e6cbfd5e04f0f",
    query: queryValue,
  };
  /*************** */
  const refugesList = useSelector((state) => state.refugesList[0]);
  const selectedRefugeId = useSelector((state) => state.selectedRefuge);
  const selectedRefugeData = useSelector((state) => state.selectedRefugeData);
  const refugeSelectedGeo = useSelector((state) => state.refugeSelectedGeo);
  /******************** */
  useEffect(() => {
    const refugeData = refugesList.filter(
      (refuge) => refuge.id === parseInt(selectedRefugeId)
    );
    dispatch(addRefugeData(refugeData));

    setQueryValue(refugeData[0].nom);
  }, [dispatch, selectedRefugeId, refugesList]);

  /********** Annulation action et retour page users administration ******/
  //Remise à zero du store
  const clearStore = () => {
    dispatch(deleteRefugeGeo());
  };
  const retour = () => {
    clearStore();
    navigate("/adminRefuges", { replace: true });
  };

  const handleValue = (event) => {
    event.target.value = event.target.placeholder;
  };
  /******** Validation des modifications ***********/

  const validation = async () => {
    //Récupération valeur ou placeholder
    let nom = document.getElementById("nom");
    let localite = document.getElementById("localite");

    const token = localStorage.getItem("token");
    nom.value ? (nom = nom.value) : (nom = nom.placeholder);
    localite.value
      ? (localite = localite.value)
      : (localite = localite.placeholder);

    //appel axios
    await axios
      .get("http://api.positionstack.com/v1/forward", { params })
      .then((response) => {
        console.log(
          response.data.data.filter((refuge) => refuge.country === "Spain")
        );
        const searchingGeo = response.data.data.filter(
          (refuge) => refuge.country === "Spain"
        );
        console.log(searchingGeo);
        dispatch(addRefugeGeo(searchingGeo));
      })

      .then(() => {
        let latitude = refugeSelectedGeo[0].latitude;
        console.log(latitude);

        let longitude = refugeSelectedGeo[0].longitude;
        console.log(longitude);
        configAxios
          .put(
            `refuge/${selectedRefugeId}`,
            {
              nom: nom,
              localite: localite,
              latitude: latitude,
              longitude: longitude,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() => {
            configAxios
              .get(`refuges`)
              .then((response) => {
                dispatch(getRefugesList(response.data));
                navigate("/adminRefuges", { replace: true });
              })
              .catch(() => console.log("ça commence à me faire chier!"));
          })
          .catch(() => console.log("c'est quoi cette embrouille"));
      });
  };

  /**************************************************/
  return (
    <Provider store={store}>
      <div id="user-admin-form">
        <h1>formulaire de modification</h1>
        {queryValue}
        {selectedRefugeData[0] ? (
          <form>
            <label className="user-info" htmlFor="nom">
              Nom:
              <input
                id="nom"
                type="text"
                placeholder={selectedRefugeData[0].nom}
                onFocus={handleValue}
              />
            </label>
            <label className="user-info" htmlFor="localite">
              Localité:
              <input
                id="localite"
                type="text"
                placeholder={selectedRefugeData[0].localite}
                onFocus={handleValue}
                onChange={(e) => setQueryValue(e.target.value)}
              />
            </label>

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
          </form>
        ) : (
          "coucou"
        )}
      </div>
    </Provider>
  );
};
export default RefugeUpdateForm;

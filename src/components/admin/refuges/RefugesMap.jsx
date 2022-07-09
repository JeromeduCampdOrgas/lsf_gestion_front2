import { useSelector } from "react-redux/es/exports";
import "../../../styles/Admin/refuges/refugesMap.scss";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
const RefugesMap = () => {
  const refugesList = useSelector((state) => state.refugesList);
  console.log(refugesList);
  return (
    <MapContainer
      center={[40.4167754, -3.7037902]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {refugesList[0].map((refuge) => {
        return (
          <Marker
            key={refuge.id}
            position={[refuge.latitude, refuge.longitude]}
          ></Marker>
        );
      })}
    </MapContainer>
  );
};
export default RefugesMap;

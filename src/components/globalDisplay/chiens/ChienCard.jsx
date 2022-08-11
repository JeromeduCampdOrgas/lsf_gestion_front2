const ChienCard = ({ chien }) => {
  return (
    <div className="card">
      <h3>{chien.nom}</h3>
      <h4>N° de puce: {chien.puce}</h4>
      <div className="dog-image">
        <img src={chien.imageUrl} alt="" crossOrigin="anonymous" />
      </div>
    </div>
  );
};
export default ChienCard;

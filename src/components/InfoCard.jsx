import "../style/InfoCard.css";

const InfoCard = (props) => {
  return (
    <div className={"infoCard " + props.className}>
      <img className={props.imgClassName} src={props.src} alt={props.src} />
      <div className="infoCard-info">
        <div className="infoCard-name">{props.name}</div>
        <div className="infoCard-subInfo">{props.subInfo}</div>
      </div>
    </div>
  );
};

export default InfoCard;

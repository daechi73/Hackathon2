import "../style/BodiesOfWater.css";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";
import Discover from "../components/Discover";
import MyLink from "../components/MyLink";

const BodiesOfWater = (props) => {
  return (
    <div className="bodiesOfWater">
      <Discover />
      <div className="species-title">Bodies of Water In Toronto:</div>
      <div className="BodiesOfWater-waterbody-infoCards">
        {props.bodiesOfWater.map((body, i) => {
          return (
            <MyLink
              key={i}
              to={"/Hackathon2/bodyOfWaterInfo/" + body.name}
              text={
                <InfoCard
                  className="BodiesOfWater-waterbody-infoCard"
                  imgClassName="BodiesOfWater-waterbody-infoCard-img"
                  src={body.img}
                  name={body.name}
                  subInfo={body.info}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default BodiesOfWater;

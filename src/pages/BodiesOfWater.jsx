import "../style/BodiesOfWater.css";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";

const BodiesOfWater = () => {
  return (
    <div className="BodiesOfWater">
      <div className="BodiesOfWater-waterbody-infoCards">
        <InfoCard
          className="BodiesOfWater-waterbody-infoCard"
          imgClassName="BodiesOfWater-waterbody-infoCard-img"
          src={Img}
          name="Grenadier Pond"
          subInfo="Toronto, Canada"
        />
        <InfoCard
          className="BodiesOfWater-waterbody-infoCard"
          imgClassName="BodiesOfWater-waterbody-infoCard-img"
          src={Img}
          name="Grenadier Pond"
          subInfo="Toronto, Canada"
        />
        <InfoCard
          className="BodiesOfWater-waterbody-infoCard"
          imgClassName="BodiesOfWater-waterbody-infoCard-img"
          src={Img}
          name="Grenadier Pond"
          subInfo="Toronto, Canada"
        />
        <InfoCard
          className="BodiesOfWater-waterbody-infoCard"
          imgClassName="BodiesOfWater-waterbody-infoCard-img"
          src={Img}
          name="Grenadier Pond"
          subInfo="Toronto, Canada"
        />
      </div>
    </div>
  );
};

export default BodiesOfWater;
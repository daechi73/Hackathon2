import "../style/Species.css";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";
import Discover from "../components/Discover";

const Species = (props) => {
  return (
    <div className="species">
      <Discover />
      <div className="species-title">Species In Toronto:</div>
      <div className="species-species-infoCards">
        {props.species.map((fish, i) => {
          return (
            <InfoCard
              key={i}
              className="species-species-infoCard"
              imgClassName="species-species-infoCard-img"
              src={fish.img}
              name={fish.name}
              subInfo={fish.info}
            />
          );
        })}
        {/* <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        />
        <InfoCard
          className="species-species-infoCard"
          imgClassName="species-species-infoCard-img"
          src={Img2}
          name="Fred"
          subInfo="Gold fish"
        /> */}
      </div>
    </div>
  );
};

export default Species;

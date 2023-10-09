import "../style/Species.css";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";
import Discover from "../components/Discover";
import MyLink from "../components/MyLink";

const Species = (props) => {
  return (
    <div className="species">
      <Discover />
      <div className="species-title">Species In Toronto:</div>
      <div className="species-species-infoCards">
        {props.species.map((fish, i) => {
          return (
            <MyLink
              key={i}
              to={"/Hackathon2/speciesInfo/" + fish.name}
              text={
                <InfoCard
                  className="species-species-infoCard"
                  imgClassName="species-species-infoCard-img"
                  src={fish.img}
                  name={fish.name}
                  subInfo={fish.info}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Species;

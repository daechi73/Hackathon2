import "../style/ExploreScreen.css";
import Nav from "../components/Nav";
import Discover from "../components/Discover";
import ExploreItem from "../components/ExploreItem.jsx";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";
import { useState } from "react";
import MyLink from "../components/MyLink";
import map from "../assets/imgs/dummymap.png";

const ExploreScreen = (props) => {
  const [render, setRender] = useState("bodies");
  const handleClick = (e) => {
    if (e.target.textContent === "WATERBODIES") setRender("bodies");
    if (e.target.textContent === "SPECIES") setRender("fish");
  };
  const renderBodies = () => {
    const bodies = [Img, Img, Img, Img];
    const bodiesToRender = props.bodiesOfWater.map((body, i) => {
      return (
        <MyLink
          key={i}
          to={"/bodyOfWaterInfo/" + body.name}
          text={
            <InfoCard
              className="BodiesOfWater-waterbody-infoCard"
              imgClassName="BodiesOfWater-waterbody-infoCard-img"
              src={body.img}
              name={body.name}
              subInfo={body.location}
            />
          }
        />
      );
    });
    return bodiesToRender;
  };
  const renderFish = () => {
    const species = [Img2, Img2, Img2, Img2];
    const speciesToRender = props.species.map((fish, i) => {
      return (
        <MyLink
          key={i}
          to="/home/speciesInfo"
          text={
            <InfoCard
              className="home-species-infoCard"
              imgClassName="home-species-infoCard-img"
              src={fish.img}
              name={fish.name}
              subInfo={fish.info}
            />
          }
        />
      );
    });
    return speciesToRender;
  };

  return (
    <div className="exploreScreen">
      <Discover />
      <div className="container-map_image">
        <img src={map} alt="map" className="map_image" />
      </div>
      <div className="container-mapSearch">
        <input type="text" className="mapSearchInput" placeholder="search" />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>

      <div className="selection-container">
        <div className="selectionflex">
          <button className="selection-button" onClick={handleClick}>
            WATERBODIES
          </button>
          <button className="selection-button" onClick={handleClick}>
            SPECIES
          </button>
        </div>
      </div>
      <div className="exploreCard-infoCards">
        {render === "bodies" ? renderBodies() : renderFish()}
      </div>
    </div>
  );
};

export default ExploreScreen;

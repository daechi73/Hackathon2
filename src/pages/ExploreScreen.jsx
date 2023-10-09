import "../style/ExploreScreen.css";
import Nav from "../components/Nav";
import Discover from "../components/Discover";
import ExploreItem from "../components/ExploreItem.jsx";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";
import { useState } from "react";
import MyLink from "../components/MyLink";

const ExploreScreen = (props) => {
  const [render, setRender] = useState("bodies");
  const handleClick = (e) => {
    if (e.target.textContent === "WATERBODIES") setRender("bodies");
    if (e.target.textContent === "SPECIES") setRender("fish");
  };
  const renderBodies = () => {
    const bodies = [Img, Img, Img, Img];
    const bodiesToRender = bodies.map((body, i) => {
      return (
        <InfoCard
          key={i}
          className="BodiesOfWater-waterbody-infoCard"
          imgClassName="BodiesOfWater-waterbody-infoCard-img"
          src={body}
          name="Grenadier Pond"
          subInfo="Toronto, Canada"
        />
      );
    });
    return bodiesToRender;
  };
  const renderFish = () => {
    const species = [Img2, Img2, Img2, Img2];
    const speciesToRender = species.map((fish, i) => {
      return (
        <InfoCard
          key={i}
          className="BodiesOfWater-waterbody-infoCard"
          imgClassName="BodiesOfWater-waterbody-infoCard-img"
          src={fish}
          name="Grenadier Pond"
          subInfo="Toronto, Canada"
        />
      );
    });
    return speciesToRender;
  };

  return (
    <div className="exploreScreen">
      <Discover />
      <div className="container-map_image">
        <img src="src/assets/dummymap.png" alt="map" className="map_image" />
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

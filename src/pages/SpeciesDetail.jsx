import "../style/SpeciesDetail.css";
import SpeciesInfo from "../components/SpeciesInfo.jsx";
import InfoCard from "../components/InfoCard.jsx";

import fish from "../assets/imgs/fish.jpg";
import Img from "../assets/imgs/GrenadierPond.jpg";

const SpeciesDetail = (props) => {
  const specieToRender = props.species.filter((fish) => {
    return fish.name === props.name;
  });

  return (
    <div className="container">
      <SpeciesInfo
        endangered={specieToRender[0].endangered}
        src={specieToRender[0].img}
        name={specieToRender[0].name}
        subname={specieToRender[0].subname}
        lifeExpenctancy={specieToRender[0].lifeExp}
        length={specieToRender[0].length}
        weight={specieToRender[0].weight}
        description={specieToRender[0].desc}
        interestingFact={specieToRender[0].fact}
      />

      <div className="SpeciesLocation">
        <div id="SpeciesLocationTags">
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
        </div>
        <div id="SpeciesLocationTags">
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
        </div>
        <div id="SpeciesLocationTags">
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
        </div>
      </div>
      <div className="SpeciesRelatedText">
        <p>Related Species</p>
      </div>

      <div className="SpeciesRelated">
        <div id="SpeciesLocationTags">
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
        </div>
        <div id="SpeciesLocationTags">
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
        </div>
        <div id="SpeciesLocationTags">
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeciesDetail;

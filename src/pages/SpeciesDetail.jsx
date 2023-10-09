import "../style/SpeciesDetail.css";
import SpeciesInfo from "../components/SpeciesInfo.jsx";
import InfoCard from "../components/InfoCard.jsx";

import fish from "../assets/imgs/fish.jpg";
import Img from "../assets/imgs/GrenadierPond.jpg";

const SpeciesDetail = () => {
  return (
    <div className="container">

        <SpeciesInfo
            endangered="ENDANGERED"
            src={fish}
            name="Atlantic Cod"
            subname="Gadus morhua"
            lifeExpenctancy="Up to 25 years"
            length="45-55 cm"
            weight="2.2 Kg"
            description="The Atlantic Cod has a generally spotted body, a leaden-silvery peritoneum with black dots, small eyes, a stout caudal peduncle, and a lateral line that is paler in colour than the adjacent areas of the body."
            interestingFact="The Laurentian North population of Atlantic Cod has declined between 76% and 89% over the last three generations (about 30 years)."
        />

        <div className="SpeciesLocation">
            <div id="SpeciesLocationTags">
                <InfoCard
                className="home-waterbody-infoCard"
                imgClassName="home-waterbody-infoCard-img"
                src={Img}
                name="Grenadier Pond"
                subInfo="Toronto, Canada"/>
            </div>
            <div id="SpeciesLocationTags">
                <InfoCard
                className="home-waterbody-infoCard"
                imgClassName="home-waterbody-infoCard-img"
                src={Img}
                name="Grenadier Pond"
                subInfo="Toronto, Canada"/>
            </div>
            <div id="SpeciesLocationTags">
                <InfoCard
                className="home-waterbody-infoCard"
                imgClassName="home-waterbody-infoCard-img"
                src={Img}
                name="Grenadier Pond"
                subInfo="Toronto, Canada"/>
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
                subInfo="Toronto, Canada"/>
            </div>
            <div id="SpeciesLocationTags">
                <InfoCard
                className="home-waterbody-infoCard"
                imgClassName="home-waterbody-infoCard-img"
                src={Img}
                name="Grenadier Pond"
                subInfo="Toronto, Canada"/>
            </div>
            <div id="SpeciesLocationTags">
                <InfoCard
                className="home-waterbody-infoCard"
                imgClassName="home-waterbody-infoCard-img"
                src={Img}
                name="Grenadier Pond"
                subInfo="Toronto, Canada"/>
            </div>
        </div>


    </div>
  );
};

export default SpeciesDetail;

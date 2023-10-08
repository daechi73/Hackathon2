import "../style/Home.css";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";
import CardSlider from "../components/CardSlider";

const Home = () => {
  return (
    <div className="home">
      <div className="discover">
        <div className="nav-map-icon container-nav-icon">
          <i className="fa fa-map-marker nav-icon" aria-hidden="true"></i>
        </div>
        <div className="container-title-locationMenu">
          <div className="discover-title">Discover</div>
          <div className="discover-locationMenu">LocationMenu</div>
        </div>
      </div>
      <div className="home-waterbody">
        <div className="container-waterbody-title-viewOption">
          <div className="waterbody-title">Waterbodies Nearby</div>
          <div className="waterbody-view">view</div>
        </div>
        <div className="home-waterbody-infoCards">
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="useless"
          />
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="useless"
          />
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="useless"
          />
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="useless"
          />
        </div>
      </div>
      <div className="home-species">
        <div className="container-species-title-viewOption">
          <div className="species-title">Species in the this Region</div>
          <div className="species-view">view</div>
        </div>
        <div className="home-species-infoCards">
          <InfoCard
            className="home-species-infoCard"
            imgClassName="home-species-infoCard-img"
            src={Img2}
            name="Fred"
            subInfo="Gold fish"
          />
          <InfoCard
            className="home-species-infoCard"
            imgClassName="home-species-infoCard-img"
            src={Img2}
            name="Fred"
            subInfo="Gold fish"
          />
          <InfoCard
            className="home-species-infoCard"
            imgClassName="home-species-infoCard-img"
            src={Img2}
            name="Fred"
            subInfo="Gold fish"
          />
          <InfoCard
            className="home-species-infoCard"
            imgClassName="home-species-infoCard-img"
            src={Img2}
            name="Fred"
            subInfo="Gold fish"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

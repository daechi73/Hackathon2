import "../style/Home.css";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";
import Discover from "../components/Discover";
import MyLink from "../components/MyLink";

const Home = () => {
  return (
    <div className="home">
      <Discover />
      <div className="home-waterbody">
        <div className="container-waterbody-title-viewOption">
          <div className="waterbody-title">Waterbodies Nearby</div>
          <div className="waterbody-view">
            <MyLink to="/home/waterbodies" text="view" className="homeView" />
          </div>
        </div>
        <div className="home-waterbody-infoCards">
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
          <InfoCard
            className="home-waterbody-infoCard"
            imgClassName="home-waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="Toronto, Canada"
          />
        </div>
      </div>
      <div className="home-species">
        <div className="container-species-title-viewOption">
          <div className="species-title">Species in the this Region</div>
          <div className="species-view">
            <MyLink to="/home/species" text="view" className="homeView" />
          </div>
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

import "../style/Home.css";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";

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
      <div className="waterbodies">
        <div className="container-waterbodiesTitle-viewOption">
          <div className="waterbodies-title">Waterbodies Nearby</div>
          <div className="waterbodies-view">view</div>
        </div>
        <div className="infoCards">
          <InfoCard
            className="waterbody-infoCard"
            imgClassName="waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="useless"
          />
          <InfoCard
            className="waterbody-infoCard"
            imgClassName="waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="useless"
          />
          <InfoCard
            className="waterbody-infoCard"
            imgClassName="waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="useless"
          />
          <InfoCard
            className="waterbody-infoCard"
            imgClassName="waterbody-infoCard-img"
            src={Img}
            name="Grenadier Pond"
            subInfo="useless"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

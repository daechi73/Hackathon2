import "../style/Home.css";
import InfoCard from "../components/InfoCard";
import Img from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";
import Discover from "../components/Discover";
import MyLink from "../components/MyLink";

const Home = (props) => {
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
          {props.bodiesOfWater.map((body, i) => {
            return (
              <MyLink
                key={i}
                to={"/bodyOfWaterInfo/" + body.name}
                text={
                  <InfoCard
                    className="home-waterbody-infoCard"
                    imgClassName="home-waterbody-infoCard-img"
                    src={body.img}
                    name={body.name}
                    subInfo={body.info}
                  />
                }
              />
            );
          })}
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
          {props.species.map((fish, i) => {
            return (
              <MyLink
                key={i}
                to={"/home/bodyOfWaterInfof" + fish.name}
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

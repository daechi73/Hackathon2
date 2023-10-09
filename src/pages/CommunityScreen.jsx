import "../style/CommunityScreen.css";
import Nav from "../components/Nav";
import InfoCard from "../components/InfoCard.jsx";
import Img2 from "../assets/imgs/fish.jpg";
import MyLink from "../components/MyLink";

const CommunityScreen = () => {
  const navigate = () => {
    useNavigate("/home");
  };
  return (
    <div>
      <header className="header">
        <i className="fa fa-user" aria-hidden="true"></i>
        <button>Following</button>
        <button>Nearby</button>
        <button>Global</button>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </header>
      <div className="searchbar">
        <input type="text" placeholder="Search.." />
      </div>

      <div className="info-card-wrapper">
        <MyLink
          to="/Hackathon2/community/communityPost"
          text={
            <InfoCard
              className="species-species-infoCard"
              imgClassName="species-species-infoCard-img"
              src={Img2}
              name="Fred"
              subInfo="Gold fish"
            />
          }
        />
        <MyLink
          to="/Hackathon2/community/communityPost"
          text={
            <InfoCard
              className="species-species-infoCard"
              imgClassName="species-species-infoCard-img"
              src={Img2}
              name="Fred"
              subInfo="Gold fish"
            />
          }
        />
        <MyLink
          to="/Hackathon2/community/communityPost"
          text={
            <InfoCard
              className="species-species-infoCard"
              imgClassName="species-species-infoCard-img"
              src={Img2}
              name="Fred"
              subInfo="Gold fish"
            />
          }
        />{" "}
        <MyLink
          to="/Hackathon2/community/communityPost"
          text={
            <InfoCard
              className="species-species-infoCard"
              imgClassName="species-species-infoCard-img"
              src={Img2}
              name="Fred"
              subInfo="Gold fish"
            />
          }
        />
      </div>
    </div>
  );
};

export default CommunityScreen;

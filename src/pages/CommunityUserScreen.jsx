import "../style/CommunityUserScreen.css";
import Nav from "../components/Nav";
import InfoCard from "../components/InfoCard.jsx";

import pond from "../assets/imgs/GrenadierPond.jpg";
import Img2 from "../assets/imgs/fish.jpg";

const CommunityUserScreen = () => {
  return (
    <div className="container">
      <div className="text_container">
        <div className="user-container">
          <i className="fa fa-user" aria-hidden="true"></i>
          <p>User123</p>
        </div>

        <div>
          <button>+ Follow</button>
        </div>
      </div>

      <div className="infocardlist-container">
        <div className="infocardlist">
          <InfoCard
            className="species-species-infoCard"
            imgClassName="species-species-infoCard-img"
            src={Img2}
            name="Fred"
            subInfo="Gold fish"
          />
          <InfoCard
            className="species-species-infoCard"
            imgClassName="species-species-infoCard-img"
            src={Img2}
            name="Fred"
            subInfo="Gold fish"
          />
          <InfoCard
            className="species-species-infoCard"
            imgClassName="species-species-infoCard-img"
            src={Img2}
            name="Fred"
            subInfo="Gold fish"
          />
          <InfoCard
            className="species-species-infoCard"
            imgClassName="species-species-infoCard-img"
            src={Img2}
            name="Fred"
            subInfo="Gold fish"
          />
        </div>
      </div>

      <div></div>

      <Nav />
    </div>
  );
};

export default CommunityUserScreen;

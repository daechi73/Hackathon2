import "../style/CommunityScreen.css";
import Nav from "../components/Nav";
import InfoCard from "../components/InfoCard.jsx";
import Img2 from "../assets/imgs/fish.jpg";

const CommunityScreen = () => {
    return (
        <div>
            <header className='header'>
                <i className="fa fa-user" aria-hidden="true"></i>
                <button>Following</button>
                <button>Nearby</button>
                <button>Global</button>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </header>
            <div className="searchbar"><input type="text" placeholder="Search.." /></div>

            <div className="info-card-wrapper">
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
                <Nav />

                <InfoCard
                      className="species-species-infoCard"
                      imgClassName="species-species-infoCard-img"
                      src={Img2}
                      name="Fred"
                      subInfo="Gold fish"
                    />
                <Nav />

                <InfoCard
                      className="species-species-infoCard"
                      imgClassName="species-species-infoCard-img"
                      src={Img2}
                      name="Fred"
                      subInfo="Gold fish"
                    />

            </div>


            <Nav />


        </div>


  );
};

export default CommunityScreen;

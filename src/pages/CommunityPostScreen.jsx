import "../style/CommunityPostScreen.css";
import pond from "../assets/imgs/GrenadierPond.jpg";
import MyLink from "../components/MyLink";

const CommunityPostScreen = () => {
  return (
    <div className="container">
      <div className="image-container">
        <div className="map_image">
          <img src={pond} alt="map" className="image" />
        </div>

        <p className="nameText">Picture of Lake</p>

        <div className="text_container">
          <div className="user-container">
            <i className="fa fa-user" aria-hidden="true"></i>
            <MyLink
              to="/Hackathon2/community/communityUser"
              text={<p>User123</p>}
            />
          </div>

          <div>
            <button>+ Follow</button>
          </div>
        </div>

        <div>
          <p className="descriptionText">
            This is a description of the lake. This is a description of the
            lake. This is a description of the lake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostScreen;

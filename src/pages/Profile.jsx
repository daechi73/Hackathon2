import "../style/Profile.css";
const Profile = (props) => {
  return (
    <div className="profile">
      <div className="container-profilePic">
        <i className="fa fa-user profile-icon" aria-hidden="true"></i>
      </div>
      <div className="profile-info">
        <div className="name">
          {" "}
          <b> Name:</b> Jason Water
        </div>
        <div className="email">
          {" "}
          <b>Email: </b> JasonWater@WhatsInOurWater.ca
        </div>
        <div className="location">
          <b> Location: </b>Toronto
        </div>
        <div className="Birthday">
          <b>Birthday: </b> 2014-12-01
        </div>
        <div className="phoneNumber">
          <b>Phone Number:</b> 425-115-2586
        </div>
        <div className="instagram">
          <b>Instagram:</b> @WhatsInOurWater
        </div>
      </div>
    </div>
  );
};

export default Profile;

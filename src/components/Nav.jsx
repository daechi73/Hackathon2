import "../style/Nav.css";
import MyLink from "./MyLink";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <div className="nav-home-icon container-nav-icon">
            <i className="fa fa-home nav-icon" aria-hidden="true"></i>
          </div>
          <div className="nav-title">
            <MyLink text="Home" to="/home" />
          </div>
        </li>
        <li>
          <div className="nav-map-icon container-nav-icon">
            <i className="fa fa-map-marker nav-icon" aria-hidden="true"></i>
          </div>

          <div className="nav-title">
            <MyLink text="Explore" to="/explore" />
          </div>
        </li>
        <li>
          <div className="nav-community-icon container-nav-icon">
            <i className="fa fa-comments-o nav-icon" aria-hidden="true"></i>
          </div>

          <div className="nav-title">
            <MyLink text="Community" to="/community" />
          </div>
        </li>
        <li>
          <div className="nav-profile-icon container-nav-icon">
            <i className="fa fa-user nav-icon fa-1x" aria-hidden="true"></i>
          </div>
          <div className="nav-title">
            <MyLink text="Profile" to="/profile" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

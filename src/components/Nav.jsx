import "../style/Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <div className="nav-home-icon container-nav-icon">
            <i className="fa fa-home nav-icon" aria-hidden="true"></i>
          </div>
          <div className="nav-title">Home</div>
        </li>
        <li>
          <div className="nav-map-icon container-nav-icon">
            <i className="fa fa-map-marker nav-icon" aria-hidden="true"></i>
          </div>

          <div className="nav-title">Explore</div>
        </li>
        <li>
          <div className="nav-community-icon container-nav-icon">
            <i className="fa fa-comments-o nav-icon" aria-hidden="true"></i>
          </div>

          <div className="nav-title">Community</div>
        </li>
        <li>
          <div className="nav-profile-icon container-nav-icon">
            <i className="fa fa-user nav-icon fa-1x" aria-hidden="true"></i>
          </div>
          <div className="nav-title">Profile</div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

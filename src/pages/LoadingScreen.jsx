import "../style/LoadingScreen.css";
import Loading from "../components/Loading";
import LogoImg from "../assets/imgs/hackathon2Logo.png";

const LoadingScreen = () => {
  return (
    <div className="container-loadingScreen">
      <div className="loadingScreen appInfo">
        <div className="loadingScreen appImg">
          <img src={LogoImg} alt="logoImg" className="logoImg" />
        </div>
        <div className="loadingScreen appName">Lockness</div>
      </div>
      <div className="loadingScreen-filler">
        <Loading />
      </div>
    </div>
  );
};

export default LoadingScreen;

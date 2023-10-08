import "../style/LoadingScreen.css";
import Loading from "../components/Loading";
const LoadingScreen = () => {
  return (
    <div className="container-loadingScreen">
      <div className="loadingScreen appInfo">
        <div className="loadingScreen appImg"></div>
        <div className="loadingScreen appName">Lockness</div>
      </div>
      <div className="loadingScreen-filler">
        <Loading />
      </div>
    </div>
  );
};

export default LoadingScreen;

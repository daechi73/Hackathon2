import "../style/StartScreen.css";
import LogoImg from "../assets/imgs/hackathon2Logo.png";

const StartScreen = () => {
  return (
    <div className="container-startScreen">
      <div className="startScreen appInfo">
        <div className="startScreen appImg">
          <img src={LogoImg} alt="logoImg" className="logoImg" />
        </div>
        <div className="startScreen appName">Lockness</div>
      </div>
      <div className="startScreen-filler"></div>
    </div>
  );
};

export default StartScreen;

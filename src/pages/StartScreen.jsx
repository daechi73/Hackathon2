import "../style/StartScreen.css";

const StartScreen = () => {
  return (
    <div className="container-startScreen">
      <div className="startScreen appInfo">
        <div className="startScreen appImg"></div>
        <div className="startScreen appName">Lockness</div>
      </div>
      <div className="startScreen-filler"></div>
    </div>
  );
};

export default StartScreen;

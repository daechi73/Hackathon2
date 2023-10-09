import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import StartScreen from "./pages/StartScreen";
import LoadingScreen from "./pages/LoadingScreen";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import StatusBar from "./components/StatusBar";
import Home from "./pages/Home";
import Species from "./pages/Species";
import BodiesOfWater from "./pages/BodiesOfWater";
import ExploreScreen from "./pages/ExploreScreen";
import ErrorPage from "./pages/ErrorPage";
import CommunityPostScreen from "./pages/CommunityPostScreen";
import CommunityScreen from "./pages/CommunityScreen";
import CommunityUserScreen from "./pages/CommunityUserScreen";
import SpeciesInfo from "./pages/SpeciesInfo";
import BodyOfWaterInfo from "./pages/BodyOfWaterInfo";
import Profile from "./pages/Profile";
import BodiesOfWaterObjects from "./components/BodiesOfWaterObjects";
import SpeciesObjects from "./components/SpeciesObjects";
import ProfessionalPage from "./pages/ProfessionalPage";

function App() {
  // const [startPage, setStartPage] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const [startApp, setStartApp] = useState(false);
  const { name } = useParams();
  const bodiesOfWater = BodiesOfWaterObjects();
  const species = SpeciesObjects();

  useEffect(() => {
    // setTimeout(() => {
    //   setLoadingPage(true);
    //   setStartPage(false);
    // }, 3000);
    setTimeout(() => {
      setLoadingPage(false);
      setStartApp(true);
    }, 7000);
  }, []);

  // if (loadingPage) return <LoadingScreen />; //uncomment for production
  // console.log(species);
  // console.log(bodiesOfWater);
  console.log(name);
  return (
    <div className="container-main">
      <StatusBar />
      {startApp && <ExploreScreen /> && !name}
      {name === "home" ? (
        <Home species={species} bodiesOfWater={bodiesOfWater} />
      ) : name === "explore" ? (
        <ExploreScreen species={species} bodiesOfWater={bodiesOfWater} />
      ) : name === "community" ? (
        <CommunityScreen />
      ) : name === "profile" ? (
        <Profile />
      ) : name === "waterbodies" ? (
        <BodiesOfWater species={species} bodiesOfWater={bodiesOfWater} />
      ) : name === "species" ? (
        <Species species={species} bodiesOfWater={bodiesOfWater} />
      ) : name === "communityPost" ? (
        <CommunityPostScreen />
      ) : name === "speciesInfo" ? (
        <SpeciesInfo species={species} bodiesOfWater={bodiesOfWater} />
      ) : name === "bodyOfWaterInfo" ||
        name === "Grenadier Pond" ||
        name === "West Humber River Bridge and Pond" ||
        name === "Humber Valley Pond" ||
        name === "Sunnyside Lakeshore" ? (
        <BodyOfWaterInfo bodiesOfWater={bodiesOfWater} name={name} />
      ) : name === "communityUser" ? (
        <CommunityUserScreen />
      ) : (
        <ErrorPage />
      )}

      <Nav />
    </div>
  );
}

export default App;

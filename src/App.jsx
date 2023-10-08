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

function App() {
  const [startPage, setStartPage] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const [startApp, setStartApp] = useState(false); //false for product true for dev
  const { name } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true);
      setStartPage(false);
    }, 3000);
    setTimeout(() => {
      setLoadingPage(false);
      setStartApp(true);
    }, 7000);
  }, []);

  if (startPage) return <StartScreen />;
  if (loadingPage) return <LoadingScreen />;

  console.log(name);
  return (
    <div className="container-main">
      <StatusBar />
      {startApp && <ExploreScreen /> && !name}
      {name === "home" ? (
        <Home />
      ) : name === "explore" ? (
        <ExploreScreen />
      ) : name === "community" ? (
        "community"
      ) : name === "profile" ? (
        "profile"
      ) : name === "waterbodies" ? (
        <BodiesOfWater />
      ) : name === "species" ? (
        <Species />
      ) : (
        <ErrorPage />
      )}
      <Nav />
    </div>
  );
}

export default App;

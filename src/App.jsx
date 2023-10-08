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

function App() {
  const [startPage, setStartPage] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const [startApp, setStartApp] = useState(false);
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

  return (
    <div className="container-main">
      <StatusBar />
      {startApp && <Home />}
      <Nav />
    </div>
  );
}

export default App;

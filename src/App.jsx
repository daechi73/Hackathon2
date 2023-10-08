import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
  return (
    <div className="container-main">
      <StatusBar />
      <Home />
      <Nav />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "../style/Map.css";
const Map = () => {
  let map;

  async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  document.getElementById("map").textContent = "hi";
  initMap();
};

export default Map;

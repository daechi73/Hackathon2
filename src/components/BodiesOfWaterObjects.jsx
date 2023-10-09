import gredadierPond from "../assets/imgs/GrenadierPond.jpg";
import westHumber from "../assets/imgs/WestHumber.jpg";
import humberValley from "../assets/imgs/HumberValley.jpg";
import sunnyside from "../assets/imgs/sunnyside-park.jpg";

const BodiesOfWaterObjects = () => {
  const bodiesOfWater = [
    {
      name: "Grenadier Pond",
      temperature: "18C",
      numSpecies: 13,
      location: "Toronto, Ontario",
      pollutionLevel: "low",
      img: gredadierPond,
    },
    {
      name: "West Humber River Bridge and Pond",
      temperature: "12C",
      numSpecies: 21,
      location: "Toronto, Ontario",
      pollutionLevel: "medium",
      img: westHumber,
    },
    {
      name: "Humber Valley Pond",
      temperature: "22C",
      numSpecies: 43,
      location: "Toronto, Ontario",
      pollutionLevel: "high",
      img: humberValley,
    },
    {
      name: "Sunnyside Lakeshore",
      temperature: "54C",
      numSpecies: 77,
      location: "Toronto, Ontario",
      pollutionLevel: "low",
      img: sunnyside,
    },
  ];
  return bodiesOfWater;
};

export default BodiesOfWaterObjects;
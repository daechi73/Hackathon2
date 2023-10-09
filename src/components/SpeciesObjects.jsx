import cod from "../assets/imgs/cod.png";
import clownFish from "../assets/imgs/clown-fish.png";
import trout from "../assets/imgs/trout.png";
import sableFish from "../assets/imgs/sablefish.png";

const SpeciesObjects = () => {
  const speciesObjects = [
    {
      name: "Cod Fish",
      endangered: "yes",
      common: "yes",
      info: "Codfish are carnivorous and eat other fish, including young codfish",
      img: cod,
    },
    {
      name: "Clown Fish",
      endangered: "yes",
      common: "yes",
      info: "Clownfish are social fish, communicating through popping and clicking noises.",
      img: clownFish,
    },
    {
      name: "Sable Fish",
      endangered: "yes",
      common: "yes",
      info: "Sablefish are a deepwater species native to the Pacific Northwest and Alaska. They are a tasty source of protein, rich in omega-3 fatty acids",
      img: trout,
    },
    {
      name: "Trout Fish",
      endangered: "yes",
      common: "yes",
      info: "Trout are classified as oily fish and have been important food fish for humans",
      img: sableFish,
    },
  ];
  return speciesObjects;
};

export default SpeciesObjects;

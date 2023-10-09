import InfoTab from "../components/InfoTab.jsx";
import About from "../components/About.jsx";
import pond from "../assets/imgs/GrenadierPond.jpg";
import "../style/BodyOfWaterInfo.css";
import { useParams } from "react-router-dom";

const BodyOfWaterInfo = (props) => {
  const bodyToRender = props.bodiesOfWater.filter((body) => {
    return body.name === props.name;
  });

  return (
    <div className="container">
      <About
        src={bodyToRender[0].img}
        description={bodyToRender[0].detailInfo}
        name={bodyToRender[0].name}
        location={bodyToRender[0].location}
      />

      <InfoTab
        watertemp={bodyToRender[0].temperature}
        species={bodyToRender[0].numSpecies}
        plevel={bodyToRender[0].pollutionLevel}
      />
    </div>
  );
};

export default BodyOfWaterInfo;

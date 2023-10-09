import "../style/ProfessionalPage.css";
import InfoTab from "../components/InfoTab.jsx";
import About from "../components/About.jsx";
import pond from "../assets/imgs/GrenadierPond.jpg";

const ProfessionalPage = () => {
  return (
    <div className="container">
      <About
        src={pond}
        description="A kilometre long and half a kilometre wide, Grenadier Pond offers one of the loveliest vistas in High Park. Although much affected by development onsite and in the surrounding neighbourhood, this large natural pond still provides habitat to a wide assortment of water birds, fish, turtles and other wildlife."
        name="Grenadier Pond"
        location="High Park | 2.3 KM"
      />

      <InfoTab watertemp="13.4 °C" species="12" plevel="Low" />
    </div>
  );
};

export default ProfessionalPage;

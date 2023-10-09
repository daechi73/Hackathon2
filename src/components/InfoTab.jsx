import "../style/infoTab.css";
var coll = document.getElementsByClassName("Detailed Info >");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
const InfoTab = (props) => {
  return (
    <div className="infoTab">
      <div>
        <div className="overviewdiv">
          <p>Overview:</p>
        </div>
        <div className="infoTab-overview">
          <div id="align1">
            <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
            <p>WATER TEMP</p>
            <p id="watertemp">{props.watertemp}</p>
          </div>
          <div id="align1">
            <i className="fa fa-question-circle-o" aria-hidden="true"></i>
            <p>SPECIES</p>
            <p id="species">{props.species}</p>
          </div>
          <div id="align1">
            <i className="fa fa-tint" aria-hidden="true"></i>
            <p>POLLUTION LEVEL</p>
            <p id="plevel">{props.plevel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;

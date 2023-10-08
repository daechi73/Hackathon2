import "../style/ExploreScreen.css";
import Nav from "../components/Nav";
import ExploreItem from "../components/ExploreItem.jsx";
const ExploreScreen = () => {
    return (
        <div>
            <div className="header_flex">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <div className="textbox">
                    <div className="location1">
                        <p>Current Location</p>
                    </div>
                    <div className="location2">
                        <p>University of Toronto, Canada</p>
                    </div>
                </div>
            </div>
            <div className="map_image">
                    <img src="src/assets/dummymap.png" alt="map"/>
            </div>

            <div className='selection-container'>
                <div className='selectionflex'>
                    <button className="selection-button">WATERBODIES</button>
                    <button className="selection-button">SPECIES</button>
                    <button className="selection-button">EVENTS</button>
                </div>
            </div>



            <ExploreItem />
            <ExploreItem />
            <ExploreItem />
            <ExploreItem />



            <div className="nav-component">
                <Nav />
            </div>

        </div>


  );
};

export default ExploreScreen;

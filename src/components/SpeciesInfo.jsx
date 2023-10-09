import "../style/SpeciesInfo.css";

const SpeciesInfo = (props) => {

    return (
      <div className='AboutTab'>
          <div>
              <div className="SpeciesEndangered"><p>{props.endangered}</p></div>
              <img className="speciesImageName" src={props.src} alt={props.src} />
              <div className="SpeciesName"><p>{props.name}</p></div>
              <div className="SpeciesSubName"><p>{props.subname}</p></div>
              <div className="SpciesLifeExpectancy">
                  <p><b>Life Expectancy:</b></p>
                  <p>{props.lifeExpenctancy}</p>
              </div>
              <div className="SpeciesLength">
                  <p><b>Length:</b></p>
                  <p>{props.length}</p>
              </div>
              <div className="SpeciesWeight">
                  <p><b>Weight:</b></p>
                  <p>{props.weight}</p>
              </div>
              <div className="SpeciesDescription">
                  <p><b>Description:</b></p>
                  <p>{props.description}</p>
              </div>
              <div className="SpeciesInterestingFact">
                  <p><b>Interesting Fact:</b></p>
                  <p>{props.interestingFact}</p>
              </div>
              <div className="SpeciesFind">
                  <p><b>Where Can I Find It?</b></p>
              </div>
          </div>
      </div>

  );
};

export default SpeciesInfo;

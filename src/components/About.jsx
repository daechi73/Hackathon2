import "../style/About.css";

const About = (props) => {

    return (
      <div className='AboutTab'>
          <div>
            <img className="imageClassName" src={props.src} alt={props.src} />
              <div className="aboutMoveUp">
                  <div className="ImageAbout"><p>About</p></div>
                  <div className="ImageDescriptionText"><p>{props.description}</p></div>
                  <div className="ImageName"><p>{props.name}</p></div>
                  <div className="ImageLocation"><p>{props.location}</p></div>
              </div>
          </div>
      </div>

  );
};

export default About;

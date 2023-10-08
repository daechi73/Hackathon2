import { Link } from "react-router-dom";
import "../style/MyLink.css";

const MyLink = (props) => {
  return (
    <Link className={"myLink " + props.className} to={props.to}>
      {props.text}
    </Link>
  );
};
export default MyLink;

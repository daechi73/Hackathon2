import { useNavigate } from "react-router-dom";

const NavigateHandler = (to) => {
  const navigate = useNavigate();

  navigate(to);
};

export default NavigateHandler;

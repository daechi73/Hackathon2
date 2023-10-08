import "../style/StatusBar.css";
import { useState, useEffect } from "react";
const StatusBar = () => {
  const [time, setTime] = useState(
    new Date().toLocaleDateString("en", {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    })
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleDateString("en", {
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        })
      );
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="statusBar">
      <div className="time">{time}</div>
      <div className="status">
        <div className="data">
          <i className="fa fa-signal" aria-hidden="true"></i>
        </div>
        <div className="wifi">
          <i className="fa fa-wifi" aria-hidden="true"></i>
        </div>
        <div className="battery">
          <i className="fa fa-battery-full" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

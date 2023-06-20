import React from "react";
import img from "./assets/profile.png";
function TopLeft(props) {
  return (
    <div className="top-left">
      <div className="top">
        <div className="dp">
          <img src={img} alt="" />
        </div>
        <div className="sc"></div>
        <div className="compose"></div>
      </div>
      <div className="bottom">
        <input placeholder="Search" type="text" />
      </div>
    </div>
  );
}
export default TopLeft;

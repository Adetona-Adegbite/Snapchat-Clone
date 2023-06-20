import React from "react";
function BottomLeft(props) {
  return (
    <div className="chatbox">
      <div className="left-chat">
        <div className="profile">
          <img src={props.img} alt="" />
        </div>
      </div>
      <div className="right-chat">
        <h3>{props.name}</h3>
        <div className="info">
          <p className="new-chat">New Chat and Snaps</p>
          <p className="time">{props.time}</p>
          <p className="streaks">{props.streaks} 🔥</p>
        </div>
      </div>
      <div className="noti">
        <div className="noti-icon"></div>
      </div>
    </div>
  );
}
export default BottomLeft;

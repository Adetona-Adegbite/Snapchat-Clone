import React from "react";
import TopLeft from "./components/top-left";
import BottomLeft from "./components/bottom-left";
import Right from "./components/right";
import friends from "./components/friends";

function App() {
  return (
    <div className="app">
      <div className="left">
        <TopLeft />
        <div className="bottom-left">
          {friends.map((friend) => {
            return (
              <BottomLeft
                img={friend.img}
                name={friend.name}
                streaks={friend.streaks}
                time={friend.time}
              />
            );
          })}
        </div>
      </div>
      <div className="right">
        <Right />
      </div>
    </div>
  );
}

export default App;

import React from "react";

const Scoreboard = props => {
  return (
    <div>
      <h1>Hello mum</h1>
      <button onClick={() => props.addPlayer("steve")}>Add player</button>
    </div>
  );
};

export default Scoreboard;

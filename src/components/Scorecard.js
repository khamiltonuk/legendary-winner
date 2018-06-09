import React from "react";

const Scorecard = props => {
  console.log(props.players);
  return (
    <div>
      {props.players &&
        props.players.map((player, i) => {
          return (
            <div key={player.key} className={player.turn ? "active" : ""}>
              {player.name}
            </div>
          );
        })}
    </div>
  );
};

export default Scorecard;

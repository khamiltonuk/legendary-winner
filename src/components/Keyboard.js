import React from "react";

const Keyboard = props => {
  return (
    <div className="keyboard">
      {[...Array(10)].map((e, i) => (
        <button
          className="number-key"
          data-q={`number-key-${i}`}
          key={i}
          onClick={() => props.enterNumber(i)}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;

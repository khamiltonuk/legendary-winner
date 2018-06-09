import React from "react";
import AddPlayer from "./AddPlayer";
import Modal from "react-modal";
import Keyboard from "./Keyboard";
import Scorecard from "./Scorecard";

const Scoreboard = props => {
  return (
    <div>
      <h1>Bowling Scoreboard</h1>
      <button onClick={props.openModal}>Add another Player</button>
      <Modal
        isOpen={props.showModal}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
      >
        <AddPlayer {...props} />
      </Modal>
      <Scorecard players={props.players} />
      <Keyboard enterNumber={props.enterNumber} />
    </div>
  );
};

export default Scoreboard;

import React from "react";
import AddPlayer from "./AddPlayer";
import Modal from "react-modal";

const Scoreboard = props => {
  return (
    <div>
      <h1>Hello mum</h1>
      <button onClick={props.openModal}>open Modal</button>
      <Modal
        isOpen={props.showModal}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
      >
        <AddPlayer {...props} />
      </Modal>
    </div>
  );
};

export default Scoreboard;

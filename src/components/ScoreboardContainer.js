import { connect } from "react-redux";
import Scoreboard from "./Scoreboard";
import { addPlayer, closeModal, openModal, enterNumber } from "../actions";
import "./Scoreboard.css";

export const ScoreboardContainer = connect(
  function mapStateToProps(state) {
    return {
      players: state.players,
      showModal: state.showModal
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addPlayer: name => dispatch(addPlayer(name)),
      closeModal: () => dispatch(closeModal()),
      openModal: () => dispatch(openModal()),
      enterNumber: value => dispatch(enterNumber(value))
    };
  }
)(Scoreboard);

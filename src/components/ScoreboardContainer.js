import { connect } from "react-redux";
import Scoreboard from "./Scoreboard";
import { addPlayer } from "../actions";
import "./Scoreboard.css";

export const ScoreboardContainer = connect(
  function mapStateToProps(state) {
    return {
      players: state.players
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addPlayer: name => dispatch(addPlayer(name))
    };
  }
)(Scoreboard);

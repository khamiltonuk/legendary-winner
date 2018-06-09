import {
  ADD_PLAYER,
  OPEN_MODAL,
  CLOSE_MODAL,
  ENTER_NUMBER
} from "../constants";

import { addScore } from "../helpers/helper";

const initialState = {
  players: [],
  showModal: true
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return { ...state, showModal: true };
    case CLOSE_MODAL:
      return { ...state, showModal: false };
    case ENTER_NUMBER:
      return { ...state, players: addScore(state.players, payload) };
    case ADD_PLAYER:
      return { ...state, players: [...state.players, payload] };
    default:
      return state;
  }
}

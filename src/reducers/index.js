import { ADD_PLAYER } from "../constants";

const initialState = {
  players: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_PLAYER:
      return { ...state, players: payload };
    default:
      return state;
  }
}

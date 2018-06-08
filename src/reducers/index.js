import { ADD_PLAYER, OPEN_MODAL, CLOSE_MODAL } from "../constants";

const initialState = {
  players: [],
  showModal: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return { ...state, showModal: true };
    case CLOSE_MODAL:
      return { ...state, showModal: false };
    case ADD_PLAYER:
      return { ...state, players: [...state.players, { name: payload }] };
    default:
      return state;
  }
}

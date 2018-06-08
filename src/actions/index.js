import * as actions from "../constants";

export function addPlayer(name) {
  return {
    type: actions.ADD_PLAYER,
    payload: name
  };
}
export function openModal() {
  return {
    type: actions.OPEN_MODAL
  };
}
export function closeModal() {
  return {
    type: actions.CLOSE_MODAL
  };
}

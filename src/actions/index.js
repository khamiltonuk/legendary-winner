import * as actions from "../constants";

export function addPlayer(payload) {
  console.log(payload);
  return {
    type: actions.ADD_PLAYER,
    payload
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

export function enterNumber(value) {
  return {
    type: actions.ENTER_NUMBER,
    payload: value
  };
}

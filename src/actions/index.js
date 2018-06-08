import { ADD_PLAYER } from "../constants";

export function addPlayer(name) {
  return {
    type: ADD_PLAYER,
    payload: name
  };
}

export function addScore(state, payload) {
  console.log(state);
  const everyoneElse = state.filter(el => {
    return el.turn === false;
  });
  const updatedPlayer = state.filter(el => {
    return el.turn === true;
  });
  updatedPlayer[0].scores.push(payload);
  //console.log(updatedPlayer);
  return [...updatedPlayer, ...everyoneElse];
}

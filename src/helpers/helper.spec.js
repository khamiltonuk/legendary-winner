import { addScore } from "./helper";

describe("addScore", () => {
  test("should add a value to the players who's turn it is", () => {
    const players = [
      { name: "steve", scores: [0, 4, 0, 3], turn: true },
      { name: "paul", scores: [9, 4, 9, 8], turn: false }
    ];
    const expected = [
      { name: "steve", scores: [0, 4, 0, 3, 3], turn: true },
      { name: "paul", scores: [9, 4, 9, 8], turn: false }
    ];
    expect(addScore(players, 3)).toEqual(expected);
  });
});

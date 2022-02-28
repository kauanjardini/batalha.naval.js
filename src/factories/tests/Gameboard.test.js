import Gameboard from "../Gameboard";

let g;
beforeEach(() => {
  g = Gameboard();
});

test("O Gameboard posiciona uma embarcacao na horizontal", () => {
  const s = { length: 4 };
  expect(g.addShip(s, [0, 0], false)).toBe(true);
});

test("O Gameboard posiciona uma embarcacao na vertical", () => {
  const s = { length: 4 };
  expect(g.addShip(s, [0, 0], true)).toBe(true);
});

test("O Gameboard emite erro quando embarcacao excede espaco na horizontal", () => {
  const s = { length: 4 };
  expect(() => g.addShip(s, [8, 0], false)).toThrow();
});

test("O Gameboard emite erro quando embarcacao excede espaco na vertical", () => {
  const s = { length: 4 };
  expect(() => g.addShip(s, [0, 8], true)).toThrow();
});

test("O gameboard emite erro quando ja ha uma embarcacao posicionada", () => {
  const s = { length: 4 };

  const s2 = { length: 3 };
  g.addShip(s, [0, 0], false);
  expect(() => g.addShip(s2, [0, 0], false)).toThrow();
});

test("O gameboard retorna 'hit' quando ataca um navio", () => {
  const s = { length: 4 };
  g.addShip(s, [0, 0], false);
  expect(g.receiveAttack([0, 0])).toBe("hit");
});

test("O gameboard retorna 'miss' quando erra o ataque", () => {
  const s = { length: 4 };
  g.addShip(s, [0, 0], false);
  expect(g.receiveAttack([0, 0])).toBe("miss");
});

test("O gameboard retorna 'already attacked' quando ataca lugar ja atacado", () => {
  const s = { length: 4 };
  g.addShip(s, [0, 0], false);
  expect(g.receiveAttack([0, 0])).toBe("already attacked");
});

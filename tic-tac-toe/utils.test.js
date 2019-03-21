const {
  empty,
  full,
  turn,
  diag,
  reverseDiag,
  wins,
  won,
  valid,
  move
} = require('./utils');

describe('utils test', () => {
  test('an empty grid is produced by empty', () => {
    expect(empty(3)).toEqual([
      ['B', 'B', 'B'],
      ['B', 'B', 'B'],
      ['B', 'B', 'B']
    ]);
  });

  test('full works as expected', () => {
    expect(full([['B', 'B', 'B'], ['B', 'B', 'X'], ['X', 'O', 'B']])).toBe(
      false
    );
    expect(full([['X', 'X', 'O'], ['X', 'O', 'X'], ['X', 'O', 'X']])).toBe(
      true
    );
  });

  test('turn works as expected', () => {
    expect(turn([['X', 'X', 'O'], ['X', 'O', 'X'], ['X', 'O', 'X']])).toBe('O');
    expect(turn([['X', 'O', 'O'], ['O', 'O', 'O'], ['X', 'O', 'X']])).toBe('X');
  });

  test('diag returns the main diagonal of a grid', () => {
    const grid = [['X', 'O', 'O'], ['X', 'O', 'O'], ['X', 'O', 'X']];
    expect(diag(grid)).toEqual(['X', 'O', 'X']);
  });

  test('reverseDiag returns the main diagonal of a grid from top-right to bottom-left', () => {
    const grid = [['X', 'O', 'O'], ['X', 'O', 'O'], ['X', 'O', 'X']];
    expect(reverseDiag(grid)).toEqual(['O', 'O', 'X']);
  });

  test('wins works as expected', () => {
    expect(wins('O', [['X', 'O', 'O'], ['X', 'X', 'O'], ['X', 'O', 'X']])).toBe(
      false
    );

    expect(wins('O', [['X', 'O', 'O'], ['X', 'O', 'O'], ['X', 'O', 'X']])).toBe(
      true
    );
  });

  test('won works as expected', () => {
    expect(won([['X', 'O', 'O'], ['X', 'X', 'O'], ['O', 'O', 'X']])).toBe(true);

    expect(won([['X', 'X', 'O'], ['O', 'O', 'X'], ['X', 'X', 'O']])).toBe(
      false
    );
  });

  test('valid', () => {
    const grid = [['X', 'O', ' '], ['X', 'O', 'O'], ['X', 'O', 'X']];

    expect(valid(grid, 2)).toBe(true);
    expect(valid(grid, 9)).toBe(false);
  });

  test('move', () => {
    const grid = [['X', 'O', ' '], ['X', 'O', 'O'], ['X', 'O', 'X']];
    const updated = [[['X', 'O', 'X'], ['X', 'O', 'O'], ['X', 'O', 'X']]];
    expect(move(grid, 2, 'X')).toEqual(updated);
  });
});

const { empty, full, turn, diag, reverseDiag } = require('./utils');

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

  xtest('wins works as expected', () => {
    expect(
      wins('O', [['X', 'O', 'O'], ['O', 'O', 'O'], ['X', 'O', 'X']]).toBe(true)
    );
  });
});

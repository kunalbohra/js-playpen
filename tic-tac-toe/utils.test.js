const { empty, full, turn } = require('./utils');

describe('utils test', () => {
  test('an empty grid is produced by empty', () => {
    debugger;
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
  });
});

const { beside, showGrid, showRow } = require('./displayUtils');

describe('beside', () => {
  test('beside', () => {
    expect(beside([['he', 'll'], ['k', 'd']])).toEqual(['hek', 'lld']);
  });

  test('showGrid', () => {
    console.log(showGrid([['B', 'O', 'O'], ['O', 'X', 'O'], ['X', 'X', 'X']]));
  });

  test('showRow', () => {
    expect(showRow(['O', 'B', 'X'])).toEqual([
      '   |   |   ',
      ' O |   | X ',
      '   |   |   '
    ]);
  });
});

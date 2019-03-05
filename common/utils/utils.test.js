const { replicate, all, transpose, any } = require('./utils');

describe('util tests', () => {
  test('replicate', () => {
    expect(replicate(3, 1)).toEqual([1, 1, 1]);
  });

  test('all', () => {
    expect(all(v => v > 1)([1, 2, 2, 3, 4])).toBe(false);
    expect(all(v => v >= 1)([1, 2, 2, 3, 4])).toBe(true);
  });

  test('transpose', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });

  test('any', () => {
    expect(any(v => v > 1, [1, 2, 3, 4])).toBe(true);
    expect(any(v => v > 1, [-1, -2, -3, -4])).toBe(false);
  });
});

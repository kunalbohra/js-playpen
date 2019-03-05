const {
  replicate,
  all,
  transpose,
  any,
  interleave,
  zipWith
} = require('./utils');

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

  test('interleave', () => {
    expect(interleave(1, [2, 3, 4])).toEqual([
      [1, 2, 3, 4],
      [2, 1, 3, 4],
      [2, 3, 1, 4],
      [2, 3, 4, 1]
    ]);
  });

  test('zipWith', () => {
    expect(zipWith((x, y) => x + y, [1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    expect(zipWith((x, y) => x * y, [1, 2, 3], [4, 5, 6])).toEqual([4, 10, 18]);
    expect(zipWith((x, y) => x + y, ['h', 'y'], ['e', 'o'])).toEqual([
      'he',
      'yo'
    ]);
  });
});

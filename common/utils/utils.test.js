const {
  replicate,
  all,
  transpose,
  any,
  interleave,
  zipWith,
  unlines,
  last,
  chop,
  splitAt
} = require('./utils');

describe('util tests', () => {
  test('last', () => {
    expect(last([1, 2, 3, 4, 5])).toBe(5);
  });
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
    expect(interleave(1, [2, 3, 4])).toEqual([2, 1, 3, 1, 4]);
    expect(
      interleave(
        ['|', '|', '|'],
        [['   ', ' O ', '   '], ['   ', '   ', '   '], ['   ', ' X ', '   ']]
      )
    ).toEqual([
      ['   ', ' O ', '   '],
      ['|', '|', '|'],
      ['   ', '   ', '   '],
      ['|', '|', '|'],
      ['   ', ' X ', '   ']
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

  xtest('unlines', () => {
    expect(unlines(['h', 'k'])).toEqual('h\nk\n');
  });

  test('chop', () => {
    const list = [1, 2, 3, 4, 5, 6, 7];
    expect(chop(3, list)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    expect(chop(2, list)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
    expect(chop(0, list)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(chop(1, list)).toEqual([[1], [2], [3], [4], [5], [6], [7]]);
  });

  test('splitAt', () => {
    expect(splitAt(2, [1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
    expect(splitAt(2, [1, 2])).toEqual([[1, 2], []]);
    expect(splitAt(2, [1])).toEqual([[1], []]);
  });
});

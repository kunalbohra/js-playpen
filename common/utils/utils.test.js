const { replicate, all } = require('./utils');

describe('util tests', () => {
  test('replicate', () => {
    expect(replicate(3, 1)).toEqual([1, 1, 1]);
  });

  test('all', () => {
    expect(all(v => v > 1)([1, 2, 2, 3, 4])).toBe(false);
    expect(all(v => v >= 1)([1, 2, 2, 3, 4])).toBe(true);
  });
});

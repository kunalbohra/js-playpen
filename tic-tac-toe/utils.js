const empty = compose(
  replicate(size),
  replicate(size)
);
const flat = arr => arr.flat();
const full = grid => all(v => v !== 'B')(grid.flat());

module.exports = {
  empty,
  flat,
  full
};

const {
  replicate,
  all,
  map,
  reverse,
  compose,
  any,
  transpose
} = require('../common/utils/utils');

const empty = size => replicate(size)(replicate(size, 'B'));
const full = grid => all(v => v !== 'B')(grid.flat());

//turn :: Grid -> Player
const turn = grid => {
  const flattendGrid = grid.flat();

  let os = flattendGrid.filter(v => v === 'O').length;
  let xs = flattendGrid.filter(v => v === 'X').length;

  return os <= xs ? 'O' : 'X';
};

/**
 * diag :: Grid -> [Player]
 * returns the main diagonal of a grid
 */
const diag = grid => grid.reduce((acc, _, i, arr) => acc.concat(arr[i][i]), []);

const reverseDiag = compose(
  diag,
  map(reverse)
);

//wins :: Player -> Grid -> Bool
const wins = (player, grid) => {
  const line = all(v => v === player);
  const rows = [...grid];
  const cols = transpose(grid);
  const diags = diag(grid);
  const reverseDiags = reverseDiag(grid);

  return any(line, [...rows, ...cols, diags, reverseDiags]);
};

//won :: Grid -> Bool
const won = grid => wins('O', grid) || wins('X', grid);

module.exports = {
  empty,
  full,
  turn,
  diag,
  wins,
  reverseDiag,
  won
};

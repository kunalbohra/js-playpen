const { replicate, all } = require('../common/utils/utils');

const empty = size => replicate(size)(replicate(size, 'B'));
const full = grid => all(v => v !== 'B')(grid.flat());

//turn :: Grid -> Player
const turn = grid => {
  const flattendGrid = grid.flat();

  let os = flattendGrid.filter(v => v === 'O');
  let xs = flattendGrid.filter(v => v === 'X');

  return os <= xs ? 'O' : 'X';
};

// diag :: Grid -> [Player]
//const diag = grid =>
// wins :: Player -> Grid -> Bool
/* const wins = (player, grid) => {

} */
module.exports = {
  empty,
  full,
  turn
};

const {
  interleave,
  replicate,
  compose,
  zipWith,
  concatStr,
  unlines,
  flat,
  map,
  trace
} = require('../../common/utils/utils');

//showPlayer :: Player -> [String]
const showPlayer = player => {
  switch (player) {
    case 'O':
      return ['   ', ' O ', '   '];
    case 'B':
      return ['   ', '   ', '   '];
    case 'X':
      return ['   ', ' X ', '   '];
  }
};

const beside = list => list.reduce(zipWith(concatStr));

//showRow :: [Player] -> [String]
const showRow = compose(
  beside,
  interleave(replicate(3, '|')),
  map(showPlayer)
);

const printGrid = compose(
  trace('post unlines'),
  unlines,
  trace('post flat'),
  flat,
  interleave([replicate(3 * 4 - 1, '-')]),
  map(showRow)
);

//showGrid :: Grid -> IO ()
const showGrid = grid => {
  const display = printGrid(grid);
  console.log(display);
};

module.exports = {
  showRow,
  beside,
  showPlayer,
  showGrid
};

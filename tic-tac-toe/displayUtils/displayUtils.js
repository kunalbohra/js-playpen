const { interleave, replicate, compose } = require('../common/utils/utils');

//showPlayer :: Player -> [String]
export const showPlayer = player => {
  switch (player) {
    case 'O':
      return ['   ', ' O ', '   '];
    case 'B':
      return ['   ', '   ', '   '];
    case 'X':
      return ['   ', ' X ', '   '];
  }
};

const bar = replicate(3, ' | ');
const beside = () => {};

//showRow :: [Player] -> [String]
export const showRow = compose(
  beside,
  interleave(bar),
  map(showPlayer)
);

//head :: [a] -> a
const head = ([first]) => first;

//tail :: [a] -> a
const tail = ([_, ...rest]) => rest;

const last = list => list[list.length - 1];

const take = (n, list) => list.slice(0, n);
const drop = (n, list) => list.slice(n);

//curry :: ((a, b) -> c) -> a -> b -> c
const curry = fn => {
  const arity = fn.length;

  return function curried(...remainingArgs) {
    if (remainingArgs.length >= arity) return fn.apply(null, remainingArgs);
    return (...restArgs) =>
      curried.apply(null, [...remainingArgs, ...restArgs]);
  };
};

const compose = (...fns) => arg => fns.reduceRight((acc, fn) => fn(acc), arg);

//replicate :: Int -> a -> [a]
const replicate = curry((times, value) =>
  Array.from({ length: times }, (v, i) => value)
);

//all :: Foldable t => (a -> Bool) -> t a -> Bool
const all = curry((predicate, list) => list.every(predicate));

//any :: Foldable t => (a -> Bool) -> t a -> Bool
const any = curry((predicate, list) => {
  // console.log('any', list);
  return list.some(predicate);
});

/**
 * transpose :: [[a]] -> [[a]]
 * @param {Array} grid - the game grid
 * @returns {Array}
* @description Transposes the rows and columns of a 2D list. When passed a list of n lists of length x, 
returns a list of x lists of length n.
*/
const transpose = grid => {
  if (head(grid).length < 1) return [];

  return [grid.map(head)].concat(
    transpose([...[tail(head(grid))]].concat(tail(grid.map(tail))))
  );
};

const reverse = list => list.reverse();

const map = curry((f, list) => list.map(f));

const flat = list => list.flat();

/**
 * interleave :: a -> [a] -> [a]
 * @param {any} - value that will be interleaved
 * @param {Array} - list that will receive the element
 * @returns {Array}
 * @description interleave a value between each element in a list
 *  */
const interleave = curry((x, [first, ...rest]) =>
  !first
    ? []
    : rest.length < 1
    ? [first]
    : [first].concat([x]).concat(interleave(x, rest))
);

//zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = curry((fn, [first, ...rest], [first2, ...rest2]) =>
  !first || !first2 ? [] : [fn(first, first2)].concat(zipWith(fn, rest, rest2))
);

//concat :: [a] -> [a] -> [a]
const concatStr = curry((str1, str2) => str1.concat(str2));

//unlines :: [a] -> a
const unlines = list => list.join('\n');

/**
 * chop :: Int -> [a] -> [[a]]
 * @param {Number} n - the length of a given maximal chunk
 * @param {Array} list - the list to be chopped
 * @returns {Array}
 *  */
const chop = curry((n, list) =>
  n === 0
    ? list
    : list.length < 1
    ? []
    : [take(n, list)].concat(chop(n, drop(n, list)))
);

/**
 * spliAt :: Int -> [a] -> ([a], [a])
 * @param {Number} n - the index to split the list
 * @param {Array} list - the list to be split
 * @returns {Array}
 * @description splits the list into 2 parts at a given index n
 *  */
const splitAt = curry((n, list) => [take(n, list)].concat([drop(n, list)]));

/**
 * @param {string} tag - descriptive text that the value being logged should be associated with
 * @param {any} val - actual value being logged
 * @description a curried function that can be a part of a pipe or compose operation to assist with console debugging
 */
const trace = curry((tag, val) => {
  console.log(`tag ${tag} val ${val}`);
  return val;
});

module.exports = {
  curry,
  compose,
  replicate,
  all,
  transpose,
  reverse,
  map,
  any,
  interleave,
  zipWith,
  concatStr,
  unlines,
  flat,
  trace,
  last,
  tail,
  chop,
  splitAt
};

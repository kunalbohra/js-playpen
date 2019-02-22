//head :: [a] -> a
const head = ([first]) => first;

//tail :: [a] -> a
const tail = ([_, ...rest]) => rest;

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

/**
 * transpose :: [[a]] -> [[a]]
* Transposes the rows and columns of a 2D list. When passed a list of n lists of length x, 
returns a list of x lists of length n.
*/
const transpose = grid => {
  if (head(grid).length < 1) return [];

  return [grid.map(head)].concat(
    transpose([...[tail(head(grid))]].concat(tail(grid.map(tail))))
  );
};

const reverse = arr => arr.reverse();

const map = curry((f, arr) => arr.map(f));

module.exports = {
  curry,
  compose,
  replicate,
  all,
  transpose,
  reverse,
  map
};

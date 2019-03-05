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

//any :: Foldable t => (a -> Bool) -> t a -> Bool
const any = curry((predicate, list) => {
  console.log('any', list);
  return list.some(predicate);
});

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

const reverse = list => list.reverse();

const map = curry((f, list) => list.map(f));

//interleave :: a -> [a] -> [[a]]
const interleave = (x, [first, ...rest]) =>
  !first
    ? [[x]]
    : [[x, first, ...rest]].concat(
        interleave(x, rest).map(y => [first].concat(y))
      );

//zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (fn, [first, ...rest], [first2, ...rest2]) =>
  !first || !first2 ? [] : [fn(first, first2)].concat(zipWith(fn, rest, rest2));

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
  zipWith
};

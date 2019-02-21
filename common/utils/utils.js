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

module.exports = {
  curry,
  compose,
  replicate,
  all
};

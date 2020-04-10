'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

const length = Number(process.argv[2] || 10);
// const num = length;
[...Array(length).keys()].map((i) => console.log(i + ' = ', fib(i)));

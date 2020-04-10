'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

const length = process.argv[2] || 10;
let num = Number(length);
[...Array(num).keys()].map((i) => console.log(i + ' = ', fib(i)));

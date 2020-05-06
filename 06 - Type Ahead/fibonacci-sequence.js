function fibonacci(n) {
  // Good luck!
  let fib = [];

  if (n === 1) {
    return fib = [0];
  } else if (n === 2) {
    return fib = [0, 1];
  } else {
    fib = [0, 1];
    for(var i=2; i < n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    };
  };
return fib;
};


console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(10));

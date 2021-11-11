function isTruthy(x) {
  debugger;
  return Boolean(x);
}

function test() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log(i); // Uncaught ReferenceError: i is not defined
}

let a = [1, 2, 3];
a = a.map((item) => item + 1);
console.log(a);

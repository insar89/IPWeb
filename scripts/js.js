for (let i = 0; i <= 4; i++) {
  console.log(++i);
}

const factorial = (el, res = 0) => {
  if (el === 1) return res;

  return factorial(el - 1, res + el);
};

console.log(factorial(3));

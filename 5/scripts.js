sumOfSquares(25);

function sumOfSquares(number) {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    let multiplyNumbers = i * i;
    numbers.push(multiplyNumbers);
  }
  let result = numbers.reduce((a, c) => a + c, 0);

  return console.log(result)
}

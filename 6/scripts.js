fibonacciSequence([0, 1], 20);

function fibonacciSequence(startSequence, length) {
  if (length < 0) return;

  let result = [];

  if ((length < startSequence.length) | (length == startSequence.length)) {
    for (let i = 1; i <= length; i++) {
      result.push(startSequence[i - 1]);
    }
  } else {
    result = [...startSequence];
    for (let i = 1; i <= length - startSequence.length; i++) {
      const first = result[i - 1];
      const second = result[i];
      const sum = first + second;
      result.push(sum);
    }
  }

  return console.log(result);
}

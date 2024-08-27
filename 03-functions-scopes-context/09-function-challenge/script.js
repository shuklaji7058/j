//Challenge - 1
function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius;
}

console.log(getCelsius(32));

// Challnege - 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}
console.log(minMax([2, 4, 5, 6, 7, 8, 9]));

//Challenge-3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);

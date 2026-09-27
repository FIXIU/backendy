function calculateAverage(numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum / numbers.length;
}

let numbers = [1, 7, 3, 8];
console.log("średnia: " + calculateAverage(numbers));

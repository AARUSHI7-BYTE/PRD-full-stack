export function generateDrawNumbers() {
  let numbers = new Set();

  while (numbers.size < 5) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  return Array.from(numbers);
}

export function countMatches(scores, drawNumbers) {
  const values = scores.map(s => s.value);
  return values.filter(v => drawNumbers.includes(v)).length;
}
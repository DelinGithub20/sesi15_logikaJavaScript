function isArithmeticProgression(number) {
  if (number.length < 2) {
    return false;
  }
  let difference = number[1] - number[0];

  for (let i = 2; i < number.length; i++) {
    if (number[i] - number[i - 1] !== difference) {
      return false;
    }
  }
  return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5]));
console.log(isArithmeticProgression([2, 4, 6, 12]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7]));

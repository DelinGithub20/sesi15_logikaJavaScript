function compareNumbers(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) {
    return -1;
  } else if (firstNumber > secondNumber) {
    return false;
  } else {
    return true;
  }
}

console.log(compareNumbers(5, 8));
console.log(compareNumbers(5, 3));
console.log(compareNumbers(4, 4));
console.log(compareNumbers(3, 3));
console.log(compareNumbers(17, 2));

function gcd(firstNumber, secondNumber) {
  let fpb = 1;
  let angkaTerkecil = Math.min(firstNumber, secondNumber);

  for (let i = 1; i <= angkaTerkecil; i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      fpb = i;
    }
  }

  return fpb;
}

console.log(gcd(12, 16));
console.log(gcd(50, 40));
console.log(gcd(22, 99));
console.log(gcd(24, 36));
console.log(gcd(17, 23));

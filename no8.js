function listPrima(angkaPertama, angkaTerkecil) {
  let prima = [];

  for (let number = angkaPertama; number <= angkaTerkecil; number++) {
    let isPrima = true;

    if (number <= 1) {
      isPrima = false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrima = false;
          break;
        }
      }
    }

    if (isPrima) {
      prima.push(number);
    }
  }

  return prima;
}

console.log(listPrima(1, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));

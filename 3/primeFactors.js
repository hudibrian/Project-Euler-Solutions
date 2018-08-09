/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

let primeFactors = [];

findLargestPrime(600851475143);

function findLargestPrime(num) {
  while (num % 2 === 0) {
    primeFactors.push(2);
    num = num / 2;
  }

  var sqrtNum = Math.sqrt(num);
  for (var x = 3; x <= sqrtNum; x++) {
    while (num % x === 0) {
      primeFactors.push(x);
      num = num / x;
    }
  }

  if (num > 2) {
    primeFactors.push(num);
  }

  console.log(Math.max(...primeFactors));
}

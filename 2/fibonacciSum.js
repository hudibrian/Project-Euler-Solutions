/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

var a = 0,
  b = 1,
  temp = 0,
  sum = 0;

while (a + b < 4000000) {
  temp = a + b;
  a = b;
  b = temp;

  if (temp % 2 === 0) {
    sum += temp;
  }
}

console.log(sum);

let n = 13, isPrime = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) { isPrime = false; break; }
}
console.log(n, "is Prime?", isPrime);

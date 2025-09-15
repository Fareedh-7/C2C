let a = 36, b = 60;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("GCD:", a);

let x = 12, y = 18;
let gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
let lcm = (x * y) / gcd(x, y);
console.log("LCM:", lcm);

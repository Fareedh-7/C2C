let p = 1000, r = 5, t = 2;
let ci = p * (Math.pow((1 + r / 100), t)) - p;
console.log("Compound Interest:", ci.toFixed(2));

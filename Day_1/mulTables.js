// printing all multiplication table from 1 to 10

function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    let product = `${n} x ${i} = ${n * i}`;
    console.log(product);
  }
}

for(let i=1;i<=10;i++){
  printTable(i);
  console.log(" ");
}

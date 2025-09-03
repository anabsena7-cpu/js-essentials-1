if (true) {
  var x = 10;
  let y = 20;
  const z = 30;

  console.log("Dentro do bloco:");
  console.log("x =", x); // 10
  console.log("y =", y); // 20
  console.log("z =", z); // 30
}

console.log("Fora do bloco:");
console.log("x =", x); // 10 — `var` ignora o escopo de bloco
console.log("y =", y); // Erro: y is not defined, pq está dentro do bloco
console.log("z =", z); //Erro: z is not defined, pq está dentro do bloco

function soma(a, b) {
  console.log("Valores recebidos:", a, b);
  const resultado = a + b;
  console.log("Resultado:", resultado);
  return resultado;
}

console.log(soma(2, undefined)); // → NaN
// Comentário: undefined não é número; a soma resulta em NaN, sem lançar exceção.


function soma(a, b) {
  return a + b;
}
console.log(soma(5, "dez")); // → "5dez" (concatenou, sem exceção)
console.log(soma(5, undefined)); // → NaN (resultado errado, mas sem lançar erro)

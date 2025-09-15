console.log(`"123": ${Number("123")}`);
console.log(`"123.45": ${Number("123.45")}`);
console.log(`"": ${Number("")}`);
console.log(`"abc": ${Number("abc")}`);
console.log(`"0": ${Number("0")}`);

let strInt = "123.45";
let strFloat = "123.45";

console.log(`parseInt("${strInt}"): ${parseInt(strInt)}`);
console.log(`parseFloat("${strFloat}"): ${parseFloat(strFloat)}`);
console.log(`"Diferença: parseInt retorna um número inteiro, ignorando o que vem depois do ponto decimal. parseFloat retorna um número com casas decimais."`);s
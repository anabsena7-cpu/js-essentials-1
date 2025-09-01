let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);

//x++ = 6, porém como está na frente na hr da operação valerá 5
//pesquisei e qnd o ++ ou -- vem depois da variavel quer dizer q o valor da variavel vai mudar só depois da operaçao, ou seja, na hora da operação vai valer o valor antigo
//--y = 9
//neste caso aqui ele vai primeiro fazer o incremento, ou o decremento, antes de prosseguir com a conta
//5*9 = 45

//10%3 = 1
//2+1 = 3

//45/3 = 
console.log(z);
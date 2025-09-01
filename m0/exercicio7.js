console.log(0 || "Hello"); //esse aqui procura quais dos dois valores é verdadeiro, se nenhum é verdadeiro ele mostra o último valor
console.log("" && "World"); //esse é o contrário do de cima, ele procura o valor falso e se não tem nenhum falso ele mostra o último valor
console.log(null ?? "Default Value");//esse exibe o lado direito apenas se o lado esquerdo é null ou undefined
console.log(undefined ?? 42);//igual o de cima, mas nesse esta undefined e o de cima é null
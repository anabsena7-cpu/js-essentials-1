var mensagemglobal = "oie"
function exibirMensagem(){
    var mensagemlocal = "tudo bem?"
    console.log("dentro da função:");
    console.log(mensagemglobal);
    console.log(mensagemlocal);
}

exibirMensagem();
console.log("fora da função:");
console.log(mensagemglobal);
console.log(mensagemlocal)//não vai funcionar pq esta dentro da função a criação da variavel

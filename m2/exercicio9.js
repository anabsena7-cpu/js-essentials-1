function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // vai sair o 10, pq o var é universal e foi declarado fora do bloco
        console.log(b); // vai sair 20, pq o let foi declarado dentro do mesmo bloco
    }
    console.log(a); // vai continuar saindo o 10
    console.log(b); // vai ir como undefined, pq o b foi definido dentro do bloco e com let
}
testeEscopo();

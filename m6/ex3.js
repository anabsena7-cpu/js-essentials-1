// Sempre validar dados do usuário — nunca confiar totalmente na entrada.
function validarIdade(idade) {
  if (typeof idade !== "number") {
    console.log("Erro: número esperado, string recebida");
    return false;
  }
  if (idade < 0 || idade > 120) {
    console.log("Erro: idade fora do intervalo");
    return false;
  }
  return true;
}


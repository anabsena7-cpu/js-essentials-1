function testeDebug(x) {
  const y = x * 2;
  debugger; // pausa aqui se DevTools estiver aberto
  return y;
}
testeDebug(5);

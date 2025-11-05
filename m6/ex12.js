function externo(n) {
  return interno(n) + 1;
}
function interno(m) {
  return m * 3;
}
externo(4);

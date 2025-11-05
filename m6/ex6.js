function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erro) {
    if (erro instanceof SyntaxError) {
      return null;
    } else {
      throw erro; // relança erro inesperado
    }
  }
}

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

// Testes
try {
  console.log(checkAge(30));  // ✅ Idade válida
  console.log(checkAge(-5));  // 🚫 Lança erro
} catch (err) {
  console.error(err.name + ":", err.message);
}

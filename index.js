const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const errorMessage = document.getElementById("error-message");

// Mostra ou oculta a senha
togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

// Valida os dados ao clicar no botão de login
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    errorMessage.textContent = "Preencha todos os campos.";
    return;
  }

  if (email.value === "teste@email.com" && password.value === "123456") {
    alert("Login bem-sucedido!");
    errorMessage.textContent = "";
    // redirecionar, salvar token, etc
  } else {
    errorMessage.textContent = "Email ou senha incorretos.";
  }
});

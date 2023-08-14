import saludar from "./saludador.js";
const botForm = document.getElementById("bot-form");
const saludoDiv = document.getElementById("saludo-div");
const generoDiv = document.getElementById("genero-div");
const generoButton = document.getElementById("genero-button");

botForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const saludo = saludar(nameInput);
  saludoDiv.innerHTML = saludo;
  generoDiv.style.display = "block";
});

generoButton.addEventListener("click", () => {
  const selectedGenero = document.querySelector('input[name="genero"]:checked');
  if (selectedGenero) {
    const genero = selectedGenero.value;
    const name = document.getElementById("name").value;
    let generoSaludo = "";

    if (genero === "Masculino") {
      generoSaludo = "bienvenido";
    } else if (genero === "Femenino") {
      generoSaludo = "bienvenida";
    } else {
      generoSaludo = "saludos";
    }

    const mensajeFinal = generoSaludo + ", " + name;
    saludoDiv.innerHTML = mensajeFinal;
    generoDiv.style.display = "none";
  }
});
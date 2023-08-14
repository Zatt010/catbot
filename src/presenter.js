import saludar from "./saludador.js";
const botForm = document.getElementById("bot-form");
const saludoDiv = document.getElementById("saludo-div");
const generoDiv = document.getElementById("genero-div");
const edadDiv = document.getElementById("edad-div");  
const generoButton = document.getElementById("genero-button");
const edadButton = document.getElementById("edad-button");  
let genero = "";  // Definimos la variable genero en un nivel superior

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
    genero = selectedGenero.value;  // Asignamos el valor de genero
    generoDiv.style.display = "none";
    edadDiv.style.display = "block";
  }
});

edadButton.addEventListener("click", () => {
  const edadInput = parseInt(document.getElementById("edad").value);
  const name = document.getElementById("name").value;
  let generoSaludo = "";

  if (genero === "Masculino") {
    if (edadInput > 30) {
      generoSaludo = "bienvenido sr";
    } else {
      generoSaludo = "bienvenido";
    }
  } else if (genero === "Femenino") {
    if (edadInput > 30) {
      generoSaludo = "bienvenida sra";
    } else {
      generoSaludo = "bienvenida";
    }
  } else {
    generoSaludo = "saludos";
  }

  const mensajeFinal = generoSaludo + ", " + name;
  saludoDiv.innerHTML = mensajeFinal;
  edadDiv.style.display = "none";
});

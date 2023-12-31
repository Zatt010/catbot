import saludar from "./saludador.js";
const botForm = document.getElementById("bot-form");
const idiomaDiv = document.getElementById("idioma-div");
const saludoDiv = document.getElementById("saludo-div");
const generoDiv = document.getElementById("genero-div");
const edadDiv = document.getElementById("edad-div");  
const generoButton = document.getElementById("genero-button");
const edadButton = document.getElementById("edad-button");  
const idiomaButton = document.getElementById("idioma-button");
const idiomaSelect = document.getElementById("idioma");
let genero = "";

botForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const saludo = saludar(nameInput);
  saludoDiv.innerHTML = saludo;
  idiomaDiv.style.display = "block";
});

idiomaButton.addEventListener("click", () => {
  idiomaDiv.style.display = "none";
  generoDiv.style.display = "block";
});

generoButton.addEventListener("click", () => {
  const selectedGenero = document.querySelector('input[name="genero"]:checked');
  if (selectedGenero) {
    genero = selectedGenero.value;
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

  const horaActual = new Date().getHours(); // Obtiene la hora actual del sistema
  let saludoHora = "";

  if (horaActual >= 0 && horaActual < 12) {
    saludoHora = "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }

  const selectedIdioma = idiomaSelect.value;

  if (selectedIdioma === "es") {
    mostrarSaludoCompleto(saludoHora, generoSaludo, name);
  } else if (selectedIdioma === "en") {
    mostrarSaludoIngles();
  }
});

function mostrarSaludoCompleto(saludoHora, generoSaludo, name) {
  const mensajeFinal = `${saludoHora} y ${generoSaludo} ${name}`;
  saludoDiv.innerHTML = mensajeFinal;
  edadDiv.style.display = "none";
}

function mostrarSaludoIngles() {
  saludoDiv.innerHTML = "Hello"; // Muestra "Hello" en lugar del saludo completo
  edadDiv.style.display = "none";
}

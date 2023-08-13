import saludar from "./saludador";

const first = document.querySelector("#name");
const form = document.querySelector("#bot-form"); // Corrected ID
const div = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar(first) + "</p>";
});

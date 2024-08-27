// ANIMACAO DE ESCREVER NA INTRODUCAO
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 70 * i);
  });
}
const titulo = document.querySelector("h1");
typeWriter(titulo);

// TODOS OS LINKS ABREM EM OUTRA ABA
let links = document.querySelectorAll(".link");
links.forEach(function (link) {
  link.setAttribute("target", "_blank");
});

// FOOTER ATUALIZA ANO AUTOMATICO
document.addEventListener("DOMContentLoaded", function () {
  let direitoAutoral = document.createElement("p");
  let agora = new Date();
  let anoInicio = 2023;
  let ano = agora.getFullYear();

  direitoAutoral.classList.add("sm-regular", "col-3");
  direitoAutoral.textContent = `Joaobit © ${ano}`;
  let footer = document.querySelector(".footer-bg");
  footer.appendChild(direitoAutoral);
});

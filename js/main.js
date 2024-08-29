// ANIMACAO DE ESCREVER NA INTRODUCAO
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 70 * i);
  });
}
const titulo = document.querySelector(".typeWriter");
typeWriter(titulo);

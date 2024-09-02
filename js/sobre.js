// Função para adicionar o conteúdo à classe "sobre-bg"
function addContentToSobreBg() {
  // Encontra o elemento com a classe "sobre-bg"
  const sobreBg = document.querySelector(".sobre-bg");

  // Verifica se o elemento foi encontrado
  if (sobreBg) {
    // Cria o elemento div com a classe "sobre-container"
    const container = document.createElement("div");
    container.className = "sobre-container";

    // Cria o elemento img
    const img = document.createElement("img");
    img.src = "./assets/img/BANNER-SOBRE1.png";
    img.alt = "banner imagem";

    // Cria o elemento div com a classe "sobre-conteudo"
    const conteudo = document.createElement("div");
    conteudo.className = "sobre-conteudo";

    // Cria o elemento div com a classe "sobre-card"
    const card = document.createElement("div");
    card.className = "sobre-card";

    // Cria e adiciona o título "SOBRE MIM"
    const h1 = document.createElement("h1");
    h1.className = "poppins-sb2 col-3 sobre-title";
    h1.textContent = "SOBRE MIM";

    // Cria e adiciona o parágrafo sobre a experiência
    const p1 = document.createElement("p");
    p1.className = "sm-regular2 first col-4";
    p1.style.marginBottom = "20px";
    p1.innerHTML =
      'Um dia pensei: "É difícil fazer um site?" e assim surgiu minha curiosidade mas so fui estudar de fato em 2023. Antes disso fui mecânico aeronáutico, T.I e motion design, até fazer meu primeiro trabalho / projeto Frontend com um amigo: <strong>animabook.</strong> <br>';

    // Cria e adiciona o título "FORMAÇÕES"
    const h2 = document.createElement("h2");
    h2.className = "poppins-sb2 col-3 sobre-title";
    h2.textContent = "FORMAÇÕES";

    // Cria e adiciona os parágrafos sobre as formações
    const formations = [
      "Ciência da Computação - Estacio (Cursando)",
      "HTML, CSS, JavaScript (105h) – Origamid",
      "Banco de Dados mySQL (08h) - Udemy",
      "Cybersecurity Essentials (30h) – CISCO",
      "Programação em Python (64h) – Udemy",
    ];

    formations.forEach((text) => {
      const p = document.createElement("p");
      p.className = "sm-regular2 col-4";
      p.textContent = text;
      card.appendChild(p);
    });

    // Adiciona os títulos e parágrafos ao card
    card.prepend(h2); // Adiciona o título "FORMAÇÕES" antes dos parágrafos de formação
    card.prepend(p1); // Adiciona o parágrafo sobre a experiência antes do título "FORMAÇÕES"
    card.prepend(h1); // Adiciona o título "SOBRE MIM" antes do parágrafo de experiência

    // Adiciona o card ao conteudo
    conteudo.appendChild(card);

    // Adiciona a imagem e o conteúdo ao container
    container.appendChild(img);
    container.appendChild(conteudo);

    // Adiciona o container ao elemento com a classe "sobre-bg"
    sobreBg.appendChild(container);
  } else {
    console.error('Elemento com a classe "sobre-bg" não encontrado.');
  }
}

// Chama a função para adicionar o conteúdo
addContentToSobreBg();

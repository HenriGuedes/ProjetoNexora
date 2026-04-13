// Pega todos os elementos com animação
const elementos = document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right",
);

// Função que verifica se o elemento está visível na tela
function estaNaTela(elemento) {
  const posicao = elemento.getBoundingClientRect();

  // Verifica se o topo do elemento já apareceu na tela
  return posicao.top < window.innerHeight;
}

// Função que roda quando você rola a página
function mostrarElementos() {
  elementos.forEach(function (el) {
    if (estaNaTela(el)) {
      el.classList.add("visible");
    }
  });
}

// Executa quando a página carrega
window.addEventListener("load", mostrarElementos);

// Executa toda vez que o usuário rola a página
window.addEventListener("scroll", mostrarElementos);

// Espera o HTML da página carregar completamente antes de rodar o JavaScript
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("leadForm");
  var sucesso = document.getElementById("formSuccess");
  var loader = document.querySelector(".btn__loader");
  var text = document.querySelector(".btn__text");
  var textArea = document.getElementById("mensagem");
  var contador = document.getElementById("caracter");

  // função de contador de caracteres
  form.addEventListener("input", function () {
    let caracter = textArea.value.length;
    contador.innerText = caracter;
    if (caracter >= 1500) {
      alert("litmite de 1500 caracter");
    }
  });
  form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // não faz a pagina recarregar quando enviar o form
    const dados = new FormData(form); //isso pega TODOS os inputs automaticamente
    loader.style.display = "block";
    // Envia os dados para o PHP sem recarregar a página
    fetch("processa.php", {
      method: "POST",
      body: dados,
    })
      // Quando o PHP terminar de processar (salvar no banco, etc) ,ele executa o loading e mensagem de bem sucedido
      .then(function () {
        // faz mostar a animação de loading com tempo de 2 s
        setTimeout(() => {
          loader.style.display = "none";
          sucesso.hidden = false;
        }, 2000);
      });
  });
});

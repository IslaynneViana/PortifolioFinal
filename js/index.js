let mensagem = "Seja Bem-Vindo ao meu";
let destaque = "Portfolio ";
let atraso = 150;

let elementoMensagem = document.querySelector(".apresentacao__inicio");
let elementoDestaque = document.querySelector(".apresentacao__inicio__destaque");

let contadorDeLetrasMensagem = 0;
let contadorDeLetrasDestaque = 0;

elementoMensagem.classList.add("piscar");

function escreverMensagem() {
  if (contadorDeLetrasMensagem < mensagem.length) {
    elementoMensagem.textContent += mensagem.charAt(contadorDeLetrasMensagem);
    contadorDeLetrasMensagem++;
    setTimeout(escreverMensagem, atraso);
  } else {
    elementoMensagem.classList.remove("piscar");
    elementoDestaque.classList.add("piscar");
    escreverDestaque();
  }
}

function escreverDestaque() {
  if (contadorDeLetrasDestaque < destaque.length) {
    elementoDestaque.textContent += destaque.charAt(
      contadorDeLetrasDestaque
    );
    contadorDeLetrasDestaque++;
    setTimeout(escreverDestaque, atraso);
  }
}
escreverMensagem();
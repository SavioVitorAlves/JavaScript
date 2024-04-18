function scrollText() {
    const mensagem = document.getElementById("mensagem").value;
    const primeiroCaractere = mensagem.charAt(0);
    const novaMensagem = mensagem.substring(1) + primeiroCaractere;
    document.getElementById("mensagem").value = novaMensagem;
  }
let scrollInterval; // Variável para armazenar o intervalo

function iniciarRolagem(velocidade) {
  clearInterval(scrollInterval); // Limpa o intervalo anterior
  scrollInterval = setInterval(scrollToText, velocidade);
}

function pararRolagem() {
  clearInterval(scrollInterval);
}

// Exemplo de uso com controle deslizante
const sliderVelocidade = document.getElementById("sliderVelocidade");
sliderVelocidade.addEventListener("input", function() {
  const velocidade = parseInt(this.value);
  iniciarRolagem(velocidade);
});

// Inicia a rolagem com velocidade inicial de 150ms
iniciarRolagem(150);

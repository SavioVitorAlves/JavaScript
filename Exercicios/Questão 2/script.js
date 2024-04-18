function scrollText() {
    const mensagem = document.getElementById("mensagem").value;
    const primeiroCaractere = mensagem.charAt(0);
    const novaMensagem = mensagem.substring(1) + primeiroCaractere;
    document.getElementById("mensagem").value = novaMensagem;
  }

  setInterval(scrollToText, 50); // Atualizar o campo de texto a cada 50 m/s

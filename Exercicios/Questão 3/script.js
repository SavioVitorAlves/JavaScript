function invertText() {
    const areaDeTexto = document.getElementById("areaDeTexto");
    const palavras = areaDeTexto.value.split(" ");
    palavras.reverse();
    areaDeTexto.value = palavras.join(" ");
  }

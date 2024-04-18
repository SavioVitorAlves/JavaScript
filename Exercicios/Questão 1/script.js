combinacao()
function fatorial(numero){
  let resultado = numero;
  for( let controle = 1 ; controle < numero ; controle++ ){
    // resultado *= controle;
       resultado = resultado * controle;
  }
  return resultado;
}

function combinacao(){
  let numero = Number(document.getElementById("numero").innerHTML);
  let amostra = Number(document.getElementById("amostra").innerHTML);
  let resultado = fatorial(numero) / (fatorial(amostra) * fatorial(numero - amostra))
  document.getElementById("resultado").innerHTML = resultado;
}

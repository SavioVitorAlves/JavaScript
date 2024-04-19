const display = document.getElementById('display')
const displayText = document.getElementById('display').textContent
const igual = document.getElementById('igual')
const apagar = document.getElementById('apagar')
const maismenos = document.getElementById('maismenos')
const limparCalculo = document.getElementById('limparCalculo')
const limparTudo = document.getElementById('limparTudo')
const porc = document.getElementById('porc')
const virg = document.getElementById('virg')
const divisaoUm = document.getElementById('divisaoUm')
const potencia = document.getElementById('potencia')
const raiz = document.getElementById('raiz')
const cos = document.getElementById('cos')
const sin = document.getElementById('sin')
const tng = document.getElementById('tng')
const log = document.getElementById('log')
const pi = document.getElementById('pi')
const sinh = document.getElementById('sinh')
const cosh = document.getElementById('cosh')
const tngh = document.getElementById('tngh')

const nums = document.querySelectorAll("[id*=num]")
const operadores = document.querySelectorAll("[id*=sinal]")

let primeiro = true
let operador
let numeroAnterior
let numeroAtual
let apagarIgual

const ajustaPontoVirgula = () => display.textContent = display.textContent.replace('.', ',')

const inserirDisplay = text => {

  if (primeiro) {
    display.textContent = text
    primeiro = false
  } else {
    display.textContent += text
  }

  display.textContent = display.textContent.substring(0, 17)
  numeroAtual = display.textContent
  apagarIgual = true
}

const inserir = e => inserirDisplay(e.target.textContent)

nums.forEach(e => e.addEventListener('click', inserir))


const inserirOperador = e => {
  primeiro = true
  operador = e.target.textContent
  if (operador == 'x') {
    operador = '*'
  } else if (operador == '÷') {
    operador = '/'
  }
  numeroAnterior = display.textContent
}

operadores.forEach(e => e.addEventListener('click', inserirOperador))

const calcular = () => {

  if (numeroAnterior && operador) {
    let result = numeroAnterior + operador

    if(numeroAtual) {
      result += numeroAtual
    } else {
      result += numeroAnterior
    }

    display.textContent = eval(result.replace(',', '.'))
    ajustaPontoVirgula()

    if (display.textContent == 'NaN') {
      display.textContent = '0'
    }

    numeroAnterior = display.textContent
    primeiro = true
    apagarIgual = false
  }
}

igual.addEventListener('click', calcular)

const apagarUltimo = () => {
  if (apagarIgual) {
    if (display.textContent.length > 1) {
      display.textContent = display.textContent.slice(0, -1)
    } else {
      display.textContent = 0
    }
    
    primeiro = true
  }
}

apagar.addEventListener('click', apagarUltimo)

const inverteSinal = () => {
  display.textContent = parseFloat(display.textContent.replace(',', '.')) * -1
  ajustaPontoVirgula()
}

maismenos.addEventListener('click', inverteSinal)

const limpaCalculo = () => {
  display.textContent = '0'
  primeiro = true
}

limparCalculo.addEventListener('click', limpaCalculo)

const limpaTudo = () => {
  display.textContent = '0'
  numeroAnterior = '0'
  numeroAtual = '0'
  primeiro = true
}

limparTudo.addEventListener('click', limpaTudo)

const calcPorc = () => {
  display.textContent = parseFloat(display.textContent.replace(',', '.')) / 100
  ajustaPontoVirgula()
  numeroAtual = display.textContent
  primeiro = true
}

porc.addEventListener('click', calcPorc)

const calcFatorial = () => {
  let numero = parseInt(display.textContent.replace(',', '.')); // Pega o número do display
  if (isNaN(numero)) return; // Verifica se é um número válido

  // Calcula o fatorial
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  display.textContent = resultado.toString(); // Exibe o resultado no display
  ajustaPontoVirgula();
  numeroAnterior = '0';
  primeiro = true;
};

// Adiciona o evento para calcular o fatorial quando o botão '!' é clicado
divisaoUm.addEventListener('click', calcFatorial);


const calcPotencia = () => {
  display.textContent = Math.pow(parseFloat(display.textContent.replace(',', '.')), 2)
  ajustaPontoVirgula()
  numeroAtual = display.textContent
  numeroAnterior = '0'
  primeiro = true
}

potencia.addEventListener('click', calcPotencia)

const calcRaiz = () => {
  display.textContent = Math.sqrt(parseFloat(display.textContent.replace(',', '.')))
  ajustaPontoVirgula()
  numeroAtual = display.textContent
  numeroAnterior = '0'
  primeiro = true
}

raiz.addEventListener('click', calcRaiz)

const calcSin = () => {
    display.textContent = Math.sin(parseFloat(display.textContent.replace(',', '.')))
    ajustaPontoVirgula()
    numeroAtual = display.textContent
    numeroAnterior = '0'
    primeiro = true
  }

  sin.addEventListener('click', calcSin)

  const calcCos = () => {
    display.textContent = Math.cos(parseFloat(display.textContent.replace(',', '.')))
    ajustaPontoVirgula()
    numeroAtual = display.textContent
    numeroAnterior = '0'
    primeiro = true
  }

  cos.addEventListener('click', calcCos)

  const calcTng = () => {
    display.textContent = Math.tan(parseFloat(display.textContent.replace(',', '.')))
    ajustaPontoVirgula()
    numeroAtual = display.textContent
    numeroAnterior = '0'
    primeiro = true
  }

  tng.addEventListener('click', calcTng)

  const calcLog = () => {
    display.textContent = Math.log(parseFloat(display.textContent.replace(',', '.')))
    ajustaPontoVirgula()
    numeroAtual = display.textContent
    numeroAnterior = '0'
    primeiro = true
  }

  log.addEventListener('click', calcLog)

  const calcPi = () => {
    display.textContent = Math.PI(parseFloat(display.textContent.replace(',', '.')))
    ajustaPontoVirgula()
    numeroAtual = display.textContent
    numeroAnterior = '0'
    primeiro = true
  }

  pi.addEventListener('click', calcLog)

  const calcSinh = () => {
    display.textContent = Math.sinh(parseFloat(display.textContent.replace(',', '.')))
    ajustaPontoVirgula()
    numeroAtual = display.textContent
    numeroAnterior = '0'
    primeiro = true
  }

  sinh.addEventListener('click', calcLog)

  const calcCosh = () => {
    display.textContent = Math.cosh(parseFloat(display.textContent.replace(',', '.')))
    ajustaPontoVirgula()
    numeroAtual = display.textContent
    numeroAnterior = '0'
    primeiro = true
  }

  cosh.addEventListener('click', calcLog)

  const calcTngh = () => {
    display.textContent = Math.tngh(parseFloat(display.textContent.replace(',', '.')))
    ajustaPontoVirgula()
    numeroAtual = display.textContent
    numeroAnterior = '0'
    primeiro = true
  }

  tngh.addEventListener('click', calcLog)
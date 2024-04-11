

function listarTempo(){
    var valor = document.getElementById("data").value;
    var partesData = valor.split('/');
    
    // Verificar se o formato da data está correto
    if (partesData.length !== 3 || partesData[0].length !== 2 || partesData[1].length !== 2 || partesData[2].length !== 4) {
        alert("Formato de data incorreto. Por favor, use o formato dd/mm/aaaa");
        return;
    }
    var dia = parseInt(partesData[0], 10);
    var mes = parseInt(partesData[1], 10);
    var ano = parseInt(partesData[2], 10);

    
       // Verificar se a data é válida
       if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || mes < 1 || mes > 12 || ano < 1) {
        alert("Data inválida. Por favor, insira uma data válida.");
        return;
    }
        var hoje = new Date();
        var data = new Date(ano,mes - 1, dia);

        var diferencaTempo = data.getTime() - hoje.getTime();

        // Converter a diferença de tempo em dias, meses e anos
        var diasFaltando = Math.floor(diferencaTempo / (24 * 60 * 60 * 1000));
        var mesesFaltando = Math.floor(diasFaltando / 30.4375); // média de dias por mês
        var anosFaltando = Math.floor(mesesFaltando / 12);
        
        // Exibir o resultado na página
        document.getElementById("resultado").innerHTML = "Faltam " + diasFaltando + " dias, " + mesesFaltando + " meses e " + anosFaltando + " anos para a data selecionada.";

    
}
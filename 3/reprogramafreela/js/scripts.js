var inputsDinheiro = document.querySelectorAll(".dinheiro");
inputsDinheiro.forEach(function(input) {
    input.addEventListener("keypress", mascaraDinheiro);
});

var spanHora = document.querySelector(".secao-hora .secao__rodape__valor span");
var formularioHora = document.querySelector(".secao-hora form");
formularioHora.addEventListener("change", calculaValorHora);


var spanProjeto = document.querySelector(".secao-projeto .secao__rodape__valor span");
var formProjeto = document.querySelector(".secao-projeto form");
formProjeto.addEventListener("change", calculaValorProjeto);


function converteDinheiro(valor) {
    return valor.replace(/[\D]+/g, "");
}


function formataDinheiro(valor) {
    valor = parseInt(converteDinheiro(valor)) + "";
    valor = valor.replace(/([0-9]{2})$/g, ".$1");
    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
    return valor;
}


function mascaraDinheiro() {
    var input = this;
    var valor = input.value;
    input.value = formataDinheiro(valor);
}


function calculaValorHora() {
    // entrada
    var formHora = this;
    var ganhoPorMes = converteDinheiro(formHora["ganho-mes"].value);
    var horasPorDia = parseFloat(formHora["horas-dia"].value);
    var diasPorSemana = parseFloat(formHora["dias-semana"].value);
    var semanasDeFerias = parseFloat(formHora["semanas-ferias"].value);

    // processamento
    var horasPorSemana = horasPorDia * diasPorSemana;
    var horasDeFerias = horasPorSemana * semanasDeFerias;
    var totalHoras = horasPorSemana - horasDeFerias;
    var ganhoPorAno = ganhoPorMes * 12;
    var valorDeHora = ganhoPorAno / (52.1 * totalHoras); // divide o ganho anual por 52.1% das horas totais
    valorDeHora += 0.2 * valorDeHora; // soma 20% do valor da hora
    valorDeHora = parseFloat(valorDeHora).toFixed(2);

    var valorDeHoraFormatado;
    if (!isNaN(valorDeHora) && isFinite(valorDeHora)) {
        valorDeHoraFormatado = Math.ceil(valorDeHora) + ",00";
    } else {
        valorDeHoraFormatado = "0,00";
    }

    formProjeto["ganho-hora"].value = valorDeHoraFormatado;
    calculaValorProjeto();

    // saida
    spanHora.innerHTML = "R$ " + valorDeHoraFormatado;
}


function calculaValorProjeto() {
    // entrada
    var formProjeto = this;
    var ganhoHora = parseFloat(converteDinheiro(formProjeto["ganho-hora"].value));
    var projetoHoras = parseFloat(formProjeto["projeto-horas"].value);
    var projetoDias = parseFloat(formProjeto["projeto-dias"].value);

    // processamento
    var valorDeProjeto = ganhoHora * projetoHoras * projetoDias;
    valorDeProjeto = parseFloat(valorDeProjeto).toFixed(2);
    
    var valorDeProjetoFormatado;
    if (!isNaN(valorDeProjeto) && isFinite(valorDeProjeto)) {
        valorDeProjetoFormatado = "R$ " + Math.ceil(valorDeProjeto) + ",00";
    } else {
        valorDeProjetoFormatado = "R$ 0,00";
    }

    // saida
    spanProjeto.innerHTML = valorDeProjetoFormatado;
}
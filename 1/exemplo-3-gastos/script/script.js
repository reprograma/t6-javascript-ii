const button =  document.querySelector(".transacao__button");

button.addEventListener("click", function(event){
    event.preventDefault(); //previne o evento padrão
    const tabela = document.querySelector(".extrato__table"); // pega a tabela do documento
    const inputName = document.getElementById("transacaoInputName");
    const inputMoney = document.getElementById("transacaoInputMoney");
    const inputDate = document.getElementById("transacaoInputDate");

    //cria linha
    const linha = document.createElement("tr");
    
    //criar colunas
    const colunaNome =  document.createElement("td");
    const colunaNomeTexto = document.createTextNode(inputName.value)
    colunaNome.appendChild(colunaNomeTexto);

    const colunaValor =  document.createElement("td");
    const colunaValorTexto =  document.createTextNode(inputMoney.value)
    colunaValor.appendChild(colunaValorTexto);

    const colunaData =  document.createElement("td");
    const colunaDataTexto = document.createTextNode(inputDate.value)
    colunaData.appendChild(colunaDataTexto)

    //inserir colunas na linha
    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);

    //adiciona linha a tabela
    tabela.appendChild(linha);
})
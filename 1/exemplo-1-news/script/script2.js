const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function(event){
    event.preventDefault();

    //create element cria novos elmentos
    const resposta = document.createElement("span");

    //create text node cria nós de texto
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

    //append child insere item dentro de um elemnto
    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");
    
    //insert before insere item em um elemento antes de um item estabelicido
    newsForm.insertBefore(resposta, newsForm.childNodes[0]);
})

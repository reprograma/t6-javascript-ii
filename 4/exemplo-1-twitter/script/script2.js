const inputTweet = document.getElementById("tweetComposerInput")
const buttonCreateTweet = document.querySelector(".tweet-composer__button")
const tweetsTimeline = document.querySelector(".tweets-timeline")
const contador = document.getElementById("tweetComposerCounter");

buttonCreateTweet.addEventListener("click", function(e){
    e.preventDefault();

    if(inputTweet.value === undefined || inputTweet.value === null || inputTweet.value === "" || inputTweet.value === " "){
        return false;
    }

    const date = new Date();
    const month = date.toLocaleString("pt-br", { month: "short" });
    const day = date.getDate();

    //criei a div que abraça todo o conteúdo
    const div = document.createElement("div")
    div.className = "tweets-timeline__box";

    //criei o header
    const header = document.createElement("div");
    header.className = "tweets-timeline__header";
    header.innerHTML = `<span class="tweets-timeline__name">Isabelle Galvão</span>\
        <span class="tweets-timeline__username">@galvaoiisabelle</span>\
        <span class="tweets-timeline__date">${day} de ${month}</span>`

    //criei um elemento novo pro tweet
    const newTweetP = document.createElement("p");
    newTweetP.className = "tweets-timeline__tweet";
    //passei o conteúdo do tweet pro paragrafo
    newTweetP.innerHTML = inputTweet.value;

    const footer = document.createElement("div");
    footer.className = "tweets-timeline__footer";
    footer.innerHTML = `<button class="tweets-timeline__delete-button button">Excluir</button>`

    //coloquei o header + texto do tweet na div
    div.appendChild(header)
    div.appendChild(newTweetP)
    div.appendChild(footer)

    //coloquei a div na timeline
    tweetsTimeline.insertBefore(div, tweetsTimeline.childNodes[0]);

    inputTweet.value = "";

    contador.innerHTML = 280;

    const botaoExcluir = document.querySelector(".tweets-timeline__delete-button");

    botaoExcluir.addEventListener("click", function(evento){
        evento.preventDefault();
        div.remove();
        console.log("oi")
    })

})

//keydown
inputTweet.addEventListener("keyup", function(){
    const textBox = this;
    const maxLength = 280;
    const caracteresDisponiveis = maxLength -  textBox.value.length;

    contador.innerHTML = caracteresDisponiveis;
    buttonCreateTweet.disabled = false;

    // if(textBox.value.length > maxLength){
    //     textBox.value = textBox.value.substring(0, maxLength)
    // }

    if(caracteresDisponiveis <= 15){
        contador.style.color = "red";
    }else{
        contador.style.color = "white";
    }
    
    if (caracteresDisponiveis < 0){
        buttonCreateTweet.disabled = true;
        contador.style.color = "red";
    }else{
        contador.style.color = "white";
        buttonCreateTweet.disabled = false;
    }

    if(caracteresDisponiveis <= 15 && caracteresDisponiveis >=0){
        contador.style.color = "red";
    }else if(caracteresDisponiveis < 0){
        buttonCreateTweet.disabled = true;
        contador.style.color = "red";
    }else{
        contador.style.color = "white";
    }

})
const buttonCreateTweet = document.querySelector(".tweet-composer__button")
const tweetsTimeline = document.querySelector(".tweets-timeline")
const inputTweet = document.getElementById("tweetComposerInput")
const buttonDeleteTweet = document.querySelectorAll(".tweets-timeline__delete-button");

buttonCreateTweet.addEventListener("click", function(e){
    e.preventDefault()
    
    const newTweetBox = document.createElement("div")
    newTweetBox.className = "tweets-timeline__box";
    const date = new Date();
    const month = date.toLocaleString("pt-br", { month: "short" });
    const day = date.getUTCDate();

    newTweetBox.innerHTML = 
    `<div class="tweets-timeline__header">\
        <span class="tweets-timeline__name">Isabelle Galvão</span>\
        <span class="tweets-timeline__username">@galvaoiisabelle</span>\
        <span class="tweets-timeline__date">${day} de ${month}</span>\
    </div>\
    <p class="tweets-timeline__tweet">\
        ${inputTweet.value}\
    </p>\
    <div class="tweets-timeline__footer">\
        <button class="tweets-timeline__delete-button button">Excluir</button>\
    </div>`;

    tweetsTimeline.insertBefore(newTweetBox, tweetsTimeline.childNodes[0]);
})

for (let i = 0; i < buttonDeleteTweet.length; i++) {
    buttonDeleteTweet[i].addEventListener("click", function(e){
        console.log("click",e.target.className);
        if(e.target && e.target.className == 'button'){
            const tweet = this.closest(".tweets-timeline__box");
            tweet.parentNode.removeChild(tweet);
        }    
    })
}


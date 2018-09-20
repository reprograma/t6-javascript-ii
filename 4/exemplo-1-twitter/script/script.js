const inputTweet = document.getElementById("tweetComposerInput")
const buttonCreateTweet = document.querySelector(".tweet-composer__button")

const tweetsTimeline = document.querySelector(".tweets-timeline")

buttonCreateTweet.addEventListener("click", function(e){
    e.preventDefault();
    
    const boxTweet =  document.createElement("div");

    //criei um elemento novo pro tweet
    const newTweetP = document.createElement("p");
    //passei o conteúdo do tweet pro paragrafo
    newTweetP.innerHTML = inputTweet.value;

    //criei header pro box tweet    
    const header = document.createElement("div");
    header.innerHTML = `
    <div class="tweets-timeline__header">
                    <span class="tweets-timeline__name">ana.js</span>
                    <span class="tweets-timeline__username">@naluhh</span>
                    <span class="tweets-timeline__date">1 de ago</span>
                </div>
    `

    //criei o footer pro box do tweet
    const footer = document.createElement("div");
    footer.innerHTML = `<div class="tweets-timeline__footer">
    tweet fixado
</div>`
    

    boxTweet.appendChild(header);
    boxTweet.appendChild(newTweetP);
    boxTweet.appendChild(footer);
    
    //coloquei a div na timeline
    tweetsTimeline.insertBefore(boxTweet, tweetsTimeline.childNodes[0]);
})


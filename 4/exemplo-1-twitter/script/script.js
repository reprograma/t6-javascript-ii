const button = document.querySelector(".tweet-composer__button")
const tweetsTimeline = document.querySelector(".tweets-timeline")
const inputTweet = document.getElementById("tweetComposerInput")

button.addEventListener("click", function(e){
    e.preventDefault()
    
    const newTweetBox = document.createElement("div")
    newTweetBox.className = "tweets-timeline__box";

    const newTweet = document.createElement("p")
    newTweet.className = "tweets-timeline__tweet";

    const newTweetText =  document.createTextNode(inputTweet.value);

    const date = new Date();
    const month = date.toLocaleString("pt-br", { month: "short" });
    const day = date.getUTCDate();
    const completeDate = `${day} de ${month}`;
    
    newTweet.appendChild(newTweetText);
    newTweetBox.appendChild(newTweet);
    newTweetBox.insertBefore(createHeader(completeDate), newTweetBox.childNodes[0]);
    tweetsTimeline.insertBefore(newTweetBox, tweetsTimeline.childNodes[0]);

})

function createHeader(data) {
    const newTweetHeader = document.createElement("div")
    newTweetHeader.className = "tweets-timeline__header";

    const tweetName = document.createElement("span")
    tweetName.className = "tweets-timeline__name";
    tweetName.innerHTML = "Isabelle Galvão";


    const tweetUserName = document.createElement("span")
    tweetUserName.className = "tweets-timeline__username";
    tweetUserName.innerHTML = "@galvaoiisabelle";

    const tweetDate = document.createElement("span")
    tweetDate.className = "tweets-timeline__date";
    tweetDate.innerHTML = data;

    newTweetHeader.appendChild(tweetName)
    newTweetHeader.appendChild(tweetUserName)
    newTweetHeader.appendChild(tweetDate)

    return newTweetHeader;
}

function createFooter(){
    
}
const aumentar = document.getElementById("aumentar")
const diminuir = document.getElementById("diminuir")
console.log(document.querySelector(".article div").style.fontSize);

let textSize = 16;
let subtitleSize = 24;
let titleSize = 32;
aumentar.addEventListener("click", function(){
    textSize = textSize + 1;
    subtitleSize = subtitleSize + 1;
    titleSize = titleSize + 1;
    document.querySelector(".article div").style.fontSize = textSize +"px";
    document.querySelector(".article__subtitle").style.fontSize = subtitleSize +"px";
    document.querySelector(".article__title").style.fontSize = titleSize +"px";

})

diminuir.addEventListener("click", function(){
    textSize = textSize - 1;
    subtitleSize = subtitleSize - 1;
    titleSize = titleSize - 1;
    document.querySelector(".article div").style.fontSize = textSize +"px";
    document.querySelector(".article__subtitle").style.fontSize = subtitleSize +"px";
    document.querySelector(".article__title").style.fontSize = titleSize +"px";

})
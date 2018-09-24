window.addEventListener("scroll", function(){
    if(pageYOffset > 450){
        document.querySelector("main").style.marginTop = "100px";
        document.querySelector("h1").style.height = "100px";
        document.querySelector("h1").style.backgroundPosition = "left -700px";
        return false;
    }
    document.querySelector("main").style.marginTop = "300px";
    document.querySelector("h1").style.height = "300px";
    document.querySelector("h1").style.backgroundPosition = "left -300px";
})

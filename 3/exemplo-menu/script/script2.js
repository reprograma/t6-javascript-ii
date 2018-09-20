const button = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");

let counter =1;
button.addEventListener("click", function(event) {
    event.preventDefault();

    sidebar.style.left = "-435px"
    counter++
    if (counter % 2 !== 0 ){
        sidebar.style.left = "0px"
    }

})
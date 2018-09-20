const button = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");

button.addEventListener("click", function(event) {
    event.preventDefault();

    if (sidebar.style.left === "-430px") {
        sidebar.style.left = "0px";
        sidebar.setAttribute(
            "style", "font-size: 100px; font-style: italic; color:#ff0000;");
    }
    else {
        sidebar.style.left = "-430px";
    }
});
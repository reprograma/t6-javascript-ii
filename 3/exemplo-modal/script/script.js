const botao = document.querySelector(".login__button")
const botaoFechar = document.querySelector(".login-modal__button-close")

botao.addEventListener("click", function (evento1) {
    evento1.preventDefault()
    document.querySelector(".login-modal").style.display = "flex"
})

botaoFechar.addEventListener("click", function (evento1) {
    evento1.preventDefault()
    document.querySelector(".login-modal").style.display = "none"
})
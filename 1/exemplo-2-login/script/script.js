
const loginButton = document.querySelector(".login__button");
const input = document.getElementById("loginInputEmail");
loginButton.addEventListener("click", function(event){
    event.preventDefault();
    const email = input.value;

    const loginForm = document.querySelector(".login__form");
    loginForm.innerHTML = `Login efetuado com sucesso com o email ${email}!! c:`;
    // alert(`Login efetuado com sucesso com o email ${email}!! c:`);

})
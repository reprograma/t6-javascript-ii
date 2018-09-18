const button = document.querySelector(".cadastro__button")

button.addEventListener("click", function(e){
    e.preventDefault();

    const inputNome = document.getElementById("cadastroInputNome");
    const inputEmail = document.getElementById("cadastroInputEmail");
    const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
    const inputPassword = document.getElementById("cadastroInputPassword");
    const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
    const inputPhone = document.getElementById("cadastroInputPhone");
    const inputArea = document.getElementById("cadastroInputArea");
    const inputAreaSelected = cadastroInputArea.options[cadastroInputArea.selectedIndex];
    var inputLevel = document.getElementsByName("level");
    let inputLevelSelected;
    for (var i = 0; i < inputLevel.length; i++) {
        if (inputLevel[i].checked) {
            inputLevelSelected = inputLevel[i];
        }
    }
    const inputNews = document.getElementById("cadastroInputNews").checked;
    
    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
        inputNome.focus();
        return false;
    } else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
        inputEmail.focus();
        return false;
    }else if(inputEmailConfirm.value === undefined || inputEmailConfirm.value === null || inputEmailConfirm.value === "" || inputEmailConfirm.value === " "){
        inputEmailConfirm.focus();
        return false;
    } else if(inputPassword.value === undefined || inputPassword.value === null || inputPassword.value === "" || inputPassword.value === " "){
        inputPassword.focus();
        return false;
    } else if(inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null || inputPasswordConfirm.value === "" || inputPasswordConfirm.value === " "){
        inputPasswordConfirm.focus();
        return false;
    }
})
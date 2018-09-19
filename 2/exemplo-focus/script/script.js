const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputNews = document.getElementById("cadastroInputNews");

const inputLevel = document.getElementsByName("level");

const button = document.querySelector(".cadastro__button")

button.addEventListener("click", function(e){
    e.preventDefault();

    let radioItem;
    for(let i = 0; i < inputLevel.length; i++){
        if(inputLevel[i].checked){
            radioItem = inputLevel[i]
        }
    }

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
    } else if(inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " "){
        inputPhone.focus();
        return false
    } else if (inputEmail.value !== inputEmailConfirm.value){
        inputEmailConfirm.focus();
        return false    
    } else if (inputPassword.value !== inputPasswordConfirm.value){
        inputPasswordConfirm.focus();
        return false    
    } else if (inputPassword.value.length <=7){
        inputPassword.focus();
        return false    
    } else if (inputPasswordConfirm.value.length <=7){
        inputPasswordConfirm.focus();
        return false    
    } else if (inputNews.checked === false){
        alert("É uma pena que você não deseja receber nosso conteúdo exclusivo :c");
    } 

    if(radioItem.value === "Junior"){
        console.log("0 - 2 anos de experiência;")
    } else if(radioItem.value === "Pleno"){
        console.log("2 - 5 anos de experiência;")
    } else if(radioItem.value === "Senior"){
        console.log("5+ de experiência")
    }

    document.querySelector("body").style.backgroundColor = "#fff";
    const form = this.closest("form");
    form.submit();
})

inputArea.addEventListener("change", function(){
    
    if(inputArea.selectedIndex === 0){
        document.querySelector("body").style.backgroundColor = "#e3f2fd"
    } else if(inputArea.selectedIndex === 1){
        document.querySelector("body").style.backgroundColor = "#f1f8e9"
    } else if(inputArea.selectedIndex === 2){
        document.querySelector("body").style.backgroundColor = "#fce4ec"
    } else if(inputArea.selectedIndex === 3){
        document.querySelector("body").style.backgroundColor = "#ffecb3"
    }
})

inputEmailConfirm.addEventListener("paste",function(event){
    event.preventDefault();
    return false;
})


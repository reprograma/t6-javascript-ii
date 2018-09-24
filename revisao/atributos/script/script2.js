const atributos = document.getElementById("externo")
const atributosText = document.querySelector(".atributosText")

const atributosBox = document.createElement("p")

function getAttributes(){
    atributosBox.innerHTML = `<p>A id é ${atributos.id}, o Type é ${atributos.type}, O rel é ${atributos.rel}, O target é ${atributos.target} e o href é ${atributos.href}`
    atributosText.appendChild(atributosBox)
}


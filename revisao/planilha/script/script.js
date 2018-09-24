const feedbackInputName = document.getElementById("feedbackInputName");
const feedbackInputCity = document.getElementById("feedbackInputCity");
const feedbackInputComment = document.getElementById("feedbackInputComment");
const feedbackButton = document.querySelector(".feedback__button");

feedbackButton.addEventListener("click", function(event){
    event.preventDefault();

    if(feedbackInputName.value === undefined || feedbackInputName.value === null || feedbackInputName.value === "" || feedbackInputName.value === " "){
    feedbackInputName.focus();
    return false;
    } else if(feedbackInputCity.value === undefined || feedbackInputCity.value === null || feedbackInputCity.value === "" || feedbackInputCity.value === " "){
        feedbackInputCity.focus();
        return false;
    } else if(feedbackInputComment.value === undefined || feedbackInputComment.value === null || feedbackInputComment.value === "" || feedbackInputComment.value === " "){
        feedbackInputComment.focus();
        return false;
    }

    const respostasTable = document.querySelector(".respostas__table");

    const row = document.createElement("tr");

    const columnName = document.createElement("td");
    const inputName = document.createTextNode(feedbackInputName.value);
    const columnCity = document.createElement("td");
    const inputCity = document.createTextNode(feedbackInputCity.value);
    const columnComment = document.createElement("td");
    const inputComment = document.createTextNode(feedbackInputComment.value);

    columnName.appendChild(inputName);
    columnCity.appendChild(inputCity);
    columnComment.appendChild(inputComment);

    row.appendChild(columnName);
    row.appendChild(columnCity);
    row.appendChild(columnComment);

    respostasTable.appendChild(row);


})
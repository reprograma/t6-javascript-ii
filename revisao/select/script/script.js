const selectbutton = document.querySelector(".select__button")
const selectInputArea = document.getElementById("selectInputArea")

selectbutton.addEventListener("click",function(eventbtn){
    eventbtn.preventDefault()
    selectInputArea[selectInputArea.selectedIndex].remove()
})  
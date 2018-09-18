window.onselect = selectText;

function selectText(e)
{
    start = e.target.selectionStart;
    end = e.target.selectionEnd;
    document.getElementById("selectionText").innerHTML = e.target.value.substring(start, end);
    alert(e.target.value.substring(start, end))
}

document.addEventListener("selectionchange", function() {
    console.log('Selection changed.'); 
    let selection = window.getSelection().toString();
    document.getElementById("selectionText").innerHTML = selection; 

});
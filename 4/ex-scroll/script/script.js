const arrowTop = document.getElementById('arrowTop');

arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
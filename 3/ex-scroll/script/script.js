const arrowTop = document.getElementById('arrowTop');

arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-hide-scroll").style.top = "0";
    } else {
        document.getElementById("navbar-hide-scroll").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
}
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

console.log(sticky);

function toTop() {
    window.scrollTo(0, 0);
    return false;
}

function scrollHandler() {
    if (window.pageYOffset > navbar.offsetTop + 200) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
         document.getElementById("scrollTop").style.display = "none";
    }
}
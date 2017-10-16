var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

console.log(sticky);

function scrollHandler() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
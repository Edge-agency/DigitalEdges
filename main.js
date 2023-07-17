let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.nav');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
navbar.addEventListener("click", function() {
    navbar.classList.remove("open");
    menu.classList.toggle('bx-x');
});
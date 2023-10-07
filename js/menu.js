document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu button");
    const menuNav = document.querySelector(".menu-nav");

    menuButton.addEventListener("click", function() {
        menuNav.classList.toggle("show-menu");
    });
});

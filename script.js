// JavaScript to toggle the menu and overlay
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");
    const overlay = document.querySelector(".nav-overlay");
    const body = document.body;

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
        overlay.classList.toggle("active");
        body.classList.toggle("active-menu");
    });

    overlay.addEventListener("click", () => {
        navList.classList.remove("active");
        overlay.classList.remove("active");
        body.classList.remove("active-menu");
    });
});
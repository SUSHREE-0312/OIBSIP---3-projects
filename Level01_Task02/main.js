var typed= new Typed(".text", {
    strings:["Frontend Developer", "Web Developer",""],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".header .navbar");
    document.querySelector(".menu-toggle").addEventListener("click", () => {
        toggleMenu.classList.toggle("active");
    });
});

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Change at 50px scroll
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


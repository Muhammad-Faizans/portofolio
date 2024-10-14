// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(`#${link.getAttribute("href").substring(1)}`);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

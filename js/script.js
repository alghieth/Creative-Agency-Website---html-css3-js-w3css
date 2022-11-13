const btn = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll('.nav_link');

btn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});
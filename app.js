const navSlide = () => {
    const button = document.querySelectorAll("body header nav.navbar div.burger");
    const nav = document.querySelector(".navlinks");

    button.forEach(('click', () => {
        nav.classList.toggle('nav-active');
        console.log(button);
    }));
}
navSlide()
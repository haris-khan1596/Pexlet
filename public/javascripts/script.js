const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.nav-link');
const home = document.querySelector(`a.nav-link[href="#"]`);
const toggle = document.querySelector('.navbar-toggler-icon');

window.addEventListener('scroll', () => {
    const scroll = this.scrollY;
    sections.forEach((sec) => {
        let top = window.scrollY + 100;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach((link) => {
                if(id){
                    link.classList.remove('active');
                    const el = document.querySelector(
                        `a.nav-link[href="#${id}"]`
                    );
                    el.classList.add('active');
                }
            });
        }
    });

    if (scroll == 0) {
        navbar.classList.remove('bg-blue');
    } else {
        navbar.classList.add('bg-blue');
    }
});


toggle.addEventListener('mouseenter', () => {
  navbar.style.backgroundColor = 'rgba(0, 1, 35, 0.85)'; // Change the background color to red when the mouse hovers over the navbar
});

navbar.addEventListener('mouseleave', () => {
  navbar.style.backgroundColor = ''; // Reset the background color when the mouse leaves the navbar
});


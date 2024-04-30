window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('div[id]');
    const links = document.querySelectorAll('.navbar a');

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 70; // altura do navbar
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
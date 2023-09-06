const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        window.location.href = href;
    });
});
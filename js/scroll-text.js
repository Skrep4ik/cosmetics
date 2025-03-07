window.addEventListener('DOMContentLoaded', (event) => {
    const marquee = document.querySelector('.marquee div');
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone;
} );
document.querySelectorAll('.footer-menu__link').forEach(link => {
    const underline = document.createElement('span');
    underline.classList.add('footer-menu__link-underline');
    link.appendChild(underline);

    link.addEventListener('mouseenter', () => {
        underline.style.width = '100%';
    });

    link.addEventListener('mouseleave', () =>{
        underline.style.width = '0'
    });
})
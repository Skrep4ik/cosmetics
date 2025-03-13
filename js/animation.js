document.querySelectorAll('.footer-menu__link').forEach(link => {
    // Додаємо підкреслення елементу
    const underline = document.createElement('span');
    underline.classList.add('footer-menu__link-underline');
    link.appendChild(underline);
  
    // Обробник для наведення
    link.addEventListener('mouseenter', () => {
      underline.style.width = '100%';
    });
  
    // Обробник для виходу
    link.addEventListener('mouseleave', () => {
      underline.style.width = '0';
    });
  });
// Додає обробник події, який виконується після повного завантаження контенту сторінки
window.addEventListener('DOMContentLoaded', (event) => {
    // Вибирає елемент div всередині елемента з класом 'marquee'
    const marquee = document.querySelector('.marquee div');
    // Зберігає HTML-код внутрішнього вмісту marquee в змінній clone
    const clone = marquee.innerHTML;
    // Додає скопійований вміст до кінця оригінального вмісту marquee
    marquee.innerHTML += clone;
  });
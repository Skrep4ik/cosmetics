// Додаємо слухач події на завантаження контенту сторінки
document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо інпут для введення email та відповідну мітку
    const emailInput = document.querySelector('.email-input');
    const emailLabel = document.querySelector('.email');
  
    // Додаємо слухач події на введення тексту в інпут
    emailInput.addEventListener('input', function() {
      // Отримуємо значення з інпута
      const emailValue = emailInput.value;
  
      // Перевіряємо, чи містить введене значення символ "@" (якщо ні, показуємо помилку)
      if (!emailValue.includes('@')) {
        // Якщо повідомлення про помилку ще не додано, створюємо його
        if (!document.querySelector('.email-error')) {
          const errorMessage = document.createElement('span');
          errorMessage.classList.add('email-error');
          
          // Стилізуємо повідомлення про помилку
          errorMessage.style.color = '#fff'; // білий колір тексту
          errorMessage.textContent = 'Введіть @'; // текст помилки
          errorMessage.style.fontSize = '12px'; // розмір шрифту
          errorMessage.style.position = 'absolute'; // абсолютне позиціонування
          errorMessage.style.top = '60px'; // відступ зверху
          errorMessage.style.left = '0';  // відступ зліва
          errorMessage.style.padding = '12px 24px'; // відступи всередині повідомлення
          errorMessage.style.background = '#B71C1C'; // червоний фон помилки
  
          // Додаємо повідомлення про помилку до мітки email
          emailLabel.appendChild(errorMessage);
        }
      } else {
        // Якщо введено символ "@", перевіряємо наявність повідомлення про помилку
        const errorMessage = document.querySelector('.email-error');
        if (errorMessage) {
          // Якщо повідомлення про помилку є, видаляємо його
          errorMessage.remove();
        }
      }
    });
  });
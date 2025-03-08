document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector('.email-input');
    const emailLabel = document.querySelector('.email');
    emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value;

        if(!emailValue.includes('@')) {

            if (!document.querySelector('.email-error')) {
                const errorMessage = document.querySelector.createElement('span');
                errorMessage.classList.add('email-error');

                errorMessage.style.color = '#fff';
                errorMessage.style.textContent = 'Введіть @';
                errorMessage.style.fontSize = '12px';
                errorMessage.style.position = 'absolute';
                errorMessage.style.top = '60px';
                errorMessage.style.left = '0';
                errorMessage.style.padding = '12px 24px';
                errorMessage.style.beckground = '#B71C1C';

                emailLabel.appendChild(errorMessage);
            }
        } else {
            const errorMessage = document.querySelector('.email-error');
            if (errorMessage){
                errorMessage.remove();
            }
        }
    });
});
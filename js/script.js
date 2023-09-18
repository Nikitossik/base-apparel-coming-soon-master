const form = document.querySelector(".form");

let validateEmail = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(value);

form.addEventListener('submit', (e) => {
    const input = form.email;
    const message = form.querySelector('.form__error-message');

    if (!input) return;

    if ((!input.value || !validateEmail(input.value)) && message) {
        message.textContent = !input.value ? 'A field should not be empty' : "Please provide a valid email";
        message.classList.add('visible');
        form.classList.add('form--error');
        input.classList.add('form-input--error');
        e.preventDefault();
    }

});
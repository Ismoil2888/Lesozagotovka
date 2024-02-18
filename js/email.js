document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    let emailInput = document.getElementById('email');
    let email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        localStorage.setItem('userEmail', email);
        alert('Вы отправили заявку, ожидайте в скором времени мы с вами свяжемся!');
        emailInput.value = '';
    } else {
        alert('Введите корректный адрес электронной почты!');
    }
});
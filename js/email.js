document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    if (email) {
        localStorage.setItem('userEmail', email);
        alert('Вы отправили заявку, ожидайте в скором времени мы с вами свяжемся!');

        emailInput.value = '';
    } else {
        alert('Введите адрес электронной почты!');
    }
});
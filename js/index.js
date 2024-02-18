function saveData() {
    let nameInput = document.querySelector('.inpt1');
    let phoneInput = document.querySelector('.inpt2');
    let emailInput = document.querySelector('.inpt3');
    let checkbox = document.querySelector('.check');

    let name = nameInput.value.trim();
    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !phone || !email) {
        alert('Пожалуйста, заполните все поля формы.');
    } else if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email.');
    } else if (!checkbox.checked) {
        alert('Пожалуйста, дайте согласие на обработку персональных данных.');
    } else {
        localStorage.setItem('userName', name);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userEmail', email);
        alert(`Спасибо, ${name} ! Ваша заявка успешно отправлена! Ожидайте в скором времени мы с вами свяжемся!`);
        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        document.getElementById('popup').close();
    }
}


function toggleMenu() {
    var menuIcon = document.querySelector('.burger-menu-icon');
    var menu = document.querySelector('.burger-menu');
    menuIcon.classList.toggle('open');
    menu.classList.toggle('open');
}

function scrollRight() {
document.querySelector('.production-cards').scrollBy({
left: 300,
behavior: 'smooth'
});
}

document.querySelector('.strelka-suda').addEventListener('click', function() {
document.querySelector('.production-cards').scrollBy(-300, 0);
});

function saveData() {
    let nameInput = document.querySelector('.inpt1');
    let phoneInput = document.querySelector('.inpt2');
    let emailInput = document.querySelector('.inpt3');
    let checkbox = document.querySelector('.check');

    let name = nameInput.value.trim();
    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();

    if (!name || !phone || !email) {
        alert('Пожалуйста, заполните все поля формы.');
    } else if (!checkbox.checked) {
        alert('Пожалуйста, дайте согласие на обработку персональных данных.');
    } else {
        localStorage.setItem('userName', name);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userEmail', email);
        alert(`Спасибо, ${name}! Ваши данные успешно отправлены!`);
        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        document.getElementById('popup').close();
    }
}
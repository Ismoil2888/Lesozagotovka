const nameInput = document.querySelector('.input[placeholder="Имя"]');
const phoneInput = document.querySelector('.input[placeholder="Телефон"]');
const emailInput = document.querySelector('.input[placeholder="Email"]');

const getName = () => nameInput.value;
const getPhone = () => phoneInput.value;
const getEmail = () => emailInput.value;

const saveData = () => {
    const name = getName();
    const phone = getPhone();
    const email = getEmail();
  
    localStorage.setItem('formData', JSON.stringify({ name, phone, email }));
  };

  const sendData = () => {
    const data = JSON.parse(localStorage.getItem('formData'));
  
    fetch('/api/save-data', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };
  
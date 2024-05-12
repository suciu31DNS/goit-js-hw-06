const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {};
  const inputs = form.elements;

  for (let input of inputs) {
    if (input.type !== 'submit') {
      if (input.value.trim() === '') {
        alert('Toate câmpurile trebuie completate!');
        return;
      }

      formData[input.name] = input.value;
    }
  }

  console.log(formData);
  form.reset();
});

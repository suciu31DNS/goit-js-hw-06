const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function () {
  const requireLength = parseInt(validationInput.getAttribute('data-length'));

  if (validationInput.value.length === requireLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});

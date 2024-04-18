const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function () {
  if (nameInput.value.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput.value;
  }
});

// Scrieți un script care, atunci când se introduce un text în input#name - input(evenimentul input), înlocuiește valoarea lui span#name - output cu valoarea curentă din input#name - input.Dacă input - ul este gol, în acel span se va afișa "Anonymous".

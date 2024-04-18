const counterValue = 0;
const valueElement = document.getElementById('value');

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.action === 'decrement') {
      counterValue -= 1;
    } else if (button.dataset.action === 'increment') {
      counterValue += 1;
    }
    valueElement.textContent = counterValue;
  });
});

/* Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
Actualizați interfața cu noua valoare a variabilei counterValue. */

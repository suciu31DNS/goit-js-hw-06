const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ul.appendChild(li);
});

// Scrieți un script care pentru fiecare element al matricei ingredients:

// Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
// Adăugați numele ingredientului ca conținut text.
// Adăugați clasa item la element.
// Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

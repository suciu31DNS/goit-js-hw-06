const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').innerText;
  const items = category.querySelectorAll('ul li');
  console.log(`Category: ${title} Elements: ${items.length}`);
});

// Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.

// Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și
//   numărul de elemente din acea categorie (toate elementele <li>).

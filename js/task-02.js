const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");

const listIngredients = ingredients.map(elem => {
    const liEl = document.createElement('li');
    liEl.className = "item";
  liEl.textContent = elem;
  return liEl;
  });


ulEl.append(...listIngredients);


// ingredients.forEach((elem) => {
//   const liEl = document.createElement("li");
//   liEl.className = "item";
//   liEl.textContent = `${elem}`;
  
// });
// ulEl.append(liEl);
console.log(ulEl);

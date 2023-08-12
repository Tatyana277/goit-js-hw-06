const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");
ingredients.forEach((elem) => {
  const liEl = document.createElement("li");
  liEl.className = "item";
  liEl.textContent = `${elem}`;
  ulEl.append(liEl);
});

console.log(ulEl);

const countCategory = document.querySelectorAll("li.item");
console.log(`Number of categories: ${countCategory.length}`);

const h2Tag = document.querySelectorAll("#categories>li");

h2Tag.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});

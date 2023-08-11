const countCategory = document.querySelectorAll("li.item");
console.log(`Number of categories: ${countCategory.length}`);

const h2Tag = document.querySelectorAll("h2");
const countUpCategory = document.querySelectorAll("li.children");
const h2TagValue = Array.from(h2Tag.values);
h2TagValue.forEach(elem => {
    
console.log(`Category: ${h2TagValue(elem)}`);
console.log(`Elements: ${countUpCategory(elem).length}`);
});
console.log(`Category: ${h2TagValue[1]}`);
console.log(`Elements: ${countUpCategory.length}`);



let counterValue = 0;
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const spanCount = document.querySelector("#value");
const increment = () => {
  counterValue += 1;
  spanCount.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  spanCount.textContent = counterValue;
};

btnPlus.addEventListener("click", increment);
btnMinus.addEventListener("click", decrement);

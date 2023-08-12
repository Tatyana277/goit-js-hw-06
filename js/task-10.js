function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls > input");
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let firstSize = 30;
input.value = 0;

function createBoxes() {
  let amount = input.value;

  let addBoxes = "";

  for (let i = 0; i < amount; i += 1) {
    addBoxes += `<div style="width: ${firstSize}px; height: ${firstSize}px; background-color: ${getRandomHexColor()};">
    </div>`;
    firstSize += 10;
  }

  boxes.insertAdjacentHTML("beforeend", addBoxes);

  input.value = 0;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  firstSize = 30;
}

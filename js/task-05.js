const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

const defaultValue = outputEl.textContent;

function onInputChange(elem) {
  outputEl.textContent = elem.currentTarget.value.trim();
  if (!outputEl.textContent) {
    outputEl.textContent = defaultValue;
    }
}
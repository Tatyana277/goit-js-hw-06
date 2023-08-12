const input = document.getElementById("validation-input");

input.addEventListener("blur", checkInputValue);

function checkInputValue(elem) {
  elem.currentTarget.value.length === Number(this.dataset.length)
    ? (input.classList = "valid")
    : (input.classList = "invalid");
}

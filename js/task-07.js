const inputFontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputFontSize.addEventListener("input", (elem) => {
  spanText.setAttribute("style", `font-size: ${elem.target.value}px`);
});

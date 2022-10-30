function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBoxes = document.querySelector("button[data-create]");
const destroyBoxes = document.querySelector("button[data-destroy]");
const amount = document.querySelector("input");
const startCreate = document.querySelector("#boxes");
let inputValue = 0;
let widthBox = 0;
let heightBox = 0;

createBoxes.addEventListener("click", () => {
  inputValue = amount.value;
  widthBox = 30;
  heightBox = 30;
  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = widthBox + "px";
    box.style.height = heightBox + "px";
    startCreate.appendChild(box);
    widthBox += 10;
    heightBox += 10;
  }
});
destroyBoxes.addEventListener("click", () => {
  startCreate.remove();
});

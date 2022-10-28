function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesAmount = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {});
function createBoxes(amount) {
  document.getElementById("#boxes").innerHTML = "Hello World";
  //const addDiv = document.createElement("div");
  //return addDiv;
}

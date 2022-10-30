const createBoxes = document.querySelector("button[data-create]");
const destroyBoxes = document.querySelector("button[data-destroy]");
const amount = document.querySelector("input");
const startCreate = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBoxes.addEventListener("click", () => {
  let inputValue = amount.value;
  let widthBox = 30;
  let heightBox = 30;
  if (inputValue <= 100) {
    for (let i = 0; i < inputValue; i++) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = widthBox + "px";
      box.style.height = heightBox + "px";
      startCreate.appendChild(box);
      widthBox += 10;
      heightBox += 10;
    }
  } else {
    alert("Maksymalna wartość to 100!");
  }
});

destroyBoxes.addEventListener("click", () => {
  startCreate.innerHTML = "";
  amount.value = "";
});

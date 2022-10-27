let counterValue = 0;
const newValue = document.querySelector("#value");
const btnMinus = document.querySelector("button[data-action='decrement']");
const btnPlus = document.querySelector("button[data-action='increment']");
btnMinus.addEventListener("click", () => {
  counterValue -= 1;
  newValue.textContent = counterValue;
});
btnPlus.addEventListener("click", () => {
  counterValue += 1;
  newValue.textContent = counterValue;
});

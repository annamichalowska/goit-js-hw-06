const textSizeSlider = document.querySelector("input#font-size-control");
const textToChangeSize = document.querySelector("span#text");

textToChangeSize.style.fontSize = textSizeSlider.value + "px";

textSizeSlider.addEventListener("input", (event) => {
  textToChangeSize.style.fontSize = event.target.value + "px";
});

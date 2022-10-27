const textInput = document.querySelector("input#validation-input");
textInput.addEventListener("blur", (event) => {
  const myText = event.currentTarget;
  const inputLength = 6;
  if (myText.value.length === inputLength) {
    myText.classList.remove("invalid");
    myText.classList.add("valid");
  } else {
    myText.classList.remove("valid");
    myText.classList.add("invalid");
  }
});

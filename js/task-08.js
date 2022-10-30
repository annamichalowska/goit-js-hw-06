const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Wszystkie pola powinny zostać wypełnione!");
  }
  const objData = {
    Email: email.value,
    Password: password.value,
  };
  console.log(objData);
  event.currentTarget.reset();
}

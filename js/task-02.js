const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const addItemsLi = ingredients.map((ingredient) => {
  const addItemLi = document.createElement("li");
  addItemLi.textContent = ingredient;
  addItemLi.classList.add("item");
  return addItemLi;
});
listIngredients.append(...addItemsLi);

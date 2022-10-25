const quantityCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantityCategories.length}`);
console.log(" ");
quantityCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log(" ");
});

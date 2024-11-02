const openMenu = document.querySelector(".open-menu-categories-icon");
const categories = document.querySelector(".categories");
const categories_list = document.querySelector(".categories-list-container");

console.log(openMenu);
console.log(categories);

categories.addEventListener("click", () => {
  categories_list.classList.toggle("active");
});

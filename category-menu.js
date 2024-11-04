const categories = document.querySelector(".categories");
const categories_list_container = document.querySelector(
  ".categories-list-container"
);
const categories_list = document.querySelector(".categories-list");

categories.addEventListener("mouseover", () => {
  categories_list_container.classList.add("active");
});

categories.addEventListener("mouseout", () => {
  categories_list_container.classList.remove("active");
});

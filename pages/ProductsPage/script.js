import { getProducts } from "../../script.js";

const categories = document.querySelector(".categories");
const categories_list_container = document.querySelector(
  ".categories-list-container"
);
const categories_list = document.querySelector(".categories-list");

const products = getProducts();

products.then((data) => {
  categoryList(data);
});

categories.addEventListener("click", () => {
  categories_list_container.classList.toggle("active");
});

// const categoryList = (data) => {
//   data.forEach((p) => {
//     const li = document.createElement("li");
//     li.textContent = p.category;
//     categories_list.appendChild(li);
//   });
// };
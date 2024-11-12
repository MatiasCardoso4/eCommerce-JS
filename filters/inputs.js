import { getProducts } from "../helpers/getProducts.js";
const input = document.querySelector("input");
const form = document.querySelector("form");
const category_select = document.querySelector("select");
const price_filter = document.querySelector('input[type="range"]');
const priceSpan = document.querySelector(".price");

let product = "";
let category = "all";
let price = 0;

input.addEventListener("input", ({ target }) => {
  product = target.value;
  getProducts();
});

category_select.addEventListener("input", ({ target }) => {
  category = target.value;
  getProducts();
});

price_filter.addEventListener("input", ({ target }) => {
  price = target.value;
  priceSpan.textContent = `$${price}`;
  getProducts();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

export { product, category, price };

import { filterProducts } from "../filters/filterProducts.js";
import { createProductlist } from "./createProductList.js";

const productsList = document.querySelector(".products-list-grid");

export function showProducts(products) {
  productsList.innerHTML = "";
  const filteredProducts = filterProducts(products);
  filteredProducts.forEach((p) => {
    createProductlist(p);
  });
}

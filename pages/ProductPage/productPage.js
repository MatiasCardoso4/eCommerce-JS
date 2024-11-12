import { getProducts } from "../../script.js";

const product_title = document.querySelector(".product-title");
const product_description = document.querySelector(".product-description");

const { products } = getProducts();

const showProductInfo = () => {
  const { title } = products;
  product_title.textContent = title;
};
showProductInfo();

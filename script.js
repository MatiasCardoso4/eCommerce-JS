import { addToCart } from "./pages/CartPage/cart.js";

const input = document.querySelector("input");
const form = document.querySelector("form");
const productsList = document.querySelector(".products-list-grid");
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

export async function getProducts() {
  const url = `https://fakestoreapi.com/products`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    showProducts(result);
  } catch (error) {
    throw new Error(error);
  }
}

export function showProducts(products) {
  productsList.innerHTML = "";
  const filteredProducts = filterProducts(products, product);

  filteredProducts.forEach((product) => {
    const productTitle = document.createElement("p");
    const productPrice = document.createElement("span");
    const productItem = document.createElement("li");
    const productImage = document.createElement("img");
    const addBtn = document.createElement("button");
    addBtn.className = "add-btn";
    addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#0a0a0a"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`;
    addBtn.addEventListener("click", () => addToCart(product));
    productTitle.textContent = product.title;
    productPrice.classList.add("product-price");
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productImage.classList.add("image-product");
    productImage.setAttribute("src", product.image);
    productItem.append(productImage, productTitle, productPrice, addBtn);
    productItem.classList.add("product-card");
    productsList.append(productItem);
  });
}

function filterProducts(products) {
  return products.filter((p) => {
    return (
      p.title.toLocaleLowerCase().includes(product.toLocaleLowerCase()) &&
      (category === "all" || p.category === category) &&
      p.price >= price
    );
  });
}

window.addEventListener("DOMContentLoaded", getProducts);

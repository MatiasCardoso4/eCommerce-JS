import { createCart } from "./pages/CartPage/script.js";

const input = document.querySelector("input");
const form = document.querySelector("form");
const productsList = document.querySelector(".products-list-grid");

let product = "";

input.addEventListener("input", ({ target }) => {
  product = target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getProducts();
});

async function getProducts() {
  const url = `https://fakestoreapi.com/products`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    showProducts(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

function showProducts(products) {
  productsList.innerHTML = "";
  const filteredProducts = filterProducts(products, product);

  filteredProducts.map((product) => {
    const product_title = document.createElement("p");
    const li = document.createElement("li");
    const img = document.createElement("img");
    const add_btn = document.createElement("button");

    product_title.textContent = product.title;
    img.setAttribute("src", product.image);

    li.append(product_title, img, add_btn);
    li.classList = "product ";
    productsList.append(li);
  });
}

function filterProducts(products, product) {
  return products.filter((p) =>
    p.title.toLocaleLowerCase().includes(product.toLocaleLowerCase())
  );
}

window.addEventListener("DOMContentLoaded", getProducts);

const input = document.querySelector("input");
const form = document.querySelector("form");
const productsList = document.querySelector(".products-list-grid");
const category_select = document.querySelector("select");

let product = "";
let category = "all";

input.addEventListener("change", ({ target }) => {
  product = target.value;
  getProducts();
});

category_select.addEventListener("change", ({ target }) => {
  category = target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  input.value = "";
});

export async function getProducts() {
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
    add_btn.className = "add-btn";
    add_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#f1f1f1"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`;
    product_title.textContent = product.title;
    img.className = "image-product";
    img.setAttribute("src", product.image);
    li.append(img, product_title, add_btn);
    li.classList = "product-card";
    productsList.append(li);
  });
}

function filterProducts(products) {
  return products.filter((p) => {
    if (p.title.toLocaleLowerCase().includes(product.toLocaleLowerCase())) {
      return p;
    }
  });
}

window.addEventListener("DOMContentLoaded", getProducts);

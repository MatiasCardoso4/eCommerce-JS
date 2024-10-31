const input = document.querySelector("input");
const form = document.querySelector("form");
const productsList = document.querySelector(".products-list-grid");

let product = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

input.addEventListener("change", ({ target }) => {
  product = target.value;
  console.log(product);
});

const url = `https://fakestoreapi.com/products/${product}`;

async function getProducts() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    showProducts(result);
  } catch (error) {
    console.error(error);
  }
}

function showProducts(products) {
  const filteredProducts = filterProducts(products, product);

  filteredProducts.map((product) => {
    const product_title = document.createElement("p");
    const li = document.createElement("li");
    const img = document.createElement("img");
    product_title.textContent = product.title;
    img.setAttribute("src", product.image);

    li.append(product_title, img);
    li.classList = "product";
    productsList.append(li);
  });
}

function filterProducts(products, product) {
  products.filter((p) => {
    if (p.title.toLocaleLowerCase().includes(product.toLocaleLowerCase())) {
      return p;
    }
  });

  return products;
}

window.addEventListener("DOMContentLoaded", getProducts);

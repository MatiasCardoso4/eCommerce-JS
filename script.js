const input = document.querySelector("input");
const form = document.querySelector("form");
const productsList = document.querySelector(".products-list-grid");

let product = undefined;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getProducts();
});

input.addEventListener("input", ({ target }) => {
  product = target.value;
});

const url = `https://real-time-product-search.p.rapidapi.com/search-v2?q=${product}&country=us&language=en&page=1&limit=20&sort_by=BEST_MATCH&product_condition=ANY`;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e80e2fcc4cmsh8ee256f47c6ae57p17c388jsn778121277350",
    "x-rapidapi-host": "real-time-product-search.p.rapidapi.com",
  },
};

async function getProducts() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const { data } = result;
    // console.log(data);
    showProducts(data.products);
  } catch (error) {
    console.error(error);
  }
}

function showProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.setAttribute("src", product.product_photos[0]);
    li.textContent = product.product_title;
    li.append(img);
    li.classList = "product";
    productsList.append(li);
  });
}

getProducts();

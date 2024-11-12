import { addToCart } from "./addTocart.js";

const productsList = document.querySelector(".products-list-grid");

export const createProductlist = (product) => {
  const { title, image, price } = product;

  //Product title
  const productTitle = document.createElement("p");
  productTitle.textContent = title;

  //Product price
  const productPrice = document.createElement("span");
  productPrice.classList.add("product-price");
  productPrice.textContent = `$${price.toFixed(2)}`;

  //Product image
  const productImage = document.createElement("img");
  productImage.classList.add("image-product");
  productImage.setAttribute("src", image);

  //Add button
  const addBtn = document.createElement("button");
  addBtn.className = "add-btn";
  addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#0a0a0a"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`;
  addBtn.addEventListener("click", () => addToCart(product));

  //Product link
  const link = document.createElement("a");
  link.href = `/pages/ProductPage/productPage.html?title=${title}`;
  link.append(productTitle);

  //Product item
  const productItem = document.createElement("li");
  productItem.append(productImage, link, productPrice, addBtn);
  productItem.classList.add("product-card");

  productsList.append(productItem);
};

import { addToCart } from "../helpers/addTocart.js";
import { deleteFromCart } from "../helpers/deleteFromCart.js";
import { removeFromCart } from "../helpers/removeFromCart.js";
const cartList = document.querySelector(".cart-list");

export const createCartItem = (p) => {
  const li = document.createElement("li");
  const product_name = document.createElement("p");
  const img = document.createElement("img");
  const delete_btn = document.createElement("button");
  const productQuantity = document.createElement("span");
  const productPriceTag = document.createElement("span");
  const add_btn = document.createElement("button");
  const remove_btn = document.createElement("button");
  remove_btn.className = "remove-btn";
  add_btn.className = "add-btn";
  add_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`;
  add_btn.addEventListener("click", () => addToCart(p));
  remove_btn.addEventListener("click", () => removeFromCart(p));
  remove_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-440v-80h560v80H200Z"/></svg>`;
  productQuantity.textContent = `x${p.quantity}`;
  productPriceTag.textContent = `$${Number(p.price * p.quantity).toFixed(2)}`;
  delete_btn.className = "delete-btn";
  delete_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f50505"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;
  delete_btn.addEventListener("click", () => deleteFromCart(p.id));
  img.setAttribute("src", p.image);
  img.className = "product-image";
  li.className = "product-cart";
  product_name.textContent = p.title;
  li.append(
    img,
    product_name,
    productPriceTag,
    productQuantity,
    add_btn,
    remove_btn,
    delete_btn
  );
  cartList.appendChild(li);
};

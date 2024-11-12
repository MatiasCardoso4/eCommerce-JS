import { createCartItem } from "../../display/createCartItem.js";

const cartList = document.querySelector(".cart-list");

const savedStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export let cart = savedStorage || [];

export const createCart = () => {
  cartList.textContent = "";

  cart.forEach((p) => {
    createCartItem(p);
  });
};

window.addEventListener("DOMContentLoaded", createCart);

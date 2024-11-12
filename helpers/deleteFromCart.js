import { cart, createCart } from "../pages/CartPage/cart.js";

export const deleteFromCart = (id) => {
  cart = cart.filter((p) => p.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));

  createCart();
};

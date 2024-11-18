import { cart, createCart } from "../pages/CartPage/cart.js";

export const deleteFromCart = (id) => {
  const updatedCart = cart.filter((p) => p.id !== id);

  cart.length = 0;
  cart.push(...updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  createCart();
};

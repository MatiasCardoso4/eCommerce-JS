import { cart, createCart } from "../pages/CartPage/cart.js";

export const addToCart = (product) => {
  const ifExist = cart.some((p) => p.id === product.id);
  if (!ifExist) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart.forEach((p) => {
      p.id === product.id && p.quantity++;
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  createCart();
};

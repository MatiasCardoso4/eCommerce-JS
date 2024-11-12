import { cart, createCart } from "../pages/CartPage/cart.js";

export const removeFromCart = (product) => {
  const ifExist = cart.some((p) => p.id === product.id);
  if (product.quantity <= 1) return;
  if (ifExist) {
    cart.forEach((p) => {
      p.id === product.id && p.quantity--;
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  createCart();
};

import { showProducts } from "./showProducts.js";

export async function getProducts() {
  const url = `https://fakestoreapi.com/products`;

  try {
    const response = await fetch(url);
    const products = await response.json();
    showProducts(products);
    return products;
  } catch (error) {
    throw new Error(error);
  }
}

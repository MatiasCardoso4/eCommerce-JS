import { product, category, price } from "./inputs.js";

export function filterProducts(products) {
  return products.filter((p) => {
    return (
      p.title.toLocaleLowerCase().includes(product.toLocaleLowerCase()) &&
      (category === "all" || p.category === category) &&
      p.price >= price
    );
  });
}

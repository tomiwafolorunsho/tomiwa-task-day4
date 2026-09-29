const product = {
  id: 1,
  name: "Wireless Mouse",
  price: 12000,
  category: "Accessories",
  inStock: false,
};

function formatProduct({ name, price, inStock }) {
  const stockStatus = inStock ? "In Stock" : "Out of Stock";
  return `${name} - NGN ${price.toLocaleString()} (${stockStatus})`;
}

console.log(formatProduct(product));

// in this task once the instock boolean is true it will print Wireless Mouse - NGN 12,000 (In Stock)
// but once it is false it will print Wireless Mouse - NGN 12,000 (Out of Stock)

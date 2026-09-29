const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 12000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 45000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 18000,
    category: "Office",
    inStock: false,
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: 25000,
    category: "Electronics",
    inStock: true,
  },
  { id: 5, name: "Desk Lamp", price: 15000, category: "Office", inStock: true },
  {
    id: 6,
    name: "Webcam",
    price: 32000,
    category: "Electronics",
    inStock: false,
  },
];

function getInStockProducts(products) {
  return products.filter((product) => product.inStock);
}

function getProductNames(products) {
  return products.map((product) => product.name);
}

function findProductById(products, id) {
  return products.find((product) => product.id === id);
}

function getTotalCatalogValue(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

function groupByCategory(products) {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }

    groups[product.category].push(product);
    return groups;
  }, {});
}

console.log(getInStockProducts(products));
console.log(getProductNames(products));
console.log(findProductById(products, 3));
console.log(getTotalCatalogValue(products));
console.log(groupByCategory(products));

// in this iask i used the data from task 2 to print out this function
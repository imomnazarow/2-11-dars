import { products } from "./data.js";
console.log(products);

// import { products } from "./data.js";
// console.log(products);

function filterArr(arr, price) {
  let newProducts = arr.filter((prod) => prod["price"] >= price);
  let sortFiltProd = newProducts.sort((a, b) => b.price - a.price);
  return sortFiltProd;
}

console.log(filterArr(products, 500));

// yangi mahsulot qo'shish

// function addProduct(newProduct, products) {
//   newProduct.id = products.length == 0 ? 1 : products.at(-1).id + 1;
//   let newArr = [...prod];
// }

// const newProduct = {
//   title: "iPhone 17",
//   price: 1300,
//   category: "smartphone",
//   brand: "Apple",
//   stock: 10,
//   rating: 5,
//   isAvailable: true,
//   tags: ["phone", "premium"],
// };

// const result = addProduct(newProduct, products);

// console.log(result);

// shart
// funksiya productId va products qabul qilsin
// berilgan id bo'yicha mahsulot topib qaytarsin
// mahsulot topilmasa null qaytsin

function getProduct(productId, products) {
  let findProduct = products.find((prod) => prod.id === productId);
  if (findProduct) {
    return findProduct;
  }
  return null;
}

const result2 = getProduct(37, products);
console.log(result2);

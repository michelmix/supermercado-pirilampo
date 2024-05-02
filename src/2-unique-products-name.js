const stockProducts = require('./data.json');

// const getUniqueProductsName = () => {
//   let productsName = [];

//   for (let index = 0; index < stockProducts.length; index++) {
//     let product = stockProducts[index].productName
//     productsName.push(product);
//   }
//   return productsName;
// };

// console.log(getUniqueProductsName());

const getUniqueProductsName = () => {
  let productsName = [];

  for (const product of stockProducts) {
    let uniqueProduct = product.productName;
    productsName.push(uniqueProduct);
  }
  return productsName;
};

// console.log(getUniqueProductsName());

module.exports = { getUniqueProductsName };

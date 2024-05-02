const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let productsOutOfStock = [];

  for (const product of stockProducts) {
    if (product.quantityInStock === 0) {
      productsOutOfStock.push(product.productName);      
    }
  }
  return productsOutOfStock;
};

// console.log(getOutOfStockProducts());

module.exports = { getOutOfStockProducts };

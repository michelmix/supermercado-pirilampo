const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let countProducts = 0;

  for (const product of stockProducts) {
    countProducts += product.quantityInStock;    
  }
  return countProducts;
};

// console.log(getProductsAmount());

module.exports = { getProductsAmount };

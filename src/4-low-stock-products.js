const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let lowProductsInStock = [];

  for (const product of stockProducts) {
    if (product.quantityInStock > 0 && product.quantityInStock <= 10) {
      lowProductsInStock.push(
        `${product.productName}: ${product.quantityInStock} unidades`);      
    }    
  }
  return lowProductsInStock;
};

// console.log(getLowStockProducts());

module.exports = { getLowStockProducts };

const stockProducts = require('./data.json');

const getProductsOnSale = (productName) => {
  let productsOnSale = [];

  for (const product of stockProducts) {
    if (product.onSale === true) {
      productsOnSale.push({
        description: product.description,
        formattedPrice: `R$ ${product.price}`,
        onSale: product.onSale,
      });
    }
  }
  return productsOnSale;
};

module.exports = { getProductsOnSale };

const stockProducts = require('./data.json');

const searchProductByName = (name) => {
  let productsInfo = null;

  for (const product of stockProducts) {
    let productName = product.productName;

    if (!name) {
      return null;
    } else if (productName === name) {
      productsInfo = {
        description: product.description,
        formattedPrice: `R$ ${product.price}`,
      };
    }
  }
  return productsInfo;
};

console.log(searchProductByName('Feijão'));

module.exports = { searchProductByName };

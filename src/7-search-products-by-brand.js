const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  let productByBrand = [];

  for (const product of stockProducts) {
    if (product.brand === brand) {
      productByBrand.push({
        description: product.description,
        formattedPrice: `R$ ${product.price}`,
      })      
    }  
  }
  return productByBrand;
  
};

module.exports = { searchProductsByBrand };

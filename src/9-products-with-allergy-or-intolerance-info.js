const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let productsWithRestrictions = [];

  for (product of stockProducts) {
    const productInfo = {
      description: product.description,
      formattedPrice: `R$ ${product.price}`,
    }
    if (product["allergyOrIntolerance"]) {
      productInfo.allergyOrIntoleranceMessage = `Pode conter: ${product.allergyOrIntolerance.join(' ')}`;     
    }
    productsWithRestrictions.push(productInfo);

  }
  return productsWithRestrictions;
};

console.log(getProductsWithAllergyOrIntoleranceInfo());

module.exports = { getProductsWithAllergyOrIntoleranceInfo };

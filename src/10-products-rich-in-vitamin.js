const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let productsRichInVitamin = [];

  for (const product of stockProducts) {
    if (product.nutritionalInfo.vitamins) {
      const productInfo = {
        description: product.description,
        formattedPrice: `R$ ${product.price}`,
        vitaminsInformation: [],
      };

      const vitamins = product.nutritionalInfo.vitamins;
      if (vitamins) {
        for (const vitamin in vitamins) {
          productInfo.vitaminsInformation.push(
            `${vitamin} - ${vitamins[vitamin]}`
          );
        }
      }
      productsRichInVitamin.push(productInfo);
    }
  }
  return productsRichInVitamin;
};

console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };

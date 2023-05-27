const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P",
];

module.exports = () => {
  const productsObject = {};

  for (const product of products) {
    const [color, size] = product.split("-");
    if (!productsObject[color]) {
      productsObject[color] = {};
    }
    if (!productsObject[color][size]) {
      productsObject[color][size] = 1;
    } else {
      productsObject[color][size]++;
    }
  }

  return productsObject;
};

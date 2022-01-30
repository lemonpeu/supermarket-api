const ProductsCache = require("../cache/index");

const controller = {
  fetch: async (req, res) => {
    const products = new ProductsCache();
    try {
      const getProducts = await products.getProducts(
        "https://www.cotodigital3.com.ar/sitios/cdigi/browse/catalogo-almac%C3%A9n-golosinas/_/N-1y5dh9i"
      );

      if (!res) {
        return res.status(500).send({
          status: "error",
          message: "Error from server",
        });
      }

      if (!getProducts.length) {
        return res.status(404).send({
          status: "error",
          message: "Products not found",
        });
      }

      return res.status(200).json({
        status: "success",
        recipes: getProducts,
      });
    } catch (e) {
      console.warn(e);
    }
  },
};

module.exports = controller;

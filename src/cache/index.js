const cheerio = require("cheerio");
const axios = require("axios");

class ProductsCache {
  async getProducts(url) {
    let products = [];
    try {
      let res = await axios.get(url);
      const html = res.data;
      const $ = cheerio.load(html);
      $(".descrip_full", html).each(function () {
        const title = $(this).text().replace(/\t\n/g, "");
        products.push({ title });
      });
    } catch (e) {
      console.log("e", e);
    }

    return products;
  }
}

module.exports = ProductsCache;

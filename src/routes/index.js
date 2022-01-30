const express = require("express");
const ProductsController = require("../controller/index");

const router = express.Router();

router.get("/products", ProductsController.fetch);

module.exports = router;

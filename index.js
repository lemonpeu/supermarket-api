const express = require("express");
const cors = require("cors");
const products_route = require("./src/routes/index");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.listen(PORT, () => console.log("Server running on PORT: ", PORT));

app.use("/api", products_route);

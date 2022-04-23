const express = require('express');

const app = express();

app.use(express.json());


const menController = require("./controllers/men.controller");
const womenController = require("./controllers/women.controller");
const kidsController = require("./controllers/kids.controller");
const allProductsController = require("./controllers/allProducts.controller");

app.use("/men", menController);
app.use("/women", womenController);
app.use("/kids", kidsController);
app.use("/allProducts", allProductsController);


module.exports = app;
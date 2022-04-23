const express = require('express');

const router = express.Router();

const AllProducts = require("../models/allProducts.model");

const { getAll } = require("./crud.controller");

router.get("/", getAll(AllProducts));

module.exports = router;


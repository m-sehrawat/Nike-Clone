const express = require('express');

const router = express.Router();

const ClothData = require('../models/clothData.model');

const { getAll } = require("./crud.controller");

router.get("/", getAll(ClothData));

module.exports = router;
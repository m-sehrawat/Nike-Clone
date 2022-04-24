const express = require('express');

const router = express.Router();

const ShoeData = require('../models/shoeData.model');

const { getAll } = require("./crud.controller");

router.get("/", getAll(ShoeData));

module.exports = router;
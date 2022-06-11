const express = require('express');

const router = express.Router();

const Men = require("../models/men.model")

const { getAll } = require('./crud.controller');

router.get("/", getAll(Men));

module.exports = router;
const express = require('express');
const { getAll, post } = require('./crud.controller');

const Men = require("../models/men.model")

const router = express.Router();

router.post("/", post(Men));

router.get("/", getAll(Men));

module.exports = router;
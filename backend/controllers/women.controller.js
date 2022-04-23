const express = require('express');

const router = express.Router();

const Women = require("../models/women.model");

const { getAll } = require("./crud.controller");

router.get("/", getAll(Women));

module.exports = router;
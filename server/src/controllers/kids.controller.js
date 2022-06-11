const express = require('express');

const router = express.Router();

const Kids = require("../models/kids.model");

const { getAll } = require("./crud.controller");

router.get("/", getAll(Kids));

module.exports = router;
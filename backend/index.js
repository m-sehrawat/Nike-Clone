const express = require('express');

const app = express();

app.use(express.json());


const menController = require("./controllers/men.controller");

app.use("/men", menController);


module.exports = app;
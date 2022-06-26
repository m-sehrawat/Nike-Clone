const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


const { signup, login } = require('./controllers/auth.controller');
const menController = require("./controllers/men.controller");
const womenController = require("./controllers/women.controller");
const kidsController = require("./controllers/kids.controller");
const allProductsController = require("./controllers/allProducts.controller");
const clothDataController = require("./controllers/clothData.controller");
const shoeDataController = require("./controllers/shoeData.controller");
const favouriteController = require("./controllers/favourite.controller");
const paymentController = require('./controllers/payment.controller');
const orderController = require('./controllers/order.controller');

app.post("/signup", signup);
app.post("/login", login);

//Razorpay payment
app.use("/api/payment", paymentController);

app.use("/men", menController);
app.use("/women", womenController);
app.use("/kids", kidsController);
app.use("/allProducts", allProductsController);
app.use("/clothData", clothDataController);
app.use("/shoeData", shoeDataController);
app.use("/favourite", favouriteController);
app.use("/order", orderController);


module.exports = app;
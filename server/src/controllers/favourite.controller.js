const authorization = require('../middlewares/authorization');
const Favourite = require('../models/favourite.model');
const { postFavourite } = require('./crud.controller');
const router = require('express').Router();


router.post('/', authorization, postFavourite(Favourite));


module.exports = router;


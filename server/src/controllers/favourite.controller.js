const authorization = require('../middlewares/authorization');
const checkDuplicateFavourite = require('../middlewares/checkDuplicateFavourite');
const Favourite = require('../models/favourite.model');
const { postFavourite, getFavourites } = require('./crud.controller');
const router = require('express').Router();


router.post('/', authorization, checkDuplicateFavourite, postFavourite(Favourite));

router.get('/', authorization, getFavourites(Favourite));


module.exports = router;


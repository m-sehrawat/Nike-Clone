const authorization = require('../middlewares/authorization');
const checkDuplicateFavourite = require('../middlewares/checkDuplicateFavourite');
const Favourite = require('../models/favourite.model');
const { postFavourite, getFavourites, deleteOne } = require('./crud.controller');
const router = require('express').Router();


router.post('/', authorization, checkDuplicateFavourite, postFavourite(Favourite));

router.get('/', authorization, getFavourites(Favourite));

router.delete('/:id', deleteOne(Favourite));


module.exports = router;


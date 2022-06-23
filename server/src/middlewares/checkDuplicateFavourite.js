const Favourite = require("../models/favourite.model");

const checkDuplicateFavourite = async (req, res, next) => {
    try {

        const match = await Favourite.find({ $and: [{ title: req.body.title }, { user: req.user._id }] }).count().lean().exec();

        if(!!match){
            return res.status(400).json({status: "Failed", message: "Already present in the Favourite"});
        }

        return next();

    } catch (e) {
        
        return res.status(500).json({ message: e.message, status: 'Failed' });
    }
};

module.exports = checkDuplicateFavourite;
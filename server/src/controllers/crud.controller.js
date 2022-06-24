const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const postFavourite = (model) => async (req, res) => {
    try {
        const item = await model.create({ ...req.body, user: req.user._id });

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};


const getAll = (model) => async (req, res) => {
    try {
        const item = await model.find().lean().exec();

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};


const getFavourites = (model) => async (req, res) => {
    try {
        const item = await model.find({ user: req.user._id }).lean().exec();

        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

const deleteOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).json(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
}


module.exports = {
    post,
    getAll,
    postFavourite,
    getFavourites,
    deleteOne
};
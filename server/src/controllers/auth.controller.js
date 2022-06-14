const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const createToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_ASSESS_KEY);
}

const signup = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(500).json({ status: 'Failed', message: 'Please try with different email' });
        }

        user = await User.create(req.body);

        const token = createToken(user);

        return res.status(201).json({ user, token });

    } catch (e) {

        return res.status(500).json({ message: e.message, status: 'Failed' });
    }
};

module.exports = { signup };
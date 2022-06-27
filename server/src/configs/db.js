const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    return mongoose.connect(process.env.MONGO_PATH);
};


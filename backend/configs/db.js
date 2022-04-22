const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(`mongodb+srv://admin:admin@cluster0.mhpha.mongodb.net/Nike-Clone`);
}
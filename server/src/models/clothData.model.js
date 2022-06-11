const { Schema, model } = require('mongoose');

const clothDataSchema = new Schema({
    heading: { type: String, required: true },
    description: { type: String, required: true },
    gender: { type: String, required: true },
    img: { type: Array, required: true },
}, {
    versionKey: false
});

module.exports = model("clothData", clothDataSchema);
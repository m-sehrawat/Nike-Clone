const { Schema, model } = require("mongoose");

const womenSchema = new Schema({
    title: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Array, required: true },
    color: { type: String, required: true },
    rating: { type: Number, required: true },
    img: { type: Array, required: true },
}, {
    versionKey: false
});

module.exports = model("women", womenSchema);
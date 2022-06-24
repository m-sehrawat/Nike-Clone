const { Schema, model } = require("mongoose");


const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const womenSchema = new Schema({
    title: reqString,
    gender: reqString,
    description: reqString,
    category: reqString,
    price: reqNumber,
    size: reqArray,
    color: reqString,
    rating: reqNumber,
    img: reqArray,
}, {
    versionKey: false
});

module.exports = model("women", womenSchema);
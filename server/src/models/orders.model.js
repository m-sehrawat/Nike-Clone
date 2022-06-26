const { Schema, model } = require('mongoose');

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };


const orderSchema = new Schema({

    orderSummary: {
        subTotal: reqNumber,
        quantity: reqNumber,
        shipping: reqNumber,
        discount: reqNumber,
        total: reqNumber
    },
    cartProducts: [
        {
            title: reqString,
            gender: reqString,
            description: reqString,
            category: reqString,
            price: reqNumber,
            size: reqString,
            color: reqString,
            rating: reqNumber,
            img: reqArray,
            quantity: reqNumber
        }
    ],
    paymentDetails: {
        orderId: reqString,
        razorpayOrderId: reqString,
        razorpayPaymentId: reqString,
    }
}, {
    versionKey: false,
    timestamps: true
});


module.exports = model('order', orderSchema);
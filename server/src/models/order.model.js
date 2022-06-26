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
    },
    shippingDetails: {
        firstName: reqString,
        lastName: reqString,
        addressLine1: reqString,
        addressLine2: { type: String, required: false },
        locality: reqString,
        pinCode: reqNumber,
        state: reqString,
        country: reqString,
        email: reqString,
        mobile: reqNumber
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }

}, {
    versionKey: false,
    timestamps: true
});


module.exports = model('order', orderSchema);
const router = require('express').Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();


//Saving the order id to use it for verification purpose
let order_id;

//To create order id
router.post('/order', async (req, res) => {
    try {

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString('hex')
        };

        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: 'Something went wrong', status: 'Failed' });
            }
            order_id = order.id;
            res.status(201).json(order);
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


//To verify payment
router.post('/verify', async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_signature } = req.body;
        
        const sign = order_id + '|' + razorpay_payment_id;

        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');

        if (razorpay_signature === expectedSign) {
            return res.status(201).json({ message: 'Payment verified successfully' });

        } else {
            return res.status(400).json({ message: 'Invalid signature sent!' });;
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
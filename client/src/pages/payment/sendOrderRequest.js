import axios from "axios";

export const sendOrderRequest = async (form, orderId, response, orderSummary, cartProducts, token) => {

    const payload = {
        orderSummary,
        cartProducts,
        shippingDetails: form,
        paymentDetails: {
            orderId,
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id
        }
    };

    console.log('payload:', payload);

    try {
        let res = await axios.post('/order', payload, { headers: { 'Authorization': `Bearer ${token}` } })
        console.log('res:', res.data)
        alert('done');
    } catch (err) {
        console.log(err);
    }


}
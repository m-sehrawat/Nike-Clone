import axios from "axios";
import { setToast } from "../../utils/extraFunctions";


export const sendOrderRequest = async (shippingDetails, orderId, response, orderSummary, cartProducts, token, toast) => {

    const payload = {
        orderSummary,
        cartProducts,
        shippingDetails,
        paymentDetails: {
            orderId,
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id
        }
    };

    try {
        const { data } = await axios.post('/order', payload, { headers: { 'Authorization': `Bearer ${token}` } });

        setToast(toast, 'Order placed successfully', 'success');

    } catch (err) {
        console.log(err);
    }
};
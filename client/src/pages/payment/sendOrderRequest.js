export const sendOrderRequest = ( form, data, response, orderSummary, cartProducts ) => {

    const payload = {
        orderSummary,
        cartProducts,
        shippingDetails: form,
        paymentDetails: {
            orderId: data.id,
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id
        }
    };


}
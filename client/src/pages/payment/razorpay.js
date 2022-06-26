import axios from "axios";
import { nikeLogoPayment } from "../../constants/images";


export const initPayment = async ({ firstname, lastName, mobile, email }, data) => {

    const options = {
        key: 'rzp_test_xntxgn3ZFlbBcL',
        order_id: data.id,
        amount: data.amount,
        currency: data.currency,
        image: nikeLogoPayment,
        name: 'Nike Clone',
        description: 'Thanks for purchasing',

        prefill: {
            name: `${firstname} ${lastName}`,
            email: email,
            contact: mobile
        },

        handler: async function (response) {
            console.log('response:', response)
            try {
                const { data } = await axios.post('/api/payment/verify', response);
                console.log('data:', data);
                alert(data.message);

            } catch (error) {
                console.log(error);
            }
        },

        theme: { color: "#3399cc" }
    };

    const rzp = new window.Razorpay(options);

    //If payment failed 
    rzp.on('payment.failed', (response) => {
        console.log(response.error);
        alert('Payment failed, please try again');
    });

    //Open razorpay window
    rzp.open();
};

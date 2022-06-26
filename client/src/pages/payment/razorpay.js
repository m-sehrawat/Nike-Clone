import { nikeLogo } from "../../constants/images";


export const displayRazorpay = ({ firstName, lastName, email, mobile }, total) => {

    const options = {
        key: "rzp_test_xntxgn3ZFlbBcL",
        amount: (total * 100),
        currency: 'INR',
        name: 'Nike Clone',
        description: 'Thank you for purchasing with Nike Clone',
        image: nikeLogo,
        order_id: "order_Jm1jub3lfIRn5e", // order_9A33XWu170gUtm This is a sample Order ID. Pass the `id` obtained in the response of Step 1

        handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        prefill: {
            name: `${firstName} ${lastName}`,
            email: email,
            contact: mobile
        },
        theme: { color: "#3399cc" }
    };

    const rzp = new window.Razorpay(options);

    rzp.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
    
    rzp.open();
};

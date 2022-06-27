import { Box, Divider, Text } from "@chakra-ui/react";
import { dateFormat, numberWithCommas } from "../../utils/extrafunctions";
import { PriceText } from "../theme/Theme";


export const Summary = ({ amount , createdAt}) => {

    const { discount, productCount, shippingCharges, totalMRP, payableAmount } = amount;
    const {date, time} = dateFormat(createdAt)

    return (
        <>
            <Box className="shadow" py={'15px'} px={'25px'}>
                <Text fontWeight={600} fontSize={'25px'} mb={'10px'} textAlign={'center'}>ORDER SUMMARY</Text>
                <Divider />
                <PriceText fs={'18px'} title={'Order Date'} num={date} />
                <PriceText fs={'18px'} title={'Order Time'} num={time} />
                <Divider />
                <PriceText fs={'18px'} title={'Total MRP'} num={`₹ ${numberWithCommas(totalMRP)}`} />
                <PriceText fs={'18px'} title={'Shipping Charges'} num={`₹ ${shippingCharges}`} />
                <PriceText fs={'18px'} title={'Quantity'} num={productCount} />
                <PriceText fs={'18px'} title={'Coupon Discount'} num={`₹ ${numberWithCommas(discount)}`} />
                <Divider />
                <PriceText fs={'20px'} fw={600} title={'Amount Payable'} num={`₹ ${numberWithCommas(payableAmount)}`} />
            </Box>
        </>
    );
};
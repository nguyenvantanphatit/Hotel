/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const PayPalButton = () => {
    const navigate = useNavigate();
    const handleApprove = async (_data: any, actions: any) => {
        try {
            const details = await actions.order.capture();
            if (details) {
                toast.success("Your payment was successful!");
                setTimeout(() => {
                    navigate("/invoice");
                }, 1500);
            }
        } catch (error) {
            toast.error("An error occurred during payment.");
        }
    };

    const handleCreateOrder = async (_data: any, actions: any) => {
        try {
            const order = await actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: "100.00",
                        },
                    },
                ],
            });
            return order;
        } catch (error) {
            toast.error("An error occurred while creating the order.");
        }
    };

    return (
        <PayPalButtons
            createOrder={handleCreateOrder}
            onApprove={handleApprove}
        />
    );
};

export default PayPalButton;

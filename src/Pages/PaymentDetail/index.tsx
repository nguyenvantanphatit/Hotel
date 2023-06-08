import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Col, Row, Input, Form, Button } from 'antd';
import Desc from '../PaymentDetail/Desc'
import Total from '../PaymentDetail/Total'
import PayPalButton from './PayPalButton';
import { PaymentDetailForm } from './type'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './index.css'
export default function PaymentDetail() {
    const [email_address, setEmail] = useState('');
    const [card_number, setCard] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    const [CVV, setCvv] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleValidation = () => {
        if (!email_address || !card_number || !expiry_date || !CVV) {
            return false;
        }
        if (!isValidEmail(email_address)) {
            toast.error('Please enter a valid email address');
            return false;
        }
        return true;
    };
    const isValidEmail = (email: string): boolean => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const handleSubmit = async () => {
        if (handleValidation()) {
            setSubmitted(true);
        }
    };

    return (
        <PayPalScriptProvider options={{ "client-id": "Afyq4GU8bCtnnAjmJOaw0tPJpqMLl5hPq-Lg5aSovTIPBNVIM3XcETjNd1CbeAXLcvmt-Rkvb56m1P2L" }}>
            <Row className="payment">
                <Col span={12}>
                    <h2 className="payment-detail-title">Payment detail</h2>
                    <Form<PaymentDetailForm> onFinish={handleSubmit} className="payment-detail-form">
                        <p className="form-label">Email</p>
                        <Form.Item name="email_address" rules={[{ required: true, message: 'Please enter your email address' }]}>
                            <Input className="input" placeholder="@Email.com" value={email_address} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>
                        <p className="form-label">Card Number</p>
                        <Form.Item name="card_number" rules={[{ required: true, message: 'Please enter your card number' }]} >
                            <Input className="input" placeholder="xxxx xxxx xxxx xxxx" value={card_number} onChange={(e) => setCard(e.target.value)} />
                        </Form.Item>
                        <Row>
                            <Col span={12}>
                                <p className="form-label">Expiry Date</p>
                                <Form.Item name="expiry_date" wrapperCol={{ span: 20 }} rules={[{ required: true, message: 'Please enter the expiry date' }]} >
                                    <Input className="input" placeholder="mm/yy" value={expiry_date} onChange={(e) => setExpiry_date(e.target.value)} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <p className="form-label">CVV</p>
                                <Form.Item name="CVV" wrapperCol={{ span: 24 }} rules={[{ required: true, message: 'Please enter the CVV' }]} >
                                    <Input className="input" value={CVV} placeholder="xxx" onChange={(e) => setCvv(e.target.value)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <ToastContainer />
                        <Total />
                        {submitted ? (
                            <PayPalButton />
                        ) : (
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    className="make-payment-button"
                                >
                                    <span className="btn-payment">Thanh Toán</span>
                                </Button>
                            </Form.Item>
                        )}

                    </Form>
                </Col>
                <Col span={12}>
                    <div className="desc-paypal">
                        <Desc />
                    </div>
                </Col>
            </Row>
        </PayPalScriptProvider>
    );
}
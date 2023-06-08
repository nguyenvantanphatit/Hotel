import React, { useEffect, useState } from 'react';
import { Row, Image } from 'antd';
import Invoice_1 from '../../Img/invoice_1.svg';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../src/firebase';
import './InvoiceForm.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const InvoiceForm: React.FC = () => {
    const [billData, setBillData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'bill'));
                const data = querySnapshot.docs.map((doc) => {
                    const billItem = doc.data();
                    const paymentTime = new Date(billItem.paymentTime.toDate());
                    return {
                        ...billItem,
                        paymentTime: paymentTime.toLocaleDateString(),
                    };
                });
                setBillData(data);
            } catch (error) {
                console.error('Error retrieving bill data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="invoice-form">
                {billData.map((billItem) => (
                    <React.Fragment key={billItem.id}>
                        <Row className="invoice-header">
                            <Image src={Invoice_1} />
                            <p className="invoice-header-sub">Payment success</p>
                            <h2 className="invoice-header-sub-h2">{billItem.amount}{billItem.unit}</h2>
                        </Row>
                        <div className="invoice-line-header"></div>
                        <Row className="invoice-title">
                            <p className="invoice-sub">paymentId</p>
                            <h2 className="invoice-sub-h2">{billItem.paymentId}</h2>
                        </Row>
                        <Row className="invoice-title">
                            <p className="invoice-sub">Payment Time</p>
                            <h2 className="invoice-sub-h2">{billItem.paymentTime}</h2>
                        </Row>
                        <Row className="invoice-title">
                            <p className="invoice-sub">Payment Method</p>
                            <h2 className="invoice-sub-h2">{billItem.paymentMethod}</h2>
                        </Row>
                        <Row className="invoice-title">
                            <p className="invoice-sub">Sender</p>
                            <h2 className="invoice-sub-h2">{billItem.senderId}</h2>
                        </Row>
                        <div className="invoice-line-bottom"></div>
                        <Row className="invoice-bottom">
                            <p className="invoice-sub">Amount</p>
                            <h2 className="invoice-sub-h2">{billItem.amount}{billItem.unit}</h2>
                        </Row>
                    </React.Fragment>
                ))}
                <Link to="/">
                    <ArrowRightOutlined style={{ fontSize: 40, color: '#000' }} />
                </Link>
            </div>
        </>
    );
};

export default InvoiceForm;

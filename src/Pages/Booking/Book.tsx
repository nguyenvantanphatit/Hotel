import { Row, Col, Image } from 'antd';
import imgbooking from '../../Img/img-booking.svg';
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'antd';
import { DatePicker, Space, Select } from 'antd';
import { UserAvatarGroup } from './Avatar';
import { RoomStart } from './Start';
import { Rule } from 'antd/lib/form';
import { CaretDownOutlined } from '@ant-design/icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Book.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../src/firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const { RangePicker } = DatePicker;
const Book: React.FC = () => {
    const navigate = useNavigate();
    const selectRules: Rule[] = [{ required: true, message: 'Please select a value' }];
    const datepickerRules: Rule[] = [{ required: true, message: 'Please select a date' }];
    const handleSubmit = (values: any) => {
        if (values.selectField && values.dateField) {
            toast.success('Form submitted successfully!');
            setTimeout(() => {
                navigate("/pay");
            }, 1500);
        } else {
            toast.error('Please fill in all required fields');
        }
    };
    const [book, setbook] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'booking'));
                const data = querySnapshot.docs.map((doc) => doc.data());
                setbook(data);
                console.log('data', data)
                if (data.length > 0) {
                    const RoomTypeItem = data[0];
                    for (const key in RoomTypeItem) {
                        console.log(`Field: ${key}, Type: ${typeof RoomTypeItem[key]}`);
                    }
                }
            } catch (error) {
                console.error('Error retrieving bill data:', error);
            }
        };

        fetchData();
        console.log(book);
    }, []);
    return (
        <>
            <Form onFinish={handleSubmit}>
                <Col className='col-form'>
                    <h2 className='king'>King Room</h2>
                    <RoomStart />
                    <Row className='book-avatar'>
                        <UserAvatarGroup />
                        <p>39 review</p>
                    </Row>
                    <Row className='book-title'>
                        <p className='lorem'>orem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <h2 className='more-title' style={{ textDecoration: 'underline' }}>Xem thêm</h2>
                    </Row>
                    <Row>
                        <Image src={imgbooking} preview={false} className='img-book' />
                    </Row>
                    <Row className='row-btn'>
                        <Space wrap>
                            <Space >
                                <Form.Item
                                    name="dateField"
                                    rules={datepickerRules}
                                    className='space'
                                >
                                    <RangePicker style={{ width: 216.29, borderRadius: 20 }} />
                                </Form.Item>
                                <Form.Item
                                    name="selectField"
                                    rules={selectRules}
                                    className='space'
                                >
                                    <Select
                                        style={{ width: 216.29, borderRadius: 20 }}
                                        options={[{ value: 'Room', label: 'Room' }]}
                                        suffixIcon={<CaretDownOutlined />}
                                    />
                                </Form.Item>

                            </Space>
                            <Space>
                                <Form.Item
                                    name="selectField"
                                    rules={selectRules}
                                    className='space'
                                >
                                    <Select
                                        style={{ width: 216.29, borderRadius: 20 }}
                                        options={[{ value: 'Room', label: 'Room' }]}
                                        suffixIcon={<CaretDownOutlined />}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="selectField"
                                    rules={selectRules}
                                    className='space'
                                >
                                    <Select
                                        style={{ width: 216.29, borderRadius: 20 }}
                                        options={[{ value: 'Room', label: 'Room' }]}
                                        suffixIcon={<CaretDownOutlined />}
                                    />
                                </Form.Item>

                            </Space>
                        </Space>
                    </Row>
                    <ToastContainer />
                    <Row className='row-btn-booking'>
                        <Button htmlType="submit" className='btn-booking-rom'>
                            <Link to="/pay">Chọn Phòng</Link ></Button>
                    </Row>
                </Col >
            </Form>
        </>
    )
}
export default Book;
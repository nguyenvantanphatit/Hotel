import { Col, Row, Image } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { RoomData } from './type';
import './Desc.css';
import Payment_1 from '../../Img/payment.svg';
export default function Desc() {
    const roomData: RoomData[] = [
        {
            src: Payment_1,
            title: 'King room',
            description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            services: 'Wifi, Gym, food',
            time: '12/06/2023 - 12/08/2023'
        },
    ];

    return (
        <>
            {
                roomData.map((room, index) => (
                    <Col key={index}>
                        <Row>
                            <Row>
                                <Col>
                                    <Image src={room.src} />
                                </Col>
                            </Row>
                            <Row className='form-payment'>
                                <h5 className="title-payment">{room.title}</h5>
                                <p className="description-payment">{room.description}</p>
                            </Row>
                            <Row className="title-line-payment" >
                                <h5 className="title-payment">Dịch vụ</h5>
                                <p className='text-right-payment'>{room.services}</p>
                            </Row>
                            <Row className="title-time-payment" >
                                <h5 className="title-payment">Thời gian</h5>
                                <p className='text-right-1-payment'>{room.time}</p>
                            </Row>
                            <Row className="title-line-payment">
                                <Col span={24}>
                                    <p className="title checkmark">
                                        <CheckCircleOutlined style={{ marginRight: 10 }} /> Secure Payment
                                    </p>
                                </Col>
                            </Row>
                        </Row>
                    </Col >
                ))
            }
        </>
    );
}

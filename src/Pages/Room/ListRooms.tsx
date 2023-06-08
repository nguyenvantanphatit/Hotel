import React from 'react';
import { Card, Row, Col, Space, Tooltip, Button } from 'antd';
import { Link } from 'react-router-dom';
import SmileIcons from './SmileIcons';
import './FormRoom.css'
interface ListRoomsProps {
    isGridView: boolean;
    rooms: Room[];
}

interface Room {
    id: number;
    title: string;
    type: string;
    modal?: string;
    modalContent?: string[];
    time: string;
}

const ListRooms: React.FC<ListRoomsProps> = ({ isGridView, rooms }) => {
    const { Meta } = Card;

    return (
        <Row gutter={32}>
            {rooms.map((room) => (
                <Col span={isGridView ? 4 : 23} key={room.title} className='room-list'>
                    <Card
                        title={room.title}
                        extra={
                            room.modal ? (
                                <Tooltip color='#FC7D72'
                                    title={
                                        <>
                                            {room.modalContent?.map((item, idx) => (
                                                <p key={idx}>{item}</p>
                                            ))}
                                        </>
                                    }
                                >
                                    <Button type="link" className="btn">
                                        {room.modal}
                                    </Button>
                                </Tooltip>
                            ) : null
                        }
                        className='card'
                    >
                        <Link to={`/room/${room.id}`}>
                            <SmileIcons />
                        </Link>
                        <Meta
                            title={
                                <Space>
                                    <p className='time'>{room.time}</p>
                                </Space>
                            }
                        />
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ListRooms;

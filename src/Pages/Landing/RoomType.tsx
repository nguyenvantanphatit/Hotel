import { useEffect, useState } from 'react';
import { Row, Col, Image } from "antd";
import './RoomType.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
import RoomType_1 from "../../Img/land-room-type-1.svg";
import RoomType_2 from "../../Img/land-room-type-2.svg";
import RoomType_3 from "../../Img/land-room-type-3.svg";
import RoomType_4 from "../../Img/land-room-type-4.svg";
import RoomType_5 from "../../Img/land-room-type-5.svg";
import RoomType_6 from "../../Img/land-room-type-6.svg";

const RoomType = () => {
    const [room, setroom] = useState<any[]>([]);
    const [roomType, setroomType] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'rooms'));
                const data1 = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setroom(data1);
                console.log('rooms', data1)
            } catch (error) {
                console.error('Error retrieving bill data:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'roomTypes'));
                const data = querySnapshot.docs.map((doc) => doc.data());
                setroomType(data);
                console.log('roomTypes', data)
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
    }, []);
    const getImageByRoomType = (roomType: string) => {
        switch (roomType) {
            case 'Luxury room':
                return RoomType_1;
            case 'Double room':
                return RoomType_2;
            case 'King room':
                return RoomType_3;
            case 'Queen room':
                return RoomType_4;
            case 'Lanai room':
                return RoomType_5;
            case 'Single room':
                return RoomType_6;
            default:
                return '';
        }
    };
    const handleRoomTypeClick = async (roomTypeId: string) => {
        try {
            const q = query(collection(db, 'rooms'), where('roomTypeId', '==', roomTypeId));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setroom(data);
            console.log('Filtered rooms data:', data);
        } catch (error) {
            console.error('Error filtering rooms data:', error);
        }
    };


    return (
        <>
            <h2 className="room">Room type</h2>
            <Row className="row-type">
                {roomType.map((type) => (
                    <Col className="col-type" key={type.name}
                        onClick={() => handleRoomTypeClick(type.id)}>
                        <h2 className="header-type">{type.name} Room</h2>
                    </Col>
                ))}
            </Row>
            <Row gutter={49}>
                {room.map((room) => (
                    <Col span={6} className="room-col" key={room.name}>
                        <Link to={`/${room.id}`}>
                            < Image src={getImageByRoomType(room.name)} preview={false} />
                            <h2 className="title">{room.name}</h2>
                            <p className="desc">{room.description}</p>
                        </Link>
                    </Col>
                ))}
            </Row >
        </>
    );
};

export default RoomType;

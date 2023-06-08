import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { collection, doc, getDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Row, Col, Image, Button } from 'antd';
import RoomDetail_1 from "../../Img/detail.svg";
import { UserAvatarGroup } from '../Booking/Avatar';
import { RoomStart } from '../Booking/Start';
import './RoomDetail.css'
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import imgbooking from '../../Img/img-booking.svg';
// import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const RoomDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [room, setRoom] = useState<any>(null);
    const [book, setbook] = useState<any[]>([]);
    const [selectedRange, setSelectedRange] = useState<any>(null);

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const roomRef = doc(collection(db, 'rooms'), id);
                const roomSnapshot = await getDoc(roomRef);
                if (roomSnapshot.exists()) {
                    const roomData = {
                        id: roomSnapshot.id,
                        roomTypeId: roomSnapshot.data().roomTypeId,
                        statusId: roomSnapshot.data().statusId,
                        ...roomSnapshot.data()
                    };
                    setRoom(roomData);
                } else {
                    console.log('Room not found');
                }
            } catch (error) {
                console.error('Error retrieving room data:', error);
            }
        };

        fetchRoomData()
    }, [id]);
    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('userId');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

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
    if (!room) {
        return <div>Loading...</div>;
    }
    const handleBookRoom = async () => {
        try {
            const checkInDate = selectedRange ? selectedRange[0].startOf('day').toDate() : null;
            const checkOutDate = selectedRange ? selectedRange[1].endOf('day').toDate() : null;
            const userId = localStorage.getItem('userId');
            if (!userId) {
                navigate('/login');
                return;
            }
            const bookingData = {
                checkIn: checkInDate,
                checkOut: checkOutDate,
                createdAt: serverTimestamp(),
                roomId: room.id,
                roomTypeId: room.roomTypeId,
                statusId: room.statusId,
                userId: userId,
            };
            const docRef = await addDoc(collection(db, 'booking'), bookingData);

            console.log('Booking added with ID: ', docRef.id);
            navigate('/pay');
        } catch (error) {
            console.error('Error adding booking: ', error);
        }
    };

    return (
        <>
            <Row>
                <Col span={12}>
                    <Image src={RoomDetail_1} preview={false} />
                </Col>
                <Col span={10} className='col-form-detail'>

                    <h2 className='king-detail'>{room.name}</h2>
                    <RoomStart />
                    <Row className='book-avatar-detail'>
                        <UserAvatarGroup />
                        <p>39 review</p>
                    </Row>
                    <Row className='book-title-detail'>
                        <p className='lorem-detail'>{room.name}</p>
                        <h2 className='more-title-detail'>{room.description}</h2>

                    </Row>
                    <Row>
                        <Image src={imgbooking} preview={false} className='img-book' />
                    </Row>
                    <RangePicker
                        style={{ width: 236.29, borderRadius: 20 }}
                        value={selectedRange}
                        onChange={(dates) => setSelectedRange(dates)}
                    />
                    <Link to="/">
                        <ArrowRightOutlined style={{ fontSize: 35, color: '#000', marginLeft: 20 }} />
                    </Link>
                    <Button className='btn-book-detail' onClick={handleBookRoom}>Chọn Phòng</Button>
                </Col>
            </Row>
        </>
    );
};

export default RoomDetail;
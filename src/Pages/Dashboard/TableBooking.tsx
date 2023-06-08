import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Avatar from 'react-avatar';
import { db } from '../../firebase';
import {
    CollectionReference,
    Timestamp,
    collection,
    onSnapshot,
    query,
    getDoc,
    doc as firestoreDoc
} from "firebase/firestore";
import Table_1 from '../../Img/dash.svg';
const TableBooking: React.FC = () => {
    interface DataType {
        key: React.Key;
        name: string;
        avatar: string;
        phone: string;
        userId: string;
        roomTypeId: string;
        checkIn: Timestamp;
        checkOut: Timestamp;
        statusId: string;
        roomType: string;
        status: string;
    }

    const handleDelete = (key: React.Key) => {
        const newData = bookingData.filter((item) => item.key !== key);
        setBooking(newData);
    };
    const columns: ColumnsType<DataType> = [
        {
            title: "Avatar",
            dataIndex: "avatar",
            render: (avatar: string) => <Avatar src={avatar} size="40" round={true} />
        },
        {
            title: "Tên",
            dataIndex: "name",
        },
        {
            title: "Điện thoại",
            dataIndex: "phone",
        },
        {
            title: "Loại phòng",
            dataIndex: "roomTypeId",
        },
        {
            title: "Check In",
            dataIndex: "checkIn",
            render: (checkIn) => formatDateTime(checkIn)
        },
        {
            title: "Check Out",
            dataIndex: "checkOut",
            render: (checkOut) => formatDateTime(checkOut)
        },

        {
            title: "Tình trạng",
            dataIndex: "status",
            render: (status) => (
                <Tag color="#F1AC4D" >{status}</Tag>
            ),
        },
        {
            title: 'Hành động',
            dataIndex: 'operation',
            render: (_, record: { key: React.Key }) =>
                bookingData.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <img width="30" height="30" src={Table_1} />
                    </Popconfirm>
                ) : null,
        },
    ];
    function formatDateTime(timestamp: { seconds?: number, nanoseconds?: number }) {
        if (timestamp && timestamp.seconds) {
            const date = new Date(timestamp.seconds * 1000 + (timestamp.nanoseconds || 0) / 1000000);
            return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        }
        return '';
    }


    const [bookingData, setBooking] = useState<DataType[]>([]);
    useEffect(() => {
        const colRef: CollectionReference = collection(db, 'booking');
        const queries = query(colRef);
        const unsubscribe = onSnapshot(queries, async (snapshot) => {
            const data = await Promise.all(
                snapshot.docs.map(async (doc) => {
                    const req = doc.data();
                    const booking = {
                        key: doc.id,
                        checkIn: req.checkIn,
                        checkOut: req.checkOut,
                        userId: req.userId,
                        roomTypeId: req.roomTypeId,
                        statusId: req.statusId,
                        name: '',
                        avatar: req.avatar,
                        phone: '',
                        roomType: '',
                        status: '',
                    };
                    const statusRef = firestoreDoc(db, 'status', "1");
                    const statusDoc = await getDoc(statusRef);
                    if (statusDoc.exists()) {
                        const statusData = statusDoc.data();
                        if (statusData) {
                            booking.status = statusData.name;
                        } else {
                            console.log('statusData is null');
                        }
                    } else {
                        console.log('statusDoc does not exist');
                    }
                    let userRef;
                    if (req.userId === "0") {
                        userRef = firestoreDoc(db, 'users', "1");
                    } else {
                        userRef = firestoreDoc(db, 'users', req.userId);
                    }
                    const userDoc = await getDoc(userRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        booking.name = userData.name;
                        booking.avatar = userData.avatar;
                        booking.phone = userData.phoneNumber;
                    }
                    else {
                        console.log('Error');
                    }

                    return booking;
                })
            );
            setBooking(data);
        });
        return () => unsubscribe();
    }, []);

    console.log(bookingData);


    return (
        <React.Fragment>
            <Table columns={columns} dataSource={bookingData} size="middle" />
        </React.Fragment>
    );
};

export default TableBooking;
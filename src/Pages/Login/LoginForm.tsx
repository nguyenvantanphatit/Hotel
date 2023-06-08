import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';
import { collection, onSnapshot, doc, setDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Row, Col, Image } from 'antd';
import bookingSvg from '../../Img/payment.svg';
import './LogForm.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [account, setAccount] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        const colRef = collection(db, 'users');
        const unsubscribe = onSnapshot(
            colRef,
            (snapshot) => {
                const respon = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    };
                });
                setAccount(respon);
            },
            (error) => {
                console.log(error);
            }
        );
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is logged in:', user);
            } else {
                console.log('User is logged out');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        try {
            const auth = getAuth();
            console.log(auth);
            const querySnapshot = await getDocs(collection(db, 'users'));
            const users = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));

            const user = users.find((user) => user.data.name === name);

            if (user) {
                const userId = user.id;

                const userDocRef = doc(db, 'users', userId);
                await setDoc(userDocRef, {
                    name: name,
                    phoneNumber: phoneNumber
                });

                console.log('User logged in:', name);
                toast.success('Login successful!');

                localStorage.setItem('userId', userId);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                console.log('User not found');
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(account);

    return (
        <Form onFinish={handleLogin}>
            <Row className='row-login'>
                <Col span={10}>
                    <Image src={bookingSvg} className='img-login' preview={false} />
                </Col>
                <Col span={12} className='col-login'>
                    <Form.Item>
                        <p className='p-login'>Name</p>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='input-login'
                        />
                    </Form.Item>
                    <p className='p-login'>Phone Number</p>
                    <Form.Item >
                        <Input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className='input-login'
                        />
                    </Form.Item>
                    <div className='div-login'>
                        <Form.Item>
                            <Button className='btn-login' htmlType="submit">Login</Button>
                        </Form.Item>
                        <Form.Item>
                            <p className="p-register">New account? <Link to="/sign">Register</Link></p>
                        </Form.Item>
                    </div>

                </Col>
            </Row>
            <ToastContainer />
        </Form >
    );
}

export default LoginForm;

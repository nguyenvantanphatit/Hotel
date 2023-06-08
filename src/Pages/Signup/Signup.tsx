import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { SignupFormProps } from './type';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Google from '../../Img/google.svg';
import Facebook from '../../Img/facebook.svg';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../../src/firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Signup.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
const SignupForm: React.FC<SignupFormProps> = ({
  fullname,
  phoneNumber,
  email,
  password,
  referralCode,
}) => {
  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  console.log(signInWithGoogle);
  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();

      provider.addScope('profile');
      provider.addScope('email');
      provider.addScope('phone');

      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);

      const currentUser = result.user;
      if (currentUser) {
        const { displayName, phoneNumber } = currentUser;

        await addDoc(collection(db, 'users'), {
          name: displayName,
          phoneNumber: phoneNumber
        });

        toast.success('Form submitted successfully!');
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error('Error signing up with Google:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      const { fullname, phoneNumber } = values;
      await addDoc(collection(db, 'users'), {
        name: fullname,
        phoneNumber: phoneNumber
      });

      toast.success('Form submitted successfully!');
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const [signupForm, setsignupForm] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setsignupForm(data);
        console.log("data", data);
        if (data.length > 0) {
          const billItem = data[0];
          for (const key in billItem) {
            console.log(`Field: ${key}, Type: ${typeof billItem[key]}`);
          }
        }
      } catch (error) {
        console.error('Error retrieving bill data:', error);
      }
    };

    fetchData();
    console.log(signupForm);
  }, []);
  return (
    <div className="signup-container">
      <Form onFinish={handleSubmit} className='form'>
        <CloseOutlined className="close-icon" />
        <h2 className="sign-title">Get Your Free Account</h2>
        <Row>
          <Col span={12}>
            <p className="form-sign">Full Name</p>
            <Form.Item
              name="fullname"
              rules={[{ required: true, message: 'Please input your full name!' }]}
              className="form-item"
            >
              <Input defaultValue={fullname} className='input' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <p className="form-sign">User Name</p>
            <Form.Item
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your username!' }]}

              className="form-item"
            >
              <Input defaultValue={phoneNumber} className='input' />
            </Form.Item>
          </Col>
        </Row>
        <p className="form-sign">Email</p>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
          className="form-item-1"
        >
          <Input defaultValue={email} className='input' />
        </Form.Item>
        <p className="form-sign">Password</p>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          className="form-item-1"
        >
          <Input.Password defaultValue={password} className='input' />
        </Form.Item>
        <p className="form-sign">Referral Code</p>
        <Form.Item
          name="referralCode"
          rules={[{ required: true, message: 'Please input your referralCode!' }]}
          className="form-item-1"
        >
          <Input defaultValue={referralCode} className='input' />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="submit-button">
            Sign Up
          </Button>
        </Form.Item>
        <Form.Item className="or-divider">
          <div className="divContainer">
            <div className="divLine"></div>
            <span className="divText">OR</span>
            <div className="divLineLeft"></div>
          </div>
        </Form.Item>
        <Form.Item className='login'>
          <p className="login-link">Already have an account? <a href="/login" className='login-a'>Login</a></p>
        </Form.Item>

        <Form.Item>
          <Button className="facebook-button">
            <img src={Facebook} alt="" className="facebook-icon" />
            Sign up with Facebook
          </Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={handleGoogleSignup} className="google-button">
            <img src={Google} alt="" className="google-icon" />
            Sign up with Google
          </Button>
        </Form.Item>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default SignupForm;
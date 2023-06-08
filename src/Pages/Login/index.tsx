import React from 'react';
import { Layout } from 'antd';
import LoginForm from './LoginForm';
import './index.css'
const Login: React.FC = () => {
    return (
        <>
            <Layout >
                <Layout >
                    <Layout className='layout-login'>
                        <LoginForm />
                    </Layout>
                </Layout >
            </Layout >
        </>
    );
};

export default Login;

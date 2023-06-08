import React from 'react';
import { Layout } from 'antd';
import About from './About';
const Service: React.FC = () => {
    return (
        <>
            <Layout >
                <Layout >
                    <Layout style={{ background: '#FFFFFF' }}>
                        <About />
                    </Layout>
                </Layout >
            </Layout >
        </>
    );
};

export default Service;

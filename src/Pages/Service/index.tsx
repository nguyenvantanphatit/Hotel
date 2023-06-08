import React from 'react';
import { Layout, Col, Row } from 'antd';
import SideBar from "../Layout/SideBar"
import HeaderBar from "../Layout/HeaderBar"
import ServiceForm from './Service';
const Service: React.FC = () => {
    return (
        <>
            <Layout >
                <Layout >
                    <SideBar />
                    <Layout>
                        <HeaderBar />
                        <Row style={{ background: '#FFFFFF' }}>
                            <Col style={{ marginLeft: '270px' }}>
                                <ServiceForm />
                            </Col>
                        </Row>
                    </Layout>
                </Layout >
            </Layout >
        </>
    );
};

export default Service;

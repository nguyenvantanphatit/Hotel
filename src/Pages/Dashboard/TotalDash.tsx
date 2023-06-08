import React from 'react';
import { Row, Col } from 'antd';
import './TotalDash.css'
const TotalDash: React.FC = () => {
    return (
        <Row className='row-dash'>
            <Col className='total-day'>
                <h2 className='total-day-1'>Doanh thu ngày</h2>
            </Col>
            <Col >
                <h2 className='total-day-2'>Tổng quan</h2>
            </Col>
        </Row>
    );
};

export default TotalDash;
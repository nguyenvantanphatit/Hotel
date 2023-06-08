import React from 'react';
import { Col, Row } from 'antd';
import Book from './Book'
import ImageBar from './ImageBar'
const Booking: React.FC = () => {

  return (
    <>
      <Row>
        <Col span={12}>
          <ImageBar />
        </Col>
        <Col span={6}>
          <Book />
        </Col>
      </Row >
    </>
  )
}
export default Booking;
import { Button, Image, Row, Col } from "antd";
import { PhoneOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './HeaderBar.css';
import HeaderBar_1 from '../../Img/headerbar.svg';
import { Link } from 'react-router-dom';

const HeaderBar: React.FC = () => {
    return (
        <>
            <div className="header-container">
                <Image src={HeaderBar_1} preview={false} className="imgheader" />
                <div className="overlay-top">
                    <Row className="header-row-top">
                        <Col className="top">
                            <Link to="/" className="top-desc">Home</Link>
                            <Link to="/room" className="top-desc">Room</Link>
                            <Link to="/service" className="top-desc">Services</Link>
                            <Link to="/about" className="top-desc">About us</Link>
                        </Col>
                    </Row>
                </div>
                <div className="overlay-bottom">
                    <Row className="header-row-bottom">
                        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="bottom-1">
                            <h2 className="bottom-desc-1">
                                <PhoneOutlined />090 - 000 - 000
                            </h2>
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="bottom-2">
                            <h2 className="bottom-desc-2">Save 10% off booking right now!</h2>
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="bottom-3">
                            <Button className="bottom-desc-3">
                                <h2>Book Now</h2><ArrowRightOutlined className="header-icon" />
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div >
        </>
    );
}

export default HeaderBar;

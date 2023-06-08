import { Row, Col, Image } from "antd";
import './Services.css'
import Service_1 from "../../Img/land-service.svg";
import Service_2 from "../../Img/land-service.svg";
import Service_3 from "../../Img/land-service.svg";
import Service_4 from "../../Img/land-service.svg";
const Service = () => {
    return (
        <>
            <h2 className="service">Services</h2>
            <Row>
                <Col span={6} className="service-col">
                    <Image src={Service_1} preview={false} className="img" />
                    <h2 className="title">Lorem Ipsum</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={6} className="service-col">
                    <Image src={Service_2} preview={false} className="img" />
                    <h2 className="title">Lorem Ipsum</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={6} className="service-col">
                    <Image src={Service_3} preview={false} className="img" />
                    <h2 className="title">Lorem Ipsum</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
                <Col span={6} className="service-col">
                    <Image src={Service_4} preview={false} className="img" />
                    <h2 className="title">Lorem Ipsum</h2>
                    <p className="desc">orem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,</p>
                </Col>
            </Row>
        </>
    );
};

export default Service;

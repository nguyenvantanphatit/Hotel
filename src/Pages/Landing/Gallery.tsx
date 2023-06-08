import { Row, Col, Typography, Image } from "antd";
import './Gallery.css'
import Gallery_1 from "../../Img/land-gallery-1.svg";
import Gallery_2 from "../../Img/land-gallery-2.svg";
import Gallery_3 from "../../Img/land-gallery-3.svg";
const { Title } = Typography;
const Gallery = () => {
    return (
        <Row className="row-gallery">
            <Col xs={24} sm={24} md={9} className="gallery-col">
                <Title className="title">Our Gallery</Title>
                <Title className="desc">orem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,</Title>
            </Col>
            <Col xs={8} sm={8} md={5} >
                <Image src={Gallery_1} preview={false} className="gallery-img" />
            </Col>
            <Col xs={8} sm={8} md={5} >
                <Image src={Gallery_2} preview={false} className="gallery-img" />
            </Col>
            <Col xs={8} sm={8} md={5}>
                <Image src={Gallery_3} preview={false} className="gallery-img" />
            </Col>
        </Row>
    );
};

export default Gallery;

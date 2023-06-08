import { Layout, Row, Space, Image } from 'antd';
import { BellOutlined, InfoCircleOutlined } from '@ant-design/icons';
import UserImage from '../../Img/Rectangle 2725.svg';
import './HeaderBar.css';

const { Header } = Layout;

const HeaderBar = () => {
  const renderIcons = () => {
    const icons = [BellOutlined, InfoCircleOutlined];

    return icons.map((Icon, index) => (
      <Icon key={index} className="header-icon" />
    ));
  };

  return (
    <Header className="header">
      <Row className='header-row'>
        <h2 className="version">Version 1.0.0</h2>
        <Space className='header-item'>
          {renderIcons()}
          <span className="user-text">Nguyễn Văn B</span>
          <Image className="user-image" src={UserImage} alt="User Image" />
        </Space>
      </Row>
    </Header >
  );
};

export default HeaderBar;

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './SideBar.css';
import Sider_1 from '../../Img/sidebar-1.svg';
import Sider_2 from '../../Img/sidebar-2.svg';
import Sider_3 from '../../Img/sidebar-3.svg';
const { Sider } = Layout;

const SideBar = () => {
  const menuItems = [
    { key: '1', image: Sider_1, link: '/dash' },
    { key: '2', image: Sider_2, link: '/room' },
    { key: '3', image: Sider_3, link: '/service' }
  ];

  return (
    <>
      <Sider width="168px" className="sidebar">
        <div className="logo-container">
          <h2 className="logo-text">DTD</h2>
        </div>
        <div className="menu-container">
          <Menu className="menu">
            {menuItems.map(item => (
              <Menu.Item key={item.key} className='ant-menu-item'>
                <Link to={item.link}>
                  <img src={item.image} alt={`Image ${item.key}`} />
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
    </>
  );
};

export default SideBar;

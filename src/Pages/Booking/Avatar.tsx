import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';
import bookingSvg from '../../Img/booking.svg';
export const UserAvatarGroup = () => (
  <Avatar.Group
    maxCount={5}
    maxPopoverTrigger="click"
    size="large"
    maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
  >
    <Avatar src={bookingSvg} />
    <Avatar style={{ backgroundColor: '#f56a00' }}>P</Avatar>
    <Avatar style={{ backgroundColor: 'red' }}>H</Avatar>
    <Avatar style={{ backgroundColor: 'yellow' }}>A</Avatar>
    <Avatar style={{ backgroundColor: 'orange' }}>T</Avatar>
    <Tooltip title="Ant User" placement="top">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Tooltip>
    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
  </Avatar.Group>
);
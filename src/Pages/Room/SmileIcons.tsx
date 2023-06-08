import { Space } from 'antd';
import UserImage from '../../Img/Rectangle 2725.svg';
const SmileIcons = () => {
  const iconArray = [
    { id: 1, image: UserImage },
    { id: 2, image: UserImage },
    { id: 3, image: UserImage },
  ];

  return (
    <Space align="center">
      {iconArray.map((item) => (
        <img key={item.id} src={item.image} alt={`User ${item.id}`} />
      ))}
    </Space>
  );
};

export default SmileIcons;

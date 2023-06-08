import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.css'
const SearchInput: React.FC = () => {
  return (
    <Input
      prefix={<SearchOutlined />}
      placeholder="Search"
      className='search-dash'
    />
  );
};

export default SearchInput;
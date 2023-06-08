import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.css'
interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <Input
      placeholder="Search"
      prefix={<SearchOutlined />}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onPressEnter={handleSearch}
      className='search'
    />
  );
};

export default SearchInput;
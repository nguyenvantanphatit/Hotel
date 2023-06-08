import React from 'react';
import { Layout } from 'antd';
import TableBooking from "./TableBooking"
import SideBar from "../Layout/SideBar"
import HeaderBar from "../Layout/HeaderBar"
import SearchInput from "./SearchInput"
import TotalDash from './TotalDash';
import './index.css'
const DashBoard: React.FC = () => {
    return (
        <>
            <Layout>
                <Layout>
                    <SideBar />
                    <Layout className='dash-layout'>
                        <HeaderBar />
                        <div className='search-dash'><h2 className='dash'>DashBoard</h2>
                            <SearchInput />
                        </div>
                        <TotalDash />
                        <TableBooking />
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default DashBoard;

import React from 'react';
import HocLayout from "../../components/HocLayout";
import { useLocation } from 'react-router-dom';
const Dashboard = () => {
    const location = useLocation();
    return(
        <div>
            <h1>Dashboard</h1>
            <h1>{location.pathname}</h1>
        </div>
       
    )
}


const DashboardHoc = HocLayout(Dashboard)
export default DashboardHoc;
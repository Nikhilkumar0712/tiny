import { Box } from '@mui/material';
import React from 'react';
import HocLayout from "../../components/HocLayout";
import Analytics from './Analytics';
import { DashboardBillingSummary } from './BillingSummary';
import NewBookings from './NewBookings';
const Dashboard = () => {
    return (
        <>
            <Box>


                <Box mt={"18px"}>
                    <Analytics />
                </Box>
                <Box
                    display={"flex"}
                    gap={"30px"}>
                    <Box mt={"18px"}>
                        <NewBookings />
                    </Box>
                    <Box mt={"18px"} flexGrow={1}>
                        <DashboardBillingSummary />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
const DashboardHoc = HocLayout(Dashboard)
export default DashboardHoc;
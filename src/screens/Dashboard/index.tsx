import { Box, Grid } from '@mui/material';
import React from 'react';
import HocLayout from "../../components/HocLayout";
import Analytics from './Analytics';
import AppointmentandBookings from './AppointmentsandBookings';
import { DashboardBillingSummary } from './BillingSummary';
import NewBookings from './NewBookings';
const Dashboard = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} mt={2}>
                <Grid container spacing={2}>
                    <Grid item xs={8} >
                        <Grid item xs={12}>
                            <Analytics />
                        </Grid>
                        <Grid container spacing={2} mt={1}>
                            <Grid item lg={6} xl={7}>
                                <AppointmentandBookings />
                            </Grid>
                            <Grid item lg={6} xl={5} >
                                <DashboardBillingSummary />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} paddingLeft={"16px"}>

                        <NewBookings />
                    </Grid>
                </Grid>
            </Box>


        </>
    )
}
const DashboardHoc = HocLayout(Dashboard)
export default DashboardHoc;
import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { styles } from './styles';
import CustomTable from '../../../../components/Table';
import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Checkbox from '@mui/material/Checkbox';
import Image from '../../../../assets/delete.svg'
const VisitingPlanning = () => {

    const columns: GridColDef[] = [
        {
            field: "Select",
            headerName: "Select",
            width: 130,
            renderCell: (params) => {
                return (
                    <Checkbox size='small' />
                );
            },
        },
        {
            field: "Visits",
            headerName: "Visits",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Visits}</Typography>
                    </>
                );
            },
        },
        {
            field: "Treatment",
            headerName: "Treatment",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"15px"}>
                            <Typography sx={styles.rowData}>{params.row.Treatment1}</Typography>
                            <Typography sx={styles.rowData}>{params.row.Treatment2}</Typography>
                        </Box>
                    </>
                );
            },
        },
        {
            field: "Date & Time",
            headerName: "Date & Time",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={'15px'}>
                            <Box
                                display={"flex"} gap={"3px"}>
                                <Typography sx={styles.rowData}>{params.row.Date1}</Typography>
                                <Typography sx={styles.rowData}>{params.row.Time1}</Typography>
                            </Box>
                            <Box
                                display={"flex"} gap={"3px"}>
                                <Typography sx={styles.rowData}>{params.row.Date2}</Typography>
                                <Typography sx={styles.rowData}>{params.row.Time2}</Typography>
                            </Box>
                        </Box>
                    </>
                );
            },
        },
        {
            field: "Cost",
            headerName: "Cost",
            width: 130,
            renderCell: (params) => {

                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Cost}</Typography>
                    </>
                );

            },
        },
        {
            field: "Treatment Status",
            headerName: "Treatment Status",
            width: 180,
            renderCell: (params) => {

                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.TreatmentStatus}</Typography>
                    </>
                );

            },
        },
        {
            field: "PaymentStatus",
            headerName: "PaymentStatus",
            width: 180,
            renderCell: (params) => {

                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.PaymentStatus}</Typography>
                    </>
                );

            },
        },
        {
            field: "Actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <Grid
                        container
                        flexDirection="row"
                        gap={"10px"}
                    >
                        <>
                            <img src={Image} alt="" style={styles.notes} />
                            <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> Delete </Typography></RouterLink>
                        </>
                    </Grid>
                )
            },
        },
    ];

    const rows = [
        {
            id: 1,
            Visits: "Visit 1",
            Treatment1: "Root Canal",
            Treatment2: "Tooth Whitening",
            Date1: "31 Aug 2022",
            Time1: "06:00 Pm",
            Date2: "31 Aug 2022",
            Time2: "06:00 Pm",
            Cost: "7000",
            TreatmentStatus: "Status",
            PaymentStatus: 'Status',
        },

    ];
    return (
        <>
            <CustomTable coloumns={columns} rows={rows} itemsPerPage={5} rowsPerPage={5} rowHeight={100} />
        </>
    )
}

export default VisitingPlanning
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTable from '../../../../components/Table'
import CustomCard from '../../../../components/Card'
import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styles } from './styles';
const UserAppointments = () => {

    const columns: GridColDef[] = [
        {
            field: "DateTime",
            headerName: "Date & Time",
            width: 250,
            renderCell: (params) => {
                return (
                    <Box
                        display={"flex"}
                        gap={"10px"}
                        textAlign={'center'}
                        alignItems={"center"}
                        flexDirection={"column"}>
                        <Typography sx={styles.rowDataHeading}>
                            {params.row.DateTime}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "Type",
            headerName: "Type",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.Type}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "Doctor",
            headerName: "Doctor",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Doctor}</Typography>
                    </>
                );
            },
        },
        {
            field: "Actions",
            headerName: "Actions",
            width: 250,
            renderCell: (params) => {
                return (
                    <Grid
                        container
                        justifyContent={"space-between"}
                    >
                        <>
                            <Grid
                                flexDirection={"column"}
                                alignItems={"center"}
                                gap={"10px"}
                                textAlign={"center"}>
                                <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink to="/PatientProfile"><Typography sx={styles.rowData}> View </Typography></RouterLink>
                            </Grid>
                        </>
                    </Grid>
                )
            },
        },
    ];

    const rows = [
        {
            id: 1,
            DateTime: '31 Aug 2022',
            Type: "OP",
            Doctor: "Dr.Surendra",
            Actions: "-",
        },
        {
            id: 1,
            DateTime: '31 Aug 2022',
            Type: "OP",
            Doctor: "Dr.Surendra",
            Actions: "-",
        },
        {
            id: 1,
            DateTime: '31 Aug 2022',
            Type: "OP",
            Doctor: "Dr.Surendra",
            Actions: "-",
        },
        {
            id: 1,
            DateTime: '31 Aug 2022',
            Type: "OP",
            Doctor: "Dr.Surendra",
            Actions: "-",
        },
        {
            id: 1,
            DateTime: '31 Aug 2022',
            Type: "OP",
            Doctor: "Dr.Surendra",
            Actions: "-",
        },
    ];
    return (
        <Box>
            <CustomTable coloumns={columns} rows={rows} itemsPerPage={4} rowsPerPage={4} />
        </Box>
    )
}

export default UserAppointments
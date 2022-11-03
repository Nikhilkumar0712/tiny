import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTable from '../../../../components/Table'
import CustomCard from '../../../../components/Card'
import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styles } from './styles';
const UserPrescription = () => {

    const columns: GridColDef[] = [
        {
            field: "ID",
            headerName: "ID",
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
                            {params.row.ID}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "PrescriptionDate",
            headerName: "Prescription Date",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.PrescriptionDate}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "PrescriptionName",
            headerName: "Prescription Name",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.PrescriptionName}</Typography>
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
            ID: '31 Aug 2022',
            PrescriptionDate: "OP",
            PrescriptionName: "Completed",
            Actions: "-",
        },
    ];
    return (
        <Box>
            <CustomTable coloumns={columns} rows={rows} itemsPerPage={4} rowsPerPage={4} 
            onCellClick={""}/>
        </Box>
    )
}

export default UserPrescription
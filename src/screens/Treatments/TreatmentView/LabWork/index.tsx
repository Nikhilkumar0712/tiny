import React from 'react';

import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import CustomTable from "../../../../components/Table";
import Image from '../../../../assets/Notes.svg'
import { styles } from './style';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { Link as RouterLink } from 'react-router-dom';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { useNavigate } from "react-router-dom";

const LabWork = () => {


    const columns: GridColDef[] = [
        {
            field: "Work ID",
            headerName: "Work ID",
            width: 130,
            renderCell: (params) => {
                return (
                    <Typography sx={styles.rowData}>
                        {params.row.WorkID}
                    </Typography>
                );
            },
        },
        {
            field: "Doctor Name",
            headerName: "Bill No",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.DoctorName}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "Lab Work Title",
            headerName: "Lab Work Title",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.LabWorkTitle}</Typography>
                    </>
                );
            },
        },
        {
            field: "Lab Work Type",
            headerName: "Lab Work Type",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.LabWorkType}</Typography>
                    </>
                );
            },
        },
        {
            field: "Lab Name",
            headerName: "Lab Name",
            width: 130,
            renderCell: (params) => {

                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.LabName}</Typography>
                    </>
                );

            },
        },
        {
            field: "Lab Instructions",
            headerName: "Lab Instructions",
            width: 180,
            renderCell: (params) => {

                return (
                    <>
                        <Box
                            display={'flex'}
                            gap={"10px"}
                            alignItems={"center"}>
                            <img src={Image} alt="" style={styles.notes} />
                            <Typography sx={styles.rowData}>{params.row.LabInstructions}</Typography>
                        </Box>
                    </>
                );

            },
        },
        {
            field: "Expected Delivery Date",
            headerName: "Expected Delivery Date",
            width: 180,
            renderCell: (params) => {

                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.ExpectedDeliveryDate}</Typography>
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
                        gap={"10px"}>
                        <>
                            <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                            <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> View </Typography></RouterLink>
                        </>
                    </Grid>
                )
            },
        },
    ];

    const rows = [
        {
            id: 1,
            WorkID: '23',
            DoctorName: "Dr. Surendra",
            LabWorkTitle: "Dental Caps",
            LabWorkType: "Dental Caps",
            LabName: "Olivia Labs",
            LabInstructions: "Notes",
            ExpectedDeliveryDate: "6 Sep 2022",
            Actions: "-",
        },
    ];

    const navigate = useNavigate();

    const handleOnClickBreadcrumItem = () => {
        navigate("./Dashboard");
    };

    return (
        <>
            <CustomTable coloumns={columns} rows={rows} itemsPerPage={5} rowsPerPage={5} 
            onCellClick={""}/>
        </>

    )

}

export default LabWork;
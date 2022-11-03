import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTable from '../../../../components/Table'
import CustomCard from '../../../../components/Card'
import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styles } from './styles';
const PatientRecord = () => {

    const columns: GridColDef[] = [
        {
            field: "File Name",
            headerName: "FileName",
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
                            {params.row.FileName}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "FileType",
            headerName: "File Type",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.FileType}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "Date",
            headerName: "Date",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Date}</Typography>
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
            FileName: '17, 18 Scan',
            FileType: "jpg",
            Date: "31 Aug 2022",
            Actions: "-",
        },
        {
            id: 1,
            FileName: '17, 18 Scan',
            FileType: "jpg",
            Date: "31 Aug 2022",
            Actions: "-",
        },
        {
            id: 1,
            FileName: '17, 18 Scan',
            FileType: "jpg",
            Date: "31 Aug 2022",
            Actions: "-",
        },
        {
            id: 1,
            FileName: '17, 18 Scan',
            FileType: "jpg",
            Date: "31 Aug 2022",
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

export default PatientRecord
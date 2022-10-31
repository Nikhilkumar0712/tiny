import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTable from '../../../../components/Table'
import CustomCard from '../../../../components/Card'
import { Link as RouterLink } from 'react-router-dom';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styles } from './styles';
const UserTreatments = () => {

    const columns: GridColDef[] = [
        {
            field: "ExaminationDate",
            headerName: "Examination Date",
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
                            {params.row.ExaminationDate}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "TreatmentName",
            headerName: "Treatment Name",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.TreatmentName}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "Status",
            headerName: "Status",
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Status}</Typography>
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
            ExaminationDate: '31 Aug 2022',
            TreatmentName: "Teeth Whitening",
            Status: "Completed",
            Actions: "-",
        },
        {
            id: 1,
            ExaminationDate: '31 Aug 2022',
            TreatmentName: "Teeth Whitening",
            Status: "Completed",
            Actions: "-",
        },
        {
            id: 1,
            ExaminationDate: '31 Aug 2022',
            TreatmentName: "Teeth Whitening",
            Status: "Completed",
            Actions: "-",
        },
        {
            id: 1,
            ExaminationDate: '31 Aug 2022',
            TreatmentName: "Teeth Whitening",
            Status: "Completed",
            Actions: "-",
        },
        {
            id: 1,
            ExaminationDate: '31 Aug 2022',
            TreatmentName: "Teeth Whitening",
            Status: "Completed",
            Actions: "-",
        },
       
    ];
    return (
        <Box>
            <CustomTable coloumns={columns} rows={rows} itemsPerPage={4} rowsPerPage={4} />
        </Box>
    )
}

export default UserTreatments
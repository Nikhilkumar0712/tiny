import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { styles } from './styles';
import CustomTable from '../../../../components/Table';
import { Link as RouterLink } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Image from '../../../../assets/Notes.svg'
const Treatments = () => {

    const columns: GridColDef[] = [
        {
            field: "Treatment",
            headerName: "treatment",
            width: 130,
            renderCell: (params) => {
                return (
                    <Typography sx={styles.rowData}>
                        {params.row.Treatment}
                    </Typography>
                );
            },
        },
        {
            field: "Tooth #",
            headerName: "Tooth#",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.Tooth}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "Visit",
            headerName: "Visit",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Visit}</Typography>
                    </>
                );
            },
        },
        {
            field: "ENotes",
            headerName: "E.Notes",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Box
                            display={'flex'}
                            gap={"10px"}
                            alignItems={"center"}>
                            <img src={Image} alt="" style={styles.notes}/>
                            <Typography sx={styles.rowData}>{params.row.ENotes}</Typography>
                        </Box>
                    </>
                );
            },
        },
        {
            field: "Status",
            headerName: "Status",
            width: 130,
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
            width: 230,
            renderCell: (params) => {
                return (
                    <Grid
                        container
                        flexDirection="row"
                        gap={"10px"}
                    >
                        <>
                            <EditOutlinedIcon sx={styles.actionIcon} />
                            <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> Edit </Typography></RouterLink>
                        </>
                    </Grid>
                )
            },
        },
    ];

    const rows = [
        {
            id: 1,
            Treatment: 'Root Canal',
            Tooth: "15",
            Visit: "2",
            ENotes: "Notes",
            Status: "Planned",
            Actions: "-",
        },
    ];
    return (
        <>
            <CustomTable coloumns={columns} rows={rows} itemsPerPage={5} rowsPerPage={5} 
            onCellClick={""}/>
        </>
    )
}

export default Treatments
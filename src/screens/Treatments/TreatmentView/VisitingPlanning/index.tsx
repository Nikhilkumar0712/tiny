import React from 'react'
import { Box, Grid, Typography, withStyles } from '@mui/material';
import { styles } from './styles';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CustomTable from '../../../../components/Tabel';
import { Link as RouterLink } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Image from '../../../../assets/delete.svg'

const VisitingPlanning = () => {


    const tableHeadData = [
        "Select",
        "Visits",
        "Treatment",
        "Date & Time",
        "Cost",
        'Treatment Status',
        "Payment Status",
        "Actions"
    ];

    const rows = [
        {
            id: 1,
            Select: '',
            Visits: 'Visits 1',
            Treatment: 'Treatment 1',
            Date: "31 Aug 2022",
            Time: "06:00 Pm",
            Cost: 7000,
            TreatmentStatus: "Pending",
            PaymentStatus: "Done",
            Actions: ""
        },
    ];


    return (
        <>
            <Box sx={styles.screenContainer}>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <Box sx={styles.tableContainer}>
                            <CustomTable header={tableHeadData}>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>
                                            <Checkbox size="small" />
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.Visits}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                display={"flex"}
                                                flexDirection={"column"}
                                                gap={"20px"}
                                                justifyContent={"center"}
                                                alignItems={"center"}>
                                                <Typography sx={styles.tableCell}>
                                                    {row.Treatment}
                                                </Typography>
                                                <Typography sx={styles.tableCell}>
                                                    {row.Treatment}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                display={"flex"}
                                                flexDirection={"column"}
                                                gap={"20px"}
                                                justifyContent={"center"}
                                                alignItems={"center"}>

                                                <Box
                                                    display={"flex"}
                                                    gap={"5px"}
                                                    justifyContent={"center"}
                                                    alignItems={"baseline"}>
                                                    <Box>
                                                        <Typography sx={styles.tableCell}>
                                                            {row.Date}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={styles.time}>
                                                            {row.Time}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box
                                                    display={"flex"}
                                                    gap={"5px"}
                                                    justifyContent={"center"}
                                                    alignItems={"baseline"}>
                                                    <Box>
                                                        <Typography sx={styles.tableCell}>
                                                            {row.Date}
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={styles.time}>
                                                            {row.Time}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                display={"flex"}
                                                flexDirection={"column"}
                                                gap={"20px"}
                                                justifyContent={"center"}
                                                alignItems={"center"}>
                                                <Typography sx={styles.tableCell}>
                                                    {row.Cost}
                                                </Typography>
                                                <Typography sx={styles.tableCell}>
                                                    {row.Cost}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                display={"flex"}
                                                flexDirection={"column"}
                                                gap={"20px"}
                                                justifyContent={"center"}
                                                alignItems={"center"}>
                                                <Typography sx={styles.tableCell}>
                                                    {row.TreatmentStatus}
                                                </Typography>
                                                <Typography sx={styles.tableCell}>
                                                    {row.TreatmentStatus}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box 
                                               display={"flex"}
                                               flexDirection={"column"}
                                               gap={"20px"}
                                               justifyContent={"center"}
                                               alignItems={"center"}>
                                                <Typography sx={styles.tableCell}>
                                                    {row.PaymentStatus}
                                                </Typography>
                                                <Typography sx={styles.tableCell}>
                                                    {row.PaymentStatus}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Grid
                                                container
                                                flexDirection="row"
                                                spacing={2}
                                                justifyContent={'space-around'}
                                                alignItems={'center'}>
                                                <Grid item>
                                                    <Grid container flexDirection="row"
                                                        gap={"5px"} alignItems={"center"}>
                                                        <Box component={"img"}
                                                            alt={"pencil"}
                                                            src={Image}
                                                            width={"18px"}
                                                            height={"18px"}
                                                            fontSize={"18px"}>

                                                        </Box>
                                                        <RouterLink
                                                            to="/"
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <Typography sx={styles.tableCell} 
                                                            style={{"color":"#CE0505"}}>
                                                                {" "}
                                                                Delete{" "}
                                                            </Typography>
                                                        </RouterLink>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </CustomTable>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default VisitingPlanning
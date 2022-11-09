import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { styles } from './styles';
import CustomTable from '../../../../components/Tabel';
import { Link as RouterLink } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Image from '../../../../assets/Notes.svg'
import EditPencil from '../../../../assets/edit pencil.svg'
const Treatments = () => {


    const tableHeadData = [
        "Treatment",
        "Tooth #",
        "Visit #",
        "E. Notes",
        "Status",
        "Actions"
    ];

    const rows = [
        {
            id: 1,
            Treatment: "31 Aug 2022",
            Tooth: "Teeth Whitening",
            Visits: "Completed",
            ENotes: "Notes",
            Status: "Completed",
            Actions: "",
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
                                            <Typography sx={styles.tableCell}>
                                                {row.Treatment}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.Tooth}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.Visits}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                display={"flex"}
                                                gap={"6px"}
                                                alignItems={"center"}
                                                justifyContent={"center"}>
                                                <Box component={"img"}
                                                    alt={"pencil"}
                                                    src={Image}
                                                    width={"30px"}
                                                    height={"30px"}
                                                   >
                                                </Box>
                                                <Typography sx={styles.tableCell}>
                                                    {row.ENotes}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.Status}
                                            </Typography>
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
                                                            src={EditPencil}
                                                            width={"18px"}
                                                            height={"18px"}
                                                            fontSize={"18px"}>

                                                        </Box>
                                                        <RouterLink
                                                            to="/"
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <Typography sx={styles.tableCell}>
                                                                {" "}
                                                                Edit{" "}
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

export default Treatments
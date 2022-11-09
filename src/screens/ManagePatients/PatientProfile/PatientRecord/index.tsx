import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTable from '../../../../components/Tabel'
import { Link as RouterLink } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styles } from './styles';
const PatientRecord = () => {

    const tableHeadData = [
        "File Name",
        "File Type",
        "Date",
        "Actions",
    ];

    const rows = [
        {
            id: 1,
            FileName: "P1245",
            FileType: "Teeth Whitening",
            Date: "31 Aug 2022",
            Actions: "",
        },
    ];

    return (
        <Box sx={styles.screenContainer}>
            <Grid container spacing={1}>
                <Grid item md={12}>
                    <Box sx={styles.tableContainer}>
                        <CustomTable header={tableHeadData}>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Typography sx={styles.tableCell}>
                                            {row.FileName}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={styles.tableCell}>
                                            {row.FileType}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={styles.tableCell}>
                                            {row.Date}
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
                                                    <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                                                    <RouterLink
                                                        to="/"
                                                        style={{ textDecoration: "none" }}
                                                    >
                                                        <Typography sx={styles.tableCell}>
                                                            {" "}
                                                            View{" "}
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
    )
}

export default PatientRecord
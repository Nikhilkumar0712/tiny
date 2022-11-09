import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTable from '../../../../components/Tabel'
import { Link as RouterLink } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { styles } from './styles';
const UserAppointments = () => {

    const tableHeadData = [
        "Date & Time",
        "Type",
        "Doctor",
        "Status",
        "Actions",
    ];

    const rows = [
        {
            id: 1,
            Date: "31 Aug 2022",
            Time: "06:00 Pm - 06:15 Pm",
            Type: "22 Sept 2022",
            Doctor: "156",
            Status: "22 Sept 2022",
            Actions: "",
        },
        {
            id: 2,
            Date: "31 Aug 2022",
            Time: "06:00 Pm - 06:15 Pm",
            Type: "22 Sept 2022",
            Doctor: "156",
            Status: "22 Sept 2022",
            Actions: "",
        },
        {
            id: 3,
            Date: "31 Aug 2022",
            Time: "06:00 Pm - 06:15 Pm",
            Type: "22 Sept 2022",
            Doctor: "156",
            Status: "22 Sept 2022",
            Actions: "",
        },
        {
            id: 4,
            Date: "31 Aug 2022",
            Time: "06:00 Pm - 06:15 Pm",
            Type: "22 Sept 2022",
            Doctor: "156",
            Status: "22 Sept 2022",
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
                                        <Box
                                            display={"flex"}
                                            flexDirection={"column"}
                                            gap={"5px"}
                                            alignItems={"center"}>
                                            <Box
                                                display={"flex"}
                                                flexDirection={"column"}
                                                gap={"5px"}
                                                alignItems={"baseline"}>
                                                <Typography sx={styles.tableCell}>
                                                    {row.Date}
                                                </Typography>
                                                <Typography sx={styles.time}>
                                                    {row.Time}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={styles.tableCell}>
                                            {row.Type}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={styles.tableCell}>
                                            {row.Doctor}
                                        </Typography>
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

export default UserAppointments
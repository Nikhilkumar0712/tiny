import React from 'react';
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import CustomTable from "../../../../components/Tabel";
import Image from '../../../../assets/Notes.svg';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styles } from './style';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const LabWork = () => {

    const tableHeadData = [
        "Work ID",
        "Doctor Name",
        "Lab Work Title",
        "Lab Work Type",
        "Lab Name",
        "Lab Instructions",
        "Expected Delivery Date",
        "Status",
        "Actions"
    ];

    const rows = [
        {
            id: 1,
            WorkID: "31 Aug 2022",
            DoctorName: "Teeth Whitening",
            LabWorkTitle: "Completed",
            LabWorkType: "Completed",
            LabWorkName: "Completed",
            LabWorkInstructions: "Completed",
            ExpectedDeliveryDate: "Completed",
            Status: "Completed",
            Actions: "",
        },
    ];

    const navigate = useNavigate();

    const handleOnClickBreadcrumItem = () => {
        navigate("./Dashboard");
    };

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
                                                {row.WorkID}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.DoctorName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.LabWorkTitle}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.LabWorkType}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.LabWorkName}
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
                                                    fontSize={"18px"}>
                                                </Box>
                                                <Typography sx={styles.tableCell}>
                                                    {row.LabWorkInstructions}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.ExpectedDeliveryDate}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={styles.tableCell}>
                                                {row.Status}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Grid item>
                                                <Grid container flexDirection="row"
                                                    alignItems={"center"}
                                                    gap={"10px"}>
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

export default LabWork;
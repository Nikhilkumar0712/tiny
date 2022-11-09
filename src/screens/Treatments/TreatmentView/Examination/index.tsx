import React from 'react'
import { Box, Link, Typography, Grid, InputAdornment, Table } from "@mui/material";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../../components/Tabel";
import Image from '../../../../assets/Notes.svg'
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link as RouterLink } from "react-router-dom";
import Header from "../../../Diagnosis/Header";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteImage from '../../../../assets/delete.svg'
const TreatmentExamination = () => {
    const navigate = useNavigate();

    const selectData = [
        {
            value: 1,
            name: "By Doctor",
        },
        {
            value: 2,
            name: "By Patient",
        },
    ];

    const tableHeadData = [
        "Tooth No",
        "Examination Notes",
        "Investigation",
        "Interpretation",
        "Final Diagnosis",
        "Treatment Planned",
        "Actions",
    ];

    const rows = [
        {
            id: 1,
            ToothNo: "18",
            ExaminationNotes: "Note",
            Investigation: "Investigation Name 1",
            Interpretation: "Note",
            FinalDiagnosis: "Select Tooth Investigation Implant",
            TreatmentPlanned: "Access opening and BMP done",
            Actions: "",
        },
    ];

    const buttonClicked = () => { };


    return (
        <>

            <Grid container spacing={1}>
                <Grid item md={12}>
                    <Box sx={styles.tableContainer}>
                        <CustomTable header={tableHeadData}>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Typography sx={styles.tableCell}>
                                            {row.ToothNo}
                                        </Typography>

                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            display={"flex"}
                                            flexDirection={"column"}
                                            justifyContent={"center"}
                                            gap={"8px"}
                                            alignItems={"center"}>
                                            <Box component={"img"}
                                                alt={"pencil"}
                                                src={Image}
                                                width={"30px"}
                                                height={"30px"}
                                            >
                                            </Box>
                                            <Typography sx={styles.tableCell}>
                                                {row.ExaminationNotes}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            display={"flex"}
                                            flexDirection={"column"}
                                            justifyContent={"center"}
                                            gap={"10px"}
                                            alignItems={"center"}>
                                            <Typography sx={styles.tableCell}>
                                                {row.Investigation}
                                            </Typography>
                                            <Typography sx={styles.tableCell}>
                                                {row.Investigation}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            display={"flex"}
                                            flexDirection={"column"}
                                            justifyContent={"center"}
                                            gap={"4px"}
                                            alignItems={"center"}>
                                            <Box component={"img"}
                                                alt={"pencil"}
                                                src={Image}
                                                width={"30px"}
                                                height={"30px"}
                                            >
                                            </Box>
                                            <Typography sx={styles.tableCell}>
                                                {row.Interpretation}
                                            </Typography>
                                        </Box>
                                    </TableCell>

                                    <TableCell>
                                        <Typography sx={styles.tableCell}>
                                            {row.FinalDiagnosis}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={styles.tableCell}>
                                            {row.TreatmentPlanned}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            display={"flex"}
                                            gap={"10px"}
                                            justifyContent={"center"}
                                            alignItems={"center"}>
                                            <Grid container>
                                                <Grid item>
                                                    <Grid
                                                        container
                                                        flexDirection="column"
                                                        justifyContent={"center"}
                                                        alignItems={"center"}
                                                    >
                                                        <CreateOutlinedIcon sx={styles.actionIcon} />
                                                        <RouterLink
                                                            to="/"
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <Typography sx={styles.tableCell}>
                                                                Edit
                                                            </Typography>
                                                        </RouterLink>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                flexDirection={"column"}
                                            >
                                                <Box
                                                    component={"img"}
                                                    alt=" Appointment"
                                                    src={DeleteImage}
                                                    width={"18px"}
                                                    height={"18px"}
                                                    fontSize={"18px"}>
                                                </Box>
                                                <Typography sx={styles.tableCell} style={{ "color": "#CE0505" }}>
                                                    delete
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </CustomTable>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default TreatmentExamination
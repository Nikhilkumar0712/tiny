import React from 'react';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import CustomTable from "../../../components/Table";
import { styles } from './styles';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { Link as RouterLink } from 'react-router-dom';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrum";
import CustomCard from "../../../components/Card";
import Image from '../../../assets/print.svg'
import CustomButton from '../../../components/Button';


const ConsentForm = () => {


    const columns: GridColDef[] = [
        {
            field: "ConsentDate",
            headerName: "Consent Date",
            width: 130,
            renderCell: (params) => {
                return (
                    <Typography sx={styles.rowData}>
                        {params.row.ConsentDate}
                    </Typography>
                );
            },
        },
        {
            field: "Treatment Course",
            headerName: "Treatment Course",
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.TreatmentCourse}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "Form Name",
            headerName: "Form Name",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.FormName}</Typography>
                    </>
                );
            },
        },
        {
            field: "Contact Name",
            headerName: "Contact Name",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.ContactName}</Typography>
                    </>
                );
            },
        },
        {
            field: "Relation",
            headerName: "Relation",
            width: 130,
            renderCell: (params) => {

                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.Relation}</Typography>
                    </>
                );

            },
        },
        {
            field: "Phone Number",
            headerName: "Phone Number",
            width: 130,
            renderCell: (params) => {

                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.PhoneNumber}</Typography>
                    </>
                );

            },
        },
        {
            field: "Actions",
            headerName: "Actions",
            width: 290,
            renderCell: (params) => {
                return (
                    <Grid
                        container
                        flexDirection="row"
                        gap={"40px"}>
                        <>
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                gap={"5px"}>
                                <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> View </Typography></RouterLink>
                            </Box>
                        </>
                        <>
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                gap={"5px"}>
                                <LocalPrintshopOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> Print </Typography></RouterLink>
                            </Box>
                        </>
                        <>
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                gap={"5px"}>
                                <CloudDownloadOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> Print </Typography></RouterLink>
                            </Box>
                        </>
                        <>
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                gap={"5px"}>
                                <img src={Image} alt="" style={styles.DownloadImage} />
                                <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> Download </Typography></RouterLink>
                            </Box>
                        </>
                    </Grid>
                )
            },
        },
    ];

    const rows = [
        {
            id: 1,
            ConsentDate: '4 Aug 2022',
            TreatmentCourse: "Root Canal",
            FormName: "Covid-19",
            ContactName: "Srinivas",
            Relation: "Father",
            PhoneNumber: "9891881529",
            Actions: "-",
        },

    ];

    const navigate = useNavigate();

    const handleOnClickBreadcrumItem = () => {
        navigate("./Dashboard");
    };


    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/Dashboard"
            onClick={handleOnClickBreadcrumItem}
            sx={styles.breadcrumbSubtext}
        >
            Dashboard
        </Link>,
        <Typography key="2" sx={styles.breadcrumbSubtext}>
            Treatments
        </Typography>,
        <Typography key="2" sx={styles.breadcrumbSubtext}>
            Consent Form
        </Typography>,
    ];

    const buttonClicked=()=>{}

    return (
        <>
            <Breadcrumbs title={"Consent Form"} breadcrumbsArr={breadcrumbs} />
            <Box sx={styles.screenContainer}>
                <Grid container>
                    <Grid item md={12}>
                        <CustomCard>
                            <Box textAlign={"right"}>
                                <CustomButton title={"Add Consent Form +"}
                                    handleButtonClick={buttonClicked}
                                    backgroundcolor={"#204289"}
                                    bordercolor={"#204289"}
                                    border={"1px solid"}
                                    fontsize={"14px"}
                                    color={"info"}
                                    padding={"4px 30px"}
                                    endIcon={""} />
                            </Box>
                            <CustomTable coloumns={columns} rows={rows} itemsPerPage={5} rowsPerPage={5} 
                            onCellClick={""}/>
                        </CustomCard>
                    </Grid>
                </Grid>
            </Box>
        </>

    )

}

export default ConsentForm;
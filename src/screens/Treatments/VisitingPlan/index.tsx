import React from 'react'
import HocLayout from '../../../components/HocLayout'
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import CustomTable from "../../../components/Table";
import { styles } from './styles';
import CustomSelectPicker from '../../../components/SelectPicker';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { Link as RouterLink } from 'react-router-dom';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrum";
import CustomCard from "../../../components/Card";
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '../../../components/Button';
import CustomDatePicker from '../../../components/DatePicker';
import TimePicker from '../../../components/TimePicker';
import CustomTimePicker from '../../../components/TimePicker';
const VisitingPlan = () => {

    const buttonClicked = () => { }

    const Status = [
        {
            value: 1,
            name: 'Select Treatment'
        },
        {
            value: 2,
            name: 'Select Treatment'
        }
    ]

    const columns: GridColDef[] = [
        {
            field: "Select",
            headerName: "Select",
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Checkbox size='small' />
                    </>
                );
            },
        },
        {
            field: "Visits",
            headerName: "Visits",
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>
                            {params.row.Visits}
                        </Typography>
                    </>
                );
            },
        },
        {
            field: "Treatment",
            headerName: "Treatment",
            width: 270,
            renderCell: (params) => {
                return (
                    <>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"10px"}>
                            <Box >
                                <CustomSelectPicker
                                    selectValue={1}
                                    size={"small"}
                                    fullWidth={false}
                                    handleSelectValue={(val: any) => console.log("hii")}
                                    width={"69%"}
                                    selectData={Status}
                                />
                            </Box>
                            <Box
                                display={"flex"}
                                gap={"10px"}>
                                <Box>
                                    <CustomSelectPicker
                                        selectValue={1}
                                        size={"small"}
                                        fullWidth={false}
                                        handleSelectValue={(val: any) => console.log("hii")}
                                        width={"100%"}
                                        selectData={Status}
                                    />
                                </Box>
                                <Box >
                                    <CustomButton title={"+"}
                                        handleButtonClick={buttonClicked}
                                        backgroundcolor={"#fff"}
                                        bordercolor={"#9DA2AB"}
                                        border={"1px solid"}
                                        fontsize={"14px"}
                                        color={"primary"}
                                        padding={"7px 10px"}
                                        endIcon={""} />
                                </Box>
                            </Box>
                        </Box>
                    </>
                );
            },
        },
        {
            field: "Datetime",
            headerName: "Date & Time",
            width: 170,
            renderCell: (params) => {
                return (
                    <>
                        <Box 
                           display={"flex"}
                           flexDirection={"column"}
                           gap={"10px"}>
                            <Box width={"100%"}>
                                <CustomDatePicker fullWidth={''} />
                            </Box>
                            <Box width={"100%"}>
                                <CustomTimePicker/>
                            </Box>
                        </Box>
                    </>
                );
            },
        },
        {
            field: "Cost",
            headerName: "Cost",
            width: 100,
            renderCell: (params) => {

                return (
                    <>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={'10px'}>
                            <Typography sx={styles.rowData}>{params.row.Cost}</Typography>
                            <Box mt={"30px"}>
                                <Typography sx={styles.rowData}>{params.row.Cost1}</Typography>
                            </Box>
                        </Box>
                    </>
                );

            },
        },
        {
            field: "Treatment Status",
            headerName: "Treatment Status",
            width: 150,
            renderCell: (params) => {

                return (
                    <>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={'10px'}>
                            <Typography sx={styles.rowData}>{params.row.TreatmentStatus}</Typography>
                            <Box mt={"30px"}>
                                <Typography sx={styles.rowData}>{params.row.TreatmentStatus1}</Typography>
                            </Box>
                        </Box>
                    </>
                );

            },
        },
        {
            field: "Payment Status",
            headerName: "Payment Status",
            width: 150,
            renderCell: (params) => {

                return (
                    <>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={'10px'}>
                            <Typography sx={styles.rowData}>{params.row.PaymentStatus}</Typography>
                            <Box mt={"30px"}>
                                <Typography sx={styles.rowData}>{params.row.PaymentStatus1}</Typography>
                            </Box>
                        </Box>
                    </>
                );

            },
        },
        {
            field: "Actions",
            headerName: "Actions",
            width: 100,
            renderCell: (params) => {
                return (
                    <Grid
                        container
                        flexDirection="row"
                    >
                        <>
                            <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                            <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> View </Typography></RouterLink>
                        </>

                    </Grid>
                )
            },
        },
    ];

    const rows = [
        {
            id: 1,
            Visits: "Visit1",
            Treatment: "22 Sept 2022",
            Datetime: "OP",
            Cost: "7000",
            TreatmentStatus: "Status",
            PaymentStatus: "Pending",
            Cost1: "7000",
            TreatmentStatus1: "Status",
            PaymentStatus1: "Pending",
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
            Treatment
        </Typography>,
        <Typography key="2" sx={styles.breadcrumbSubtext}>
            Visiting Plan
        </Typography>,
    ];

    return (
        <>
            <Breadcrumbs title={"Visiting Plan"} breadcrumbsArr={breadcrumbs} />
            <Box sx={styles.screenContainer}>
                <Grid container>
                    <Grid item md={12}>
                        <CustomCard>
                            <CustomTable coloumns={columns} rows={rows} itemsPerPage={5} rowsPerPage={5}
                                onCellClick={""}
                                rowHeight={150} />
                        </CustomCard>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
const VisitingPlanhoc = HocLayout(VisitingPlan)
export default VisitingPlanhoc
import React, { useState } from 'react';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Link, Typography, Grid, InputAdornment, Button } from "@mui/material";
import CustomTable from "../../components/Table";
import HocLayout from '../../components/HocLayout';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { styles } from './styles';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrum";
import Popover from '@mui/material/Popover';
import CustomCard from "../../components/Card";
import Image from '../../assets/meetballicon.svg'
import PopOverMenu from './PopOverMenu';
// import CustomPopOver from '../../components/PopOver';
const Treatments = () => {

    const [PopOver, setPopOver] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setPopOver(event.currentTarget);
    };

    const handleClose = (event: MouseEvent) => {
        setPopOver(null);
    };
    const open = Boolean(PopOver);
    const id = open ? 'simple-popover' : undefined;

    const columns: GridColDef[] = [
        {
            field: "S.No",
            headerName: "S.No",
            width: 130,
            renderCell: (params) => {
                return (
                    <Typography sx={styles.rowData}>
                        {params.row.SNo}
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
            field: "Examination Date",
            headerName: "Examination Date",
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.ExaminationDate}</Typography>
                    </>
                );
            },
        },
        {
            field: "Overall Status",
            headerName: "Overall Status",
            width: 180,
            renderCell: (params) => {
                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.OverallStatus}</Typography>
                    </>
                );
            },
        },
        {
            field: "Treatment Course Cost",
            headerName: "Treatment Course Cost",
            width: 200,
            renderCell: (params) => {

                return (
                    <>
                        <Typography sx={styles.rowData}>{params.row.TreatmentCourseCost}</Typography>
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
                                flexDirection={"row"}
                                gap={"10px"}
                            >
                                <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> View </Typography></RouterLink>
                            </Box>
                        </>
                        <>
                            <Box
                                display={"flex"}
                                flexDirection={"row"}
                                gap={"10px"}>
                                <EditOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> Edit </Typography></RouterLink>
                            </Box>
                        </>
                        <>
                            <Box
                                display={"flex"}
                                flexDirection={"row"}
                                gap={"10px"}
                            >
                                <Typography sx={styles.rowData}
                                > More </Typography>
                                {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                                </Button> */}
                                <button onClick={handleClick}>
                                    <img src={Image} alt="" style={styles.Imagemeetball}
                                    />
                                </button>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={PopOver}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                      }}
                                >
                                    <PopOverMenu/>
                                </Popover>
                            </Box>
                        </>
                    </Grid>
                )
            },
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

    ];


    const rows = [
        {
            id: 1,
            SNo: '1',
            TreatmentCourse: "Root Canal",
            ExaminationDate: "Treatment Course Cost",
            OverallStatus: "Treatment Course Cost",
            TreatmentCourseCost: "Treatment Course Cost",
            Actions: "-",
        },
        {
            id: 2,
            SNo: '1',
            TreatmentCourse: "Root Canal",
            ExaminationDate: "Treatment Course Cost",
            OverallStatus: "Treatment Course Cost",
            TreatmentCourseCost: "Treatment Course Cost",
            Actions: "-",
        },

    ];





    return (
        <>

            <Breadcrumbs title={"Treatments"} breadcrumbsArr={breadcrumbs} />
            <Box sx={styles.screenContainer}>
                <Grid container>
                    <Grid item md={12}>
                        <CustomCard>
                            <CustomTable coloumns={columns} rows={rows} itemsPerPage={5} rowsPerPage={5}
                                onCellClick={""} />
                        </CustomCard>
                    </Grid>
                </Grid>
         
            </Box>
        </>
    )
}
const Treatmentshoc = HocLayout(Treatments)
export default Treatmentshoc
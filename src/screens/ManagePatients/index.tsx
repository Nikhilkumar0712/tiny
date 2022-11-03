import React from 'react'
import HocLayout from '../../components/HocLayout'
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import { Box, Link, Typography, Grid, InputAdornment, Avatar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Breadcrum from "../../components/Breadcrum";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { styles } from "./styles";
import { Search } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import { useNavigate } from "react-router-dom";
import CustomCard from '../../components/Card';
import CustomTable from '../../components/Table';
import CustomSwitch from '../../components/Switch';
const ManagePatients = () => {

  
  const columns: GridColDef[] = [
    {
      field: "PatientName",
      headerName: "Patient Name",
      width: 180,
      renderCell: (params) => {
        return (
          <Box
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}>
            <Avatar alt="Remy Sharp" src="../../assets/profile.png" />
            <Typography sx={styles.rowData}>
              {params.row.PatientName}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "PatientId",
      headerName: "Patient Id",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>
              {params.row.PatientId}
            </Typography>
          </>
        );
      },
    },
    {
      field: "DateofBirth",
      headerName: "Date of Birth",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.DateofBirth}</Typography>
          </>
        );
      },
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.Gender}</Typography>
          </>
        );
      },
    },
    {
      field: "ContactInfo",
      headerName: "Contact Info",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.ContactInfo}</Typography>
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
            justifyContent={"space-between"}
          >
            <>
              <Grid
                flexDirection={"row"}
                alignItems={"center"}
                gap={"10px"}
                textAlign={"center"}>
                <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                <RouterLink to="/PatientProfile" style={{textDecoration: 'none' }}><Typography sx={styles.rowData}> View </Typography></RouterLink>
              </Grid>
            </>
            <>
              <Grid
                flexDirection={"row"}
                textAlign={"center"}
                alignItems={"center"}>
                <EditIcon sx={styles.actionIcon} />
                <RouterLink to="/BookingsView" style={{textDecoration: 'none' }}><Typography sx={styles.rowData}> Edit </Typography></RouterLink>
              </Grid>
            </>
            <>
              <Grid
                flexDirection={"row"}
                textAlign={"center"}
                alignItems={"center"}>
                <CustomSwitch />
                <RouterLink to="/BookingsView" style={{textDecoration: 'none' }}><Typography sx={styles.rowData}> Active </Typography></RouterLink>
              </Grid>
            </>
          </Grid>
        )
      },
    },
  ];


  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("");
  };
  const buttonClicked = () => {
    navigate("/PatientRegistration")
  }
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
      Patients
    </Typography>
  ];
  const rows = [
    {
      id: 1,
      PatientName: 'Suresh',
      PatientId: "156",
      DateofBirth: "22 Sept 2022",
      Gender: "Male",
      ContactInfo: "9640363627",
      Actions: "-",
    },
    {
      id: 1,
      PatientName: 'Suresh',
      PatientId: "156",
      DateofBirth: "22 Sept 2022",
      Gender: "Male",
      ContactInfo: "9640363627",
      Actions: "-",
    },
    {
      id: 1,
      PatientName: 'Suresh',
      PatientId: "156",
      DateofBirth: "22 Sept 2022",
      Gender: "Male",
      ContactInfo: "9640363627",
      Actions: "-",
    },
    {
      id: 1,
      PatientName: 'Suresh',
      PatientId: "156",
      DateofBirth: "22 Sept 2022",
      Gender: "Male",
      ContactInfo: "9640363627",
      Actions: "-",
    },
    {
      id: 1,
      PatientName: 'Suresh',
      PatientId: "156",
      DateofBirth: "22 Sept 2022",
      Gender: "Male",
      ContactInfo: "9640363627",
      Actions: "-",
    },
  ];
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mr={2}>
        <Breadcrum title={"Patients"} breadcrumbsArr={breadcrumbs} />
        <CustomButton title={"Add New Patients"}
          handleButtonClick={buttonClicked}
          backgroundcolor={"#204289"}
          bordercolor={"#204289"}
          border={"1px solid"}
          fontsize={"14px"}
          color={"info"}
          padding={"4px 20px"}
          endIcon={<AddIcon />} />
      </Box>
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Grid container>
            <Grid item md={12}>
              <Box width={"200px"}>
                <CustomInput size={'small'} placeholder="Search Patients"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <CustomTable coloumns={columns} rows={rows} itemsPerPage={4} rowsPerPage={4} 
                onCellClick={""}/>
              </Box>
            </Grid>
          </Grid>
        </CustomCard>
      </Box>
    </>

  )
}
const ManagePatientshoc = HocLayout(ManagePatients)
export default ManagePatientshoc
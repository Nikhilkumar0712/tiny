import React from "react";
import HocLayout from "../../components/HocLayout";
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import Breadcrumbs from "../../components/Breadcrum";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import CustomCard from "../../components/Card";
import CustomInput from "../../components/Input";
import CustomDatePicker from "../../components/DatePicker";
import CustomSelectPicker from "../../components/SelectPicker";
import CustomTable from "../../components/Table";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import CircleIcon from '@mui/icons-material/Circle';
import DescriptionIcon from '@mui/icons-material/Description';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link as RouterLink } from 'react-router-dom';
import NewBookings from "../Dashboard/NewBookings";

const Appointments = () => {
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
      Appointments
    </Typography>,
  ];

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

  const columns: GridColDef[] = [
    {
      field: "Patient",
      headerName: "Patient",
      width: 200,
      renderCell: (params) => {
        return (
          <Grid
            container
            flexDirection="row"
            alignItems={"center"}
          >
            <Box
              component="img"
              sx={styles.avatarImage}
              alt="Logo"
              src={require("../../assets/avtar.png")}
            />

            <Typography sx={styles.patientName}>
              {params.row.Patient}
            </Typography>
          </Grid>
        );
      },
    },
    {
      field: "DateTime",
      width: 220,
      headerName: "Appointment Date & Time",
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>
              {params.row.Date} <br /> {params.row.Time}
            </Typography>
          </>
        );
      },
    },
    {
      field: "Doctor",
      headerName: "Doctor",
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.Doctor}</Typography>
          </>
        );
      },
    },
    {
      field: "Chair",
      headerName: "Chair",
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.chairColorText}><CircleIcon sx={styles.chairColor} />  {params.row.Chair}</Typography>
          </>
        );
      },
    },
    {
      field: "Type",
      headerName: "Type",
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.Type}</Typography>
          </>
        );
      },
    },
    {
      field: "Notes",
      headerName: "Notes",
      renderCell: (params) => {
        if (params.row.Type === "Treatment") {
          return (
            <DescriptionIcon style={styles.notesIcon} />
          )
        } else {
          return (
            <>
              <Typography sx={styles.rowData}>-</Typography>
            </>
          );
        }

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
            justifyContent={"space-between"}

          >
            <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
            <RouterLink to="/AppointmentsView"><Typography sx={styles.rowData}> View </Typography></RouterLink>
            <MoreVertIcon sx={styles.actionIcon} />
          </Grid>
        )
      },
    },
  ];

  const rows = [
    {
      id: 2,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 2,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 3,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "Treatment",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 4,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 5,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "Treatment",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 6,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 7,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 8,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 9,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 10,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 11,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
    {
      id: 12,
      Patient: "Vijay Reddy",
      Date: "31 Aug 2022",
      Time: " 06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "-",
      Actions: "-",
    },
  ];

  return (
    <>
      <Breadcrumbs title={"Appointments"} breadcrumbsArr={breadcrumbs} />
      <Box sx={styles.screenContainer}>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <CustomCard>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <CustomInput size={"small"} placeholder="Search Patients"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }} />
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item md={6}>
                      <CustomSelectPicker
                        selectValue={1}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={220}
                        selectData={selectData}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <CustomDatePicker fullWidth={true} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <CustomTable coloumns={columns} rows={rows} itemsPerPage={5} rowsPerPage={5} />
            </CustomCard>
          </Grid>
          <Grid item md={4}>
                <NewBookings />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const AppointmentsHoc = HocLayout(Appointments);
export default AppointmentsHoc;

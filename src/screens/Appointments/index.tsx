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
import CustomTable from "../../components/Tabel";
import NewBookings from "../Dashboard/NewBookings";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CircleIcon from "@mui/icons-material/Circle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link as RouterLink } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("./Dashboard");
  };

  const breadcrumbs = [
    <RouterLink
      to="/Dashboard"
      style={styles.breadcrumbSubtext}
    >
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Confirmed Appointments
    </Typography>
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

  const tableHeadData = [
    "Patient Name",
    "Appointment Time",
    "Doctor",
    "Chair",
    "Type",
    "Notes",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      PatientName: "Vijay Reddy",
      AppointmentDate: "31 Aug 2022",
      AppointmentTime: "06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "",
      Actions: "",
    },
    {
      id: 2,
      PatientName: "Vijay Reddy",
      AppointmentDate: "31 Aug 2022",
      AppointmentTime: "06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "",
      Actions: "",
    },
    {
      id: 3,
      PatientName: "Vijay Reddy",
      AppointmentDate: "31 Aug 2022",
      AppointmentTime: "06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "",
      Actions: "",
    },
    {
      id: 4,
      PatientName: "Vijay Reddy",
      AppointmentDate: "31 Aug 2022",
      AppointmentTime: "06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "",
      Actions: "",
    },
    {
      id: 5,
      PatientName: "Vijay Reddy",
      AppointmentDate: "31 Aug 2022",
      AppointmentTime: "06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "",
      Actions: "",
    },
    {
      id: 6,
      PatientName: "Vijay Reddy",
      AppointmentDate: "31 Aug 2022",
      AppointmentTime: "06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "",
      Actions: "",
    },
    {
      id: 7,
      PatientName: "Vijay Reddy",
      AppointmentDate: "31 Aug 2022",
      AppointmentTime: "06:00 Pm",
      Doctor: "Dr.Basava",
      Chair: "Red",
      Type: "OP",
      Notes: "",
      Actions: "",
    },
  ];

  return (
    <>
    <Grid container justifyContent={'space-between'} alignItems={'center'}>
       <Grid item md={8}>
          <Breadcrumbs title={"Confirmed Appointments"} breadcrumbsArr={breadcrumbs} />
       </Grid>
       <Grid item md={4}>
          <Typography sx={styles.heading}>New Booking</Typography>
       </Grid>
    </Grid>
      
      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={8}>
            <CustomCard>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={styles.filterContainer}
                spacing={6}
              >
                <Grid item>
                  <CustomInput
                    size={"small"}
                    placeholder="Search Patients"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item>
                  <Grid container spacing={1}>
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
              <Box sx={styles.tableContainer}>
                <CustomTable header={tableHeadData}>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Grid
                          container
                          justifyContent={"space-around"}
                          alignItems={"center"}
                        >
                          <Box
                            component="img"
                            sx={{
                              height: 45,
                              width: 45,
                              borderRadius: 22,
                            }}
                            alt={row.PatientName}
                            src={require("../../assets/avtar.png")}
                          />
                          <Typography sx={styles.tableCell}>
                            {row.PatientName}
                          </Typography>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.appointmentDate}>
                          {row.AppointmentDate}
                        </Typography>
                        <br />
                        <Typography sx={styles.appointmentTime}>
                          {row.AppointmentTime}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Doctor}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          justifyContent={"space-around"}
                          alignItems={"center"}
                        >
                          <CircleIcon
                            style={{ color: row.Chair, fontSize: 11 }}
                          />{" "}
                          <Typography sx={styles.Chair}>{row.Chair}</Typography>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Type}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          justifyContent={"space-around"}
                          alignItems={"center"}
                        >
                          <Box
                            component="img"
                            sx={{
                              height: 25,
                              width: 25,
                              borderRadius: 22,
                            }}
                            alt={row.PatientName}
                            src={require("../../assets/activeaccounts.svg")}
                          />{" "}
                          <Typography sx={styles.tableCell}>Notes</Typography>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          flexDirection="row"
                          justifyContent={"space-between"}
                        >
                          <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                          <RouterLink to="/BookingsView" style={{textDecoration : 'none'}}>
                            <Typography sx={styles.tableCell}> View </Typography>
                          </RouterLink>
                          <MoreVertIcon sx={styles.actionIcon} />
                        </Grid>
                      </TableCell>
                    </TableRow>
                  ))}
                </CustomTable>
              </Box>
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

import React from "react";
import { styles } from "./styles";
import HocLayout from "../../../components/HocLayout";
import CustomCard from "../../../components/Card";
import { Typography, Link, Grid, Box } from "@mui/material";
import Breadcrum from "../../../components/Breadcrum";
import CustomButton from "../../../components/Button";
import AppointmentandBookings from "../../Dashboard/AppointmentsandBookings";
import CircleIcon from "@mui/icons-material/Circle";

const AppointmentsView = () => {
  const handleOnClickBreadcrumItem = () => {};

  const buttonClicked = () => {};

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

    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/Appointments"
      onClick={handleOnClickBreadcrumItem}
      sx={styles.breadcrumbSubtext}
    >
      Appointments
    </Link>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      View Appointments
    </Typography>,
  ];

  return (
    <>
      <Breadcrum title={"Appointment View"} breadcrumbsArr={breadcrumbs} />
      <Grid container spacing={2} mt={1}>
        <Grid item md={8}>
          <CustomCard>
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              pr={2}
              pt={2}
            >
              <Grid item md={5}>
                <Typography sx={styles.heading}>Patient Details</Typography>
              </Grid>
              <Grid item md={7}>
                <Grid
                  container
                  flexDirection={"row"}
                  justifyContent={"end"}
                  alignItems={"center"}
                  gap={"8px"}
                >
                  <Grid item>
                    <CustomButton
                      endIcon={""}
                      handleButtonClick={buttonClicked}
                      title="Confirm Appointment"
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      border={"1px solid"}
                      fontsize={"12px"}
                      color={"info"}
                      padding={"10px 18px"}
                    />
                  </Grid>

                  <Grid item>
                    <CustomButton
                      endIcon={""}
                      handleButtonClick={buttonClicked}
                      title="Change Booking"
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      border={"1px solid"}
                      fontsize={"12px"}
                      color={"info"}
                      padding={"10px 18px"}
                    />
                  </Grid>
                  <Grid item>
                    <CustomButton
                      endIcon={""}
                      handleButtonClick={buttonClicked}
                      title="Cancel Booking"
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      border={"1px solid"}
                      fontsize={"12px"}
                      color={"info"}
                      padding={"10px 18px"}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={styles.patientDetailsContainer}>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item md={8}>
                  <Grid
                    container
                    flexDirection={"row"}
                   
                  >
                    <Grid item md={1}>
                      <Box
                        component="img"
                        sx={styles.avatarImage}
                        alt="Logo"
                        src={require("../../../assets/avtar.png")}
                      />
                    </Grid>
                    <Grid item md={11} >
                      <Typography sx={styles.patientName}>
                        Patient Name : Smrithi
                      </Typography>
                      <Typography sx={styles.patientData}>
                        16 Sep 1995 | 27 Yrs | Female
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <Grid container flexDirection={"row"} alignItems={"center"}>
                    <Typography sx={styles.patientHeading}>
                      Contact No :
                    </Typography>
                    <Typography sx={styles.patientId}>9018290198</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Typography sx={styles.heading}>Booking Detail</Typography>
            <Box sx={styles.patientDetailsContainer}>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-evenly"}
              >
                <Grid item md={8}>
                  <Grid
                    container
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                   <Grid item md={2}></Grid>
                    <Grid item md={10}>
                      <Grid
                        container
                        flexDirection={"row"}
                        alignItems={"center"}
                      >
                        <Typography sx={styles.patientHeading}>
                          Booking Date :{" "}
                        </Typography>
                        <Typography sx={styles.patientId}>
                          23 Sept 2022
                        </Typography>
                      </Grid>
                     
                    </Grid>
                    
                  </Grid>
                </Grid>
                <Grid item md={4}></Grid>
               
              </Grid>
            </Box>
            <Typography sx={styles.heading}>Doctor Detail</Typography>
            <Box sx={styles.patientDetailsContainer}>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item md={8}>
                  <Grid
                    container
                    flexDirection={"row"}
                   
                  >
                    <Grid item md={1}>
                      <Box
                        component="img"
                        sx={styles.avatarImage}
                        alt="Logo"
                        src={require("../../../assets/avtar.png")}
                      />
                    </Grid>
                    <Grid item md={11} >
                      <Typography sx={styles.patientName}>
                        Dr. Surendra
                      </Typography>
                      <Typography sx={styles.patientData}>
                      B.D.S, M.D
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                 
                </Grid>
              </Grid>
            </Box>
            <Typography sx={styles.heading}>Referred By Details :</Typography>
            <Box sx={styles.patientDetailsContainer}>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-evenly"}
              >
                <Grid item md={8}>
                  <Grid
                    container
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Grid item md={2}></Grid>
                    <Grid item md={10}>
                      <Grid
                        container
                        flexDirection={"row"}
                        alignItems={"center"}
                      >
                        <Typography sx={styles.patientHeading}>
                          Name :
                        </Typography>
                        <Typography sx={styles.patientId}>Mahesh</Typography>
                      </Grid>
                      <Grid
                        container
                        flexDirection={"row"}
                        alignItems={"center"}
                      >
                        <Typography sx={styles.patientHeading}>
                          Referral Title :{" "}
                        </Typography>
                        <Typography sx={styles.patientId}>Doctor</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <Grid container flexDirection={"row"} alignItems={"center"}>
                    <Typography sx={styles.patientHeading}>
                        Referral Contact No : 
                    </Typography>
                    <Typography sx={styles.patientId}>8013981781</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </CustomCard>
        </Grid>
        <Grid item md={4}>
          <AppointmentandBookings />
        </Grid>
      </Grid>
    </>
  );
};

const AppointmentsViewHoc = HocLayout(AppointmentsView);
export default AppointmentsViewHoc;

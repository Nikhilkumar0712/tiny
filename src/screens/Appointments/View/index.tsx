import React from "react";
import { styles } from "./styles";
import HocLayout from "../../../components/HocLayout";
import CustomCard from "../../../components/Card";
import { Typography, Link, Grid, Box } from "@mui/material";
import Breadcrum from "../../../components/Breadcrum";
import CustomButton from "../../../components/Button";

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
      <Box sx={styles.screenContainer}>
        <Grid container spacing={2}>
          <Grid item md={9}>
            <CustomCard>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item md={6}>
                  <Typography sx={styles.heading}>Patient Details</Typography>
                </Grid>
                <Grid item md={6}>
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid item>
                      <CustomButton
                        handleButtonClick={buttonClicked}
                        title="Generate Bill"
                      />
                    </Grid>

                    <Grid item>
                      <CustomButton
                        handleButtonClick={buttonClicked}
                        title="Change Appointment"
                      />
                    </Grid>
                    <Grid item>
                      <CustomButton
                        handleButtonClick={buttonClicked}
                        title="Cancel Appointment"
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
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Grid item md={2}>
                        <Box
                          component="img"
                          sx={styles.avatarImage}
                          alt="Logo"
                          src={require("../../../assets/avtar.png")}
                        />
                      </Grid>
                      <Grid item md={10}>
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
                        Patient Id :
                      </Typography>
                      <Typography sx={styles.patientId}>1425678</Typography>
                    </Grid>
                    <Grid container flexDirection={"row"} alignItems={"center"}>
                      <Typography sx={styles.patientHeading}>
                        Contact No :
                      </Typography>
                      <Typography sx={styles.patientId}>9018290198</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Typography sx={styles.heading}>Appointment Detail</Typography>
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
                            Appointment Date :{" "}
                          </Typography>
                          <Typography sx={styles.patientId}>
                            23 Sept 2022
                          </Typography>
                        </Grid>
                        <Grid
                          container
                          flexDirection={"row"}
                          alignItems={"center"}
                        >
                          <Typography sx={styles.patientHeading}>
                            Booking Date :{" "}
                          </Typography>
                          <Typography sx={styles.patientId}>
                            22 Sept 2022
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4}>
                    <Grid container flexDirection={"row"} alignItems={"center"}>
                      <Typography sx={styles.patientHeading}>
                        Appointment Time :{" "}
                      </Typography>
                      <Typography sx={styles.patientId}>06:00 Pm</Typography>
                    </Grid>
                  </Grid>
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
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Grid item md={2}>
                        <Box
                          component="img"
                          sx={styles.avatarImage}
                          alt="Logo"
                          src={require("../../../assets/avtar.png")}
                        />
                      </Grid>
                      <Grid item md={10}>
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
                    <Grid container flexDirection={"row"} alignItems={"center"}>
                      <Typography sx={styles.patientHeading}>
                        Chair :
                      </Typography>
                      <Typography sx={styles.chairtext}>Red</Typography>
                    </Grid>
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
                        Referral Contact No :{" "}
                      </Typography>
                      <Typography sx={styles.patientId}>8013981781</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const AppointmentsViewHoc = HocLayout(AppointmentsView);
export default AppointmentsViewHoc;

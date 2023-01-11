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
  const handleOnClickBreadcrumItem = () => { };

  const buttonClicked = () => { };

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
     Confirmed Appointment View
    </Typography>,
  ];

  return (
    <>
      <Box sx={{ marginTop: 2, marginRight: 1.5 }}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item md={6}>
            <Breadcrum
              title={"Confirmed Appointment View"}
              breadcrumbsArr={breadcrumbs}
            />
          </Grid>
          <Grid item md={6}>
            <Grid
              container
              flexDirection={"row"}
              spacing={1}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Grid item>
                <CustomButton
                  endIcon={""}
                  handleButtonClick={buttonClicked}
                  title="Generate Bill"
                  backgroundcolor={"#204289"}
                  color={"#fff"}
                  width={130}
                />
              </Grid>

              <Grid item>
                <CustomButton
                  endIcon={""}
                  handleButtonClick={buttonClicked}
                  title="Change Appointment"
                  backgroundcolor={"#204289"}
                  color={"#fff"}
                  width={190}
                />
              </Grid>

              <Grid item>
                <CustomButton
                  endIcon={""}
                  handleButtonClick={buttonClicked}
                  title="Cancel Appointment"
                  backgroundcolor={"#204289"}
                  color={"#fff"}
                  width={190}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 2, marginRight: 1.5 }}>
        <CustomCard>
          <Box sx={styles.detailsContainer}>
            <Grid container justifyContent={"space-between"} rowSpacing={2}>
              <Grid item md={4}>
                <Grid container flexDirection={"row"} spacing={2}>
                  <Grid item>
                    <Box
                      component="img"
                      sx={styles.avatarImage}
                      alt="Logo"
                      src={require("../../../assets/avtar.png")}
                    />
                  </Grid>
                  <Grid item>
                    <Grid container flexDirection={"row"} gap={"10px"} alignItems={"baseline"}>
                      <Grid item>
                        <Typography sx={styles.patientHeading}>
                          Patient Name
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.patientHeading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.patientId}>Smrithi</Typography>
                      </Grid>
                    </Grid>
                    <Box sx={{ marginTop: 0.6 }} />
                    <Grid container flexDirection={"row"} gap={"10px"} alignItems={"baseline"}>
                      <Grid item>
                        <Typography sx={styles.patientHeading}>Age</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.patientHeading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.patientId}>27 Yrs</Typography>
                      </Grid>
                    </Grid>

                    <Box sx={{ marginTop: 0.6 }} />
                    <Grid container flexDirection={"row"} gap={"10px"} alignItems={"baseline"}>
                      <Grid item>
                        <Typography sx={styles.patientHeading}>
                          Registered On
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.patientHeading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.patientId}>
                          22 Sept 2022
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={5}>
                <Grid container flexDirection={"row"} gap={"10px"} alignItems={"baseline"}>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>
                      Patient ID
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientId}>142567</Typography>
                  </Grid>
                </Grid>

                <Box sx={{ marginTop: 0.6 }} />
                <Grid container flexDirection={"row"} gap={"10px"} alignItems={"baseline"}>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>Gender </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientId}>Female</Typography>
                  </Grid>
                </Grid>

                <Box sx={{ marginTop: 0.6 }} />
                <Grid container flexDirection={"row"} gap={"10px"} alignItems={"baseline"}>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>
                      Address
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientId}>Slv Syam Enclave, Ameerpet, Hyderabad - 512345</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid container flexDirection={"row"} gap={"10px"} alignItems={"baseline"}>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>
                      Contact No
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientId}>9018290198</Typography>
                  </Grid>
                </Grid>

                <Box sx={{ marginTop: 0.6 }} />
                <Grid container flexDirection={"row"} gap={"10px"} alignItems={"baseline"}>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>Email  </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientHeading}>:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientId}>smrithi124@gmail.com</Typography>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box>
      <Box sx={{ marginTop: 2, marginRight: 1.5 }}>
        <CustomCard>
          <Box padding={'25px'}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  bgcolor={"#F8F8F8"} borderRadius={"17px"}
                  padding={"15px"}>
                  <Box>
                    <Typography sx={styles.heading}>Appointment Detail</Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"20px"}
                    alignItems={"center"}>
                    <Box>
                      <Box display={"flex"}
                        mt={3}
                        gap={"5px"}
                        alignItems={"baseline"}>
                        <Typography sx={styles.patientHeading}>Appointment Name  : </Typography>
                        <Typography sx={styles.patientId}> Fluoride treatment </Typography>
                      </Box>
                      <Box display={"flex"}
                        mt={2}
                        gap={"5px"}
                        alignItems={"baseline"}>
                        <Typography sx={styles.patientHeading}>Appointment Date & Time:  </Typography>
                        <Typography sx={styles.patientId}> 23 Sept 2022 | 06:00 Pm - 06:15 Pm </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box display={"flex"}
                        mt={3}
                        gap={"5px"}
                        alignItems={"baseline"}>
                        <Typography sx={styles.patientHeading}>Type :  </Typography>
                        <Typography sx={styles.patientId}> Treatment </Typography>
                      </Box>
                      <Box display={"flex"}
                        mt={2}
                        gap={"5px"}
                        alignItems={"baseline"}>
                        <Typography sx={styles.patientHeading}>Duration :  </Typography>
                        <Typography sx={styles.patientId}> 15 Mins  </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>

                <Box
                  bgcolor={"#F8F8F8"} borderRadius={"17px"}
                  padding={"15px"}>
                  <Box>
                    <Typography sx={styles.heading}>Doctor Detail</Typography>
                  </Box>
                  <Box
                    mt={3}
                    display={"flex"}
                    gap={"20px"}
                    alignItems={"center"}>
                    <Box
                      component="img"
                      sx={styles.davatarImage}
                      alt="Logo"
                      src={require("../../../assets/avtar.png")} />
                    <Box>
                      <Typography sx={styles.patientName}>
                        Dr. Surendra
                      </Typography>
                      <Typography sx={styles.patientData}>B.D.S, M.D</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={6}>
                <Box bgcolor={"#F8F8F8"} borderRadius={"17px"}
                  padding={"15px"}>
                  <Box>
                    <Typography sx={styles.heading}>Chair Details</Typography>
                  </Box>
                  <Box display={"flex"}
                    mt={3}
                    gap={"20px"}
                    alignItems={"center"}>
                    <Box display={"flex"}
                      gap={"5px"}
                      alignItems={"baseline"}>
                      <Typography sx={styles.patientHeading}>Chair : </Typography>
                      <CircleIcon style={{ color: "red", fontSize: 11 }} />
                      <Typography sx={styles.chairtext}>Red</Typography>
                    </Box>
                    <Box display={"flex"}
                      gap={"5px"}
                      alignItems={"baseline"}>
                      <Typography sx={styles.patientHeading}>Chair Assistant :  </Typography>
                      <Typography sx={styles.patientId}>  Rajesh </Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"}
                    mt={3}
                    gap={"5px"}
                    alignItems={"baseline"}>
                    <Typography sx={styles.patientHeading}>Chair Type :  </Typography>
                    <Typography sx={styles.patientId}>  Treatment </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  bgcolor={"#F8F8F8"} borderRadius={"17px"}
                  padding={"15px"}>
                  <Box>
                    <Typography sx={styles.heading}>Referred By Details :</Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"20px"}
                    alignItems={"center"}>
                    <Box>
                      <Box display={"flex"}
                        mt={3}
                        gap={"5px"}
                        alignItems={"baseline"}>
                        <Typography sx={styles.patientHeading}>Referral Name  : </Typography>
                        <Typography sx={styles.patientId}> Mahesh </Typography>
                      </Box>
                      <Box display={"flex"}
                        mt={2}
                        gap={"5px"}
                        alignItems={"baseline"}>
                        <Typography sx={styles.patientHeading}>Referral Code :  </Typography>
                        <Typography sx={styles.patientId}> T123 </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box display={"flex"}
                        mt={3}
                        gap={"5px"}
                        alignItems={"baseline"}>
                        <Typography sx={styles.patientHeading}>Type :  </Typography>
                        <Typography sx={styles.patientId}> Treatment </Typography>
                      </Box>
                      <Box display={"flex"}
                        mt={2}
                        gap={"5px"}
                        alignItems={"baseline"}>
                        <Typography sx={styles.patientHeading}>Referral Contact No :   </Typography>
                        <Typography sx={styles.patientId}> D2389  </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

const AppointmentsViewHoc = HocLayout(AppointmentsView);
export default AppointmentsViewHoc;

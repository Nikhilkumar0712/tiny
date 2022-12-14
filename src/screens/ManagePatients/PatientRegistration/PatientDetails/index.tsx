import { Box, Grid, Typography, Link } from "@mui/material";
import React from "react";
import CustomSelectPicker from "../../../../components/SelectPicker";
import CustomInput from "../../../../components/Input";
import CustomDatePicker from "../../../../components/DatePicker";
import CustomButton from "../../../../components/Button";
import TabHeader from "../TabHeader";
import { useNavigate } from "react-router-dom";
import HocLayout from "../../../../components/HocLayout";
import { styles } from './styles'
import Breadcrum from "../../../../components/Breadcrum";
import CustomCard from "../../../../components/Card";

const PatientDetails = () => {
  const title = [
    {
      value: 1,
      name: "Mr",
    },
    {
      value: 2,
      name: "Ms",
    },
  ];

  const RelationAbbrevations = [
    {
      value: 1,
      name: "S/o",
    },
    {
      value: 2,
      name: "D/o",
    },
  ];

  const Nationality = [
    {
      value: 1,
      name: "Select Nationality",
    },
    {
      value: 2,
      name: "Other",
    },
  ];

  const State = [
    {
      value: 1,
      name: "Select State",
    },
    {
      value: 2,
      name: "Andhra Pradesh",
    },
  ];

  const MaterialStatus = [
    {
      value: 1,
      name: "Select Martial Status",
    },
    {
      value: 2,
      name: "UnMarried",
    },
  ];

  const Gender = [
    {
      value: 1,
      name: "Gender",
    },
    {
      value: 2,
      name: "Female",
    },
  ];

  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("/ManagePatients")
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

    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/ManagePatients"
      onClick={handleOnClickBreadcrumItem}
      sx={styles.breadcrumbSubtext}
    >
      Manage Patients
    </Link>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Patient Registration
    </Typography>
  ];

  const buttonClicked = () => { };
  return (
    <>
      <Breadcrum title={"Patient Registration"} breadcrumbsArr={breadcrumbs} />
      <Box mt={2}>
        <CustomCard>
          <Box p={2}>
            <TabHeader path={location.pathname} />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Box position={"relative"} width={"fit-content"}>
                  <Box
                    bgcolor={"#F5F5F5"}
                    padding={"20px"}
                    width={"115px"}
                    display={"flex"}
                    borderRadius={"50%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"115px"}
                  >
                    <Box
                      width={"45px"}
                      component="img"
                      alt="Logo"
                      src={require("../../../../assets/profilecard.svg")}
                    ></Box>
                  </Box>
                  <Box
                    position={"absolute"}
                    bottom={"0px"}
                    right={"0px"}
                    bgcolor={"#204289"}
                    padding={"5px"}
                    borderRadius={"50%"}
                    width={"30px"}
                    height={"30px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      component="img"
                      alt="Logo"
                      src={require("../../../../assets/camera.svg")}
                    ></Box>
                  </Box>
                </Box>
                <Box mt={"20px"}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <CustomSelectPicker
                        placeholderText={"Mr"}
                        selectValue={''}
                        size={"small"}
                        fullWidth={false}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={"68px"}
                        selectData={title}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <CustomInput
                        placeholder={"Enter Patient Name"}
                        InputProps={""}
                        size={"small"}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={"15px"}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <CustomSelectPicker
                        placeholderText={"S/o"}
                        selectValue={''}
                        size={"small"}
                        fullWidth={false}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={"70%"}
                        selectData={RelationAbbrevations}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <CustomInput
                        placeholder={"Enter Name"}
                        InputProps={""}
                        size={"small"}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={"15px"}>
                  <CustomSelectPicker
                    placeholderText={"Select Nationality"}
                    selectValue={''}
                    size={"small"}
                    fullWidth={true}
                    handleSelectValue={(val: any) => console.log("hii")}
                    width={"100%"}
                    selectData={Nationality}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomDatePicker fullWidth={"fullWidth"} />
                </Box>
                <Box mt={"15px"}>
                  <CustomSelectPicker
                    placeholderText={"Select Material Status"}
                    selectValue={1}
                    size={"small"}
                    fullWidth={true}
                    handleSelectValue={(val: any) => console.log("hii")}
                    width={"100%"}
                    selectData={MaterialStatus}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomSelectPicker
                    placeholderText={"Gender"}
                    selectValue={''}
                    size={"small"}
                    fullWidth={true}
                    handleSelectValue={(val: any) => console.log("hii")}
                    width={"100%"}
                    selectData={Gender}
                  />
                </Box>
              </Grid>
              <Grid item xs={4} mt={"65px"}>
                <Box mt={"15px"}>
                  <CustomSelectPicker
                    placeholderText={"Select State"}
                    selectValue={1}
                    size={"small"}
                    fullWidth={true}
                    handleSelectValue={(val: any) => console.log("hii")}
                    width={"100%"}
                    selectData={State}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"occupation"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"Aadhar No"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"Patient Code"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"Primary Mobile Number"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
              </Grid>
              <Grid item xs={4} mt={"65px"}>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"Alternate Mobile Number"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"Zip Code"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"Address 1"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"Address 2"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={"15px"}>
                  <CustomInput
                    placeholder={"Location/ Area"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={"50px"}>
                  <Grid
                    container
                    flexDirection={"row"}
                    spacing={1}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                  >
                    <Grid item>
                      <CustomButton
                        title={"Clear"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#FFFFFF"}
                        bordercolor={"#204289"}
                        color={"#204289"}
                        width={110}
                      />
                    </Grid>
                    <Grid item>
                      <CustomButton
                        title={"Register"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#204289"}
                        bordercolor={"#204289"}
                        color={"#fffff"}
                        width={110}
                        padding={7}
                      />
                    </Grid>
                    <Grid item>
                      <CustomButton
                        title={"Next"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#204289"}
                        bordercolor={"#204289"}
                        color={"#fffff"}
                        width={110}
                        padding={7}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};
const PatientDetailsHoc = HocLayout(PatientDetails)
export default PatientDetailsHoc

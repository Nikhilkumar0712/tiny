import React from "react";
import { Link, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HocLayout from "../../components/HocLayout";
import { styles } from "./styles";
import Breadcrumbs from "../../components/Breadcrum";
import AccountsHeader from "../../screens/Billing/AccountsHeader";
import CustomCard from "../../components/Card";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import CustomSelectPicker from "../../components/SelectPicker";
import CustomInput from "../../components/Input";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CustomButton from "../../components/Button";

const Diagnosis = () => {
  const location = useLocation();

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
      Diagnosis
    </Typography>,
  ];

  const complaintData = [
    {
      name: "Type patients chief complaints here",
      value: "",
    },
    {
      name: "complaint1",
      value: "complaint1",
    },
    {
      name: "complaint2",
      value: "complaint2",
    },
    {
      name: "complaint3",
      value: "complaint3",
    },
  ];

  const presentIllness = [
    {
      name: "Present illness",
      value: "",
    },
    {
      name: "illness1",
      value: "illness1",
    },
    {
      name: "illness2",
      value: "illness2",
    },
  ];

  const pastIllness = [
    {
      name: "Past illness",
      value: "",
    },
    {
      name: "illness1",
      value: "illness1",
    },
    {
      name: "illness2",
      value: "illness2",
    },
  ];

  const familyIllness = [
    {
      name: "Family History Illness",
      value: "",
    },
    {
      name: "illness1",
      value: "illness1",
    },
    {
      name: "illness2",
      value: "illness2",
    },
  ];

  const drugHistory = [
    {
      name: "Drug History",
      value: "",
    },
    {
      name: "history1",
      value: "history1",
    },
    {
      name: "history2",
      value: "history2",
    },
  ];

  const underMedication = [
    {
      name: "Under any other Medication",
      value: "",
    },
    {
      name: "med1",
      value: "med1",
    },
    {
      name: "med2",
      value: "med2",
    },
  ];

  const allergyData = [
    {
      name: "Select Allergies",
      value: "",
    },
    {
      name: "allergy1",
      value: "allergy1",
    },
    {
      name: "allergy2",
      value: "allergy2",
    },
  ];

  const medicalInfo = [
    {
      name: "Enter medical information",
      value: "",
    },
    {
      name: "info1",
      value: "info1",
    },
    {
      name: "info2",
      value: "info2",
    },
  ];

  const habitData = [
    {
      name: "Enter Habit",
      value: "",
    },
    {
      name: "habit1",
      value: "habit1",
    },
    {
      name: "habit2",
      value: "habit2",
    },
  ];

  const handleChange = (event: any) => {
    console.log(event);
  };

  const goToExamination = () => {
    navigate('/Examination')
  };

  const buttonClicked = () => {
    console.log('button clicked')
  }

  return (
    <>
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Diagnosis"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>

      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Grid container  flexDirection={"row"} justifyContent={"space-between"} spacing={16} sx={{padding : 2}}>
            <Grid item md={6}>
                <Header path={location.pathname} />
            </Grid>
            <Grid item md={6}>
               
            </Grid>
        </Grid>
          <Box sx={styles.formContainer}>
            <Typography sx={styles.label}>Chief Complaint</Typography>
            <Box sx={styles.feildContainer}>
              <CustomSelectPicker
                selectValue={""}
                size={"small"}
                fullWidth={true}
                handleSelectValue={(val: any) => console.log(val)}
                width={"100%"}
                selectData={complaintData}
                placeholderText={'Type patients chief complaints here'}
              />
            </Box>

            <Box sx={styles.feildContainer}>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={4}
              >
                <Grid item md={6}>
                  <Grid
                    container
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    rowSpacing={2}
                    spacing={4}
                  >
                    <Grid item md={12}>
                      <Typography sx={styles.label}>History</Typography>
                    </Grid>
                    <Grid item md={6}>
                      <CustomSelectPicker
                        selectValue={""}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log(val)}
                        width={"100%"}
                        selectData={presentIllness}
                        placeholderText={'Present illness'}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <CustomSelectPicker
                        selectValue={""}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log(val)}
                        width={"100%"}
                        selectData={pastIllness}
                        placeholderText={'Past illness'}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <CustomSelectPicker
                        selectValue={""}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log(val)}
                        width={"100%"}
                        selectData={familyIllness}
                        placeholderText={'Family History Illness'}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <CustomSelectPicker
                        selectValue={""}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log(val)}
                        width={"100%"}
                        selectData={drugHistory}
                        placeholderText={'Drug History'}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <CustomSelectPicker
                        selectValue={""}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log(val)}
                        width={"100%"}
                        selectData={underMedication}
                        placeholderText={'Using any Medication'}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6} sx={{ marginTop: 5 }}>
                  <Grid
                    container
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    rowSpacing={3}
                  >
                    <Grid item md={12}>
                      <Typography sx={styles.label}>Allergies</Typography>
                      <Box sx={styles.feildContainer1}>
                        <CustomSelectPicker
                          selectValue={["allergy1", "allergy2"]}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => handleChange(val)}
                          width={"100%"}
                          selectData={allergyData}
                          multiple={true}
                          
                        />
                      </Box>
                    </Grid>

                    <Grid item md={12}>
                      <Typography sx={styles.label}>
                        Medical Information
                      </Typography>
                      <Box sx={styles.feildContainer1}>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={medicalInfo}
                          placeholderText={'Enter medical information'}
                        />
                      </Box>
                    </Grid>

                    <Grid item md={12}>
                      <Typography sx={styles.label}>Habits</Typography>
                      <Box sx={styles.feildContainer1}>
                        <CustomSelectPicker
                          selectValue={["habit1", "habit2"]}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => handleChange(val)}
                          width={"100%"}
                          selectData={habitData}
                          multiple={true}
                          
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box sx={styles.feildContainer}>
              <Grid container flexDirection={"row"} spacing={1}>
                <Grid item md={12}>
                  <Typography sx={styles.label}>
                    Previous Dental Treatments
                  </Typography>
                </Grid>
                <Grid item md={3}>
                  <CustomInput
                    placeholder={"Treatment Name"}
                    InputProps={""}
                    size={"small"}
                  />
                </Grid>
                <Grid item md={3}>
                  <CustomInput
                    placeholder={"Treatment Month & Year"}
                    InputProps={""}
                    size={"small"}
                  />
                </Grid>
                <Grid item md={3}>
                  <Box sx={styles.iconContainer}>
                    <AddOutlinedIcon sx={styles.addIcon} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Box sx={styles.feildContainer}>
            <Grid container flexDirection={"row"} justifyContent={"flex-end"}>
              <CustomButton
                title={"Cancel"}
                handleButtonClick={buttonClicked}
                backgroundcolor={"#FFFFFF"}
                bordercolor={"#9DA2AB"}
                padding={"4px 50px"}
                border={"1px solid"}
                fontsize={"14px"}
                color={"primary"}
              />
              <Box sx={{ marginLeft: 1 }}>
                <CustomButton
                  title={"Next"}
                  handleButtonClick={goToExamination}
                  backgroundcolor={"#204289"}
                  bordercolor={"#204289"}
                  border={"1px solid"}
                  fontsize={"14px"}
                  color={"info"}
                  padding={"4px 50px"}
                />
              </Box>
            </Grid>
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

const DiagnosisHoc = HocLayout(Diagnosis);
export default DiagnosisHoc;

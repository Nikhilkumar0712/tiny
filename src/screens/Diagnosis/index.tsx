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

  return (
    <>
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Diagnosis"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>

      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Box sx={styles.screenContainer}>
            <Header path={location.pathname} />
          </Box>
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
              />
            </Box>
            <Typography sx={styles.label1}>History</Typography>
            <Box sx={styles.feildContainer}>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item md={6}>
                  <Grid
                    container
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    spacing={1}
                  >
                    <Grid item md={6}>
                      <CustomSelectPicker
                        selectValue={""}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log(val)}
                        width={"100%"}
                        selectData={presentIllness}
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
                      />
                    </Grid>
                    <Grid item md={12} sx={{marginTop:2}}>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={familyIllness}
                        />
                    </Grid>
                    <Grid item md={12} sx={{marginTop:2}}>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={drugHistory}
                        />
                    </Grid>
                    <Grid item md={12} sx={{marginTop:2}}>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={underMedication}
                        />
                    </Grid>
                  </Grid>
               </Grid>
                <Grid item md={6}></Grid>
              </Grid>
            </Box>
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

const DiagnosisHoc = HocLayout(Diagnosis);
export default DiagnosisHoc;

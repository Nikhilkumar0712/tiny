import React from "react";
import { Link, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HocLayout from "../../../components/HocLayout";
import { styles } from "./styles";
import Breadcrumbs from "../../../components/Breadcrum";
import AccountsHeader from "../../Billing/AccountsHeader";
import CustomCard from "../../../components/Card";
import Header from '../Header';
import { useLocation } from "react-router-dom";

const Examination = () => {

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
    </Typography>
    
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
        </CustomCard>
      </Box>
    </>
  );
};

const ExaminationHoc = HocLayout(Examination);
export default ExaminationHoc;

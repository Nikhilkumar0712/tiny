import React from "react";
import HocLayout from "../../components/HocLayout";
import { Box, Link, Typography, Grid } from "@mui/material";
import Breadcrumbs from "../../components/Breadcrum";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/Card";
import CustomInput from "../../components/Input";
import CustomSelectPicker from "../../components/SelectPicker";

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

  return (
    <Box>
      <Breadcrumbs title={"Appointments"} breadcrumbsArr={breadcrumbs} />
      <Grid container spacing={3} sx={styles.screenContainer}>
        <Grid item md={8}>
          <CustomCard>
            <Grid container spacing={2} display={'flex'}>
              <Grid item md={4}>
                <CustomInput />
              </Grid>
              <Grid item md={8}  justifyContent={'flex-end'}>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <CustomSelectPicker
                      selectValue={1}
                      handleSelectValue={(val: any) => console.log("hii")}
                    />
                  </Grid>
                  <Grid item md={6}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </Box>
  );
};

const AppointmentsHoc = HocLayout(Appointments);
export default AppointmentsHoc;

import React from "react";
import { Box, Grid, Typography, InputAdornment } from "@mui/material";
import CustomInput from "../Input";
import SideBar from "../SideBar";
import { styles } from "./styles";
import { Search } from "@mui/icons-material";

const HocLayout = (Component: any) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={2} sx={styles.sidebarGrid}>
        <SideBar />
      </Grid>
      <Grid item md={10} sx={styles.mainGrid}>
        <Grid container spacing={3} sx={styles.headerContainer}>
          <Grid item md={4}>
            <CustomInput size={'small'} placeholder="Search Patients"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={2}>
              <Grid item md={1}>
                <Box
                  component="img"
                  sx={styles.locationImage}
                  alt="Logo"
                  src={require("../../assets/map_marker.png")}
                />
              </Grid>
              <Grid item md={11}>
                <Typography sx={styles.locationHeading}>
                  Tiny Pearls Dental Care
                </Typography>
                <Typography sx={styles.address}>
                  Bd Spicy Hub Restaurant, Kothapet Main Road, R.K Puram, HYD
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <Grid container spacing={2}>
              <Grid item md={5}>
                <Box
                  component="img"
                  sx={styles.bellImage}
                  alt="Logo"
                  src={require("../../assets/bell.png")}
                />
              </Grid>
              <Grid item md={2}>
                <Box sx={styles.verticalDivider} />
              </Grid>
              <Grid item md={5}>
                <Box
                  component="img"
                  sx={styles.avatarImage}
                  alt="Logo"
                  src={require("../../assets/avtar.png")}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Component />
      </Grid>
    </Grid>
  );
};

export default HocLayout;

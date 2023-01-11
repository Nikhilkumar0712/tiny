import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { styles } from "./styles";
import { Link as RouterLink } from "react-router-dom";

interface HeaderInterface {
  path: string;
}
const TabHeader = (props: HeaderInterface) => {
  const { path } = props;
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={4} justifyContent={"center"}>
            <Box display={"flex"}
              justifyContent={"center"}>
              <Box
                sx={
                  path === "/PatientDetails"
                    ? styles.activeTabItemContainer
                    : styles.inactiveTabItemContainer
                }
              >
                <RouterLink to={"/PatientDetails"} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={
                      path === "/PatientDetails" ? styles.activeNavItem : styles.navItem
                    }
                  >
                    PatientDetails
                  </Typography>
                </RouterLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"center"}>
              <Box
                sx={
                  path === "/AttendReferralDetails"
                    ? styles.activeTabItemContainer
                    : styles.inactiveTabItemContainer
                }
              >
                <RouterLink to={"/AttendReferralDetails"} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={
                      path === "/AttendReferralDetails" ? styles.activeNavItem : styles.navItem
                    }
                  >
                    AttendReferralDetails
                  </Typography>
                </RouterLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"center"}>
              <Box
                sx={
                  path === "/SchemeDetails"
                    ? styles.activeTabItemContainer
                    : styles.inactiveTabItemContainer
                }
              >
                <RouterLink to={"/SchemeDetails"} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={
                      path === "/SchemeDetails" ? styles.activeNavItem : styles.navItem
                    }
                  >
                    SchemeDetails
                  </Typography>
                </RouterLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default TabHeader
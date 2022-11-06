import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { styles } from "./styles";
import { Link as RouterLink } from "react-router-dom";
interface HeaderInterface {
  path: string;
}
const Header = (props: HeaderInterface) => {
  const { path } = props;
  return (
    <Box sx={styles.tabContainer}>
      <Grid container>
        <Grid item md={3}>
          <Box
            sx={
              path === "/Diagnosis"
                ? styles.activeTabItemContainer
                : styles.inactiveTabItemContainer
            }
          >
            <RouterLink to={"/Diagnosis"} style={{ textDecoration: "none" }}>
              <Typography
                sx={
                  path === "/Diagnosis" ? styles.activeNavItem : styles.navItem
                }
              >
                Case History
              </Typography>
            </RouterLink>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box
            sx={
              path === "/Examination"
                ? styles.activeTabItemContainer
                : styles.inactiveTabItemContainer
            }
          >
            <RouterLink to={"/Examination"} style={{ textDecoration: "none" }}>
              <Typography
                sx={
                  path === "/Examination"
                    ? styles.activeNavItem
                    : styles.navItem
                }
              >
                Examination
              </Typography>
            </RouterLink>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box
            sx={
              path === "/Investigation"
                ? styles.activeTabItemContainer
                : styles.inactiveTabItemContainer
            }
          >
            <RouterLink
              to={"/Investigation"}
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={
                  path === "/Investigation"
                    ? styles.activeNavItem
                    : styles.navItem
                }
              >
                Investigation
              </Typography>
            </RouterLink>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box
            sx={
              path === "/Prescription"
                ? styles.activeTabItemContainer
                : styles.inactiveTabItemContainer
            }
          >
            <RouterLink to={"/Prescription"} style={{ textDecoration: "none" }}>
              <Typography
                sx={
                  path === "/Prescription"
                    ? styles.activeNavItem
                    : styles.navItem
                }
              >
                Prescription
              </Typography>
            </RouterLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;

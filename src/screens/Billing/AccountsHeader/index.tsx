import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../../../components/Card";
import { styles } from "./styles";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { Link as RouterLink } from "react-router-dom";

const AccountsHeader = () => {
  return (
    <Box sx={styles.cardContainer}>
      <CustomCard>
        <Box sx={{padding:2}}>
          <Grid container spacing={1} flexDirection={"row"}>
            <Grid item>
              <Box
                component="img"
                sx={styles.avatarImage}
                alt="Avtar"
                src={require("../../../assets/avtar.png")}
              />
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography sx={styles.patientName}>Smrithi</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles.patientId}>(142567)</Typography>
                </Grid>
              </Grid>
              <Typography sx={styles.patientDetails}>
                12 Sep 1995 | 27 | Female
              </Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                <Typography sx={styles.rowData}> View </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <ReceiptOutlinedIcon sx={styles.actionIcon} />
                <Typography sx={styles.rowData}> Billing </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CustomCard>
    </Box>
  );
};

export default AccountsHeader;

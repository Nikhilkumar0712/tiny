import { Box, Grid, Typography } from "@mui/material";
import React , { useState } from "react";
import CustomCard from "../../../components/Card";
import { styles } from "./styles";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CustomInput from "../../../components/Input";

import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
const AccountsHeader = () => {

  const [showDropdown,setShowDropDown] = useState(false)

  return (
    <Box sx={styles.cardContainer}>
      <CustomCard>
        <Box>
          <Grid
            container
            spacing={1}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Grid item sx={{margin: 1 }}>
              <Box
                component="img"
                sx={styles.avatarImage}
                alt="Avtar"
                src={require("../../../assets/avtar.png")}
              />
            </Grid>
            <Grid item sx={{margin: 1 }}>
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
            <Grid item sx={{margin: 1 }}>
              <Grid container>
                <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                <Typography sx={styles.rowData}> View </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{margin: 1 }}>
              <Grid container>
                <ReceiptOutlinedIcon sx={styles.actionIcon} />
                <Typography sx={styles.rowData}> Billing </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Box sx={{ height: 50, width: 1.5, backgroundColor: "red" }} />
            </Grid>
            <Grid item sx={{ marginTop: 1, marginBottom: 1,marginRight:1}}>
                {
                  !showDropdown &&  <ExpandMoreOutlinedIcon sx={styles.actionIcon1}  onClick={() => setShowDropDown(true)}/>
                }
                {
                  showDropdown &&  <ExpandLessOutlinedIcon sx={styles.actionIcon1}  onClick={() => setShowDropDown(false)}/>
                }
            </Grid>
          </Grid>
        </Box>
        {

          showDropdown  &&  <>
                <Box sx={styles.dropdownContainer}> 
                    <CustomInput
                      placeholder={"Search Patient"}
                      InputProps={""}
                      size={"small"}
                    />
                    <Grid container sx={{marginTop:2}} justifyContent={'space-between'}>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <Box
                                      component="img"
                                      sx={{
                                        height: 25,
                                        width: 25,
                                        borderRadius: 22,
                                      }}
                                      alt={'title'}
                                      src={require("../../../assets/avtar.png")}
                                    />
                                </Grid>
                                <Grid item sx={{padding:0.5}}>
                                    <Typography sx={styles.name}>Ben Alloy (119267)</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box
                              component="img"
                              sx={{
                                height: 10,
                                width: 15
                              }}
                              alt={'title'}
                              src={require("../../../assets/enter.png")}
                            />
                        </Grid>
                    </Grid>
                    <Grid container sx={{marginTop:2}} justifyContent={'space-between'}>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <Box
                                      component="img"
                                      sx={{
                                        height: 25,
                                        width: 25,
                                        borderRadius: 22,
                                      }}
                                      alt={'title'}
                                      src={require("../../../assets/avtar.png")}
                                    />
                                </Grid>
                                <Grid item sx={{padding:0.5}}>
                                    <Typography sx={styles.name}>Ben Alloy (119267)</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box
                              component="img"
                              sx={{
                                height: 10,
                                width: 15
                              }}
                              alt={'title'}
                              src={require("../../../assets/enter.png")}
                            />
                        </Grid>
                    </Grid>
                  </Box>
          </>
        }
        
      </CustomCard>
    </Box>
  );
};

export default AccountsHeader;

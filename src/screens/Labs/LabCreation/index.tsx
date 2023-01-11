import React from 'react'
import HocLayout from '../../../components/HocLayout';
import Breadcrumbs from '../../../components/Breadcrum';
import CustomSelectPicker from '../../../components/SelectPicker';
import { Link as RouterLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { styles } from './styles';
import CustomButton from '../../../components/Button';
import { Box, Grid, Typography } from '@mui/material'
import CustomInput from '../../../components/Input';
import CustomCard from '../../../components/Card';
const LabCreation = () => {
  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Lab Work
    </Typography>,
  ];

  const Doctor = [
    {
      value: 1,
      name: "Type of lab work",
    },
    {
      value: 2,
      name: "Sunny",
    },
  ];

  const buttonClicked = () => { }
  return (
    <>
      <Breadcrumbs title={"Lab Creation"} breadcrumbsArr={breadcrumbs} />
      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box padding={"60px"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}>
                  <Box
                    sx={styles.ImageContainer}>
                    <Box
                      sx={styles.ImageSubContainer}>
                      <Box
                        textAlign={"center"}
                        color={'#9DA2AB'}
                        fontSize={"12px"}
                        fontFamily={"poppins"}>
                        Upload logo here
                      </Box>
                    </Box>
                    <Box
                      sx={styles.CamImage}>
                      <Box
                        component="img"
                        alt="Logo"
                        src={require("../../../assets/camera.svg")}>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box mt={"20px"}>
                  <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item xs={4}>
                      <Box>
                        <CustomInput placeholder={"Name of the lab"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={Doctor}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} justifyContent={"center"} mt={"5px"}>
                    <Grid item xs={4}>
                      <Box>
                        <CustomInput placeholder={"Enter Email"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <CustomInput placeholder={"Enter Postal Address"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} justifyContent={"center"} mt={"5px"}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <CustomInput placeholder={"Enter Lab representative Name"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <CustomInput placeholder={"Enter Lab representative Phone No"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <CustomButton title={"Add +"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#FFFFFF"}
                        bordercolor={"#204289"}
                        border={"1px solid"}
                        fontsize={"14px"}
                        color={"primary"}
                        padding={""}
                        endIcon={''} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} justifyContent={"center"} mt={"5px"}>
                    <Grid item xs={4}>
                      <Box>
                        <CustomInput placeholder={"Enter Lab representative Name"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </Grid>
                    <Grid item xs={4} display={"flex"}
                      justifyContent={"flex-end"}
                      gap={"10px"} flexDirection={"row"}>

                      <CustomButton title={"Cancel"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#FFFFFF"}
                        bordercolor={"#204289"}
                        border={"1px solid"}
                        fontsize={"14px"}
                        color={"primary"}
                        padding={""}
                        endIcon={''} />
                      <CustomButton title={"Create Lab"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#204289"}
                        bordercolor={"#204289"}
                        border={"1px solid"}
                        fontsize={"14px"}
                        color={"info"}
                        padding={""}
                        endIcon={''} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
const LabCreationhoc = HocLayout(LabCreation)
export default LabCreationhoc
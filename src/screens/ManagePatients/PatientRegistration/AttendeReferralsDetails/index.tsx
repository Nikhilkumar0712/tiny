import { Box, Typography, Grid, Link } from '@mui/material'
import React from 'react'
import CustomInput from '../../../../components/Input'
import CustomSelectPicker from '../../../../components/SelectPicker'
import CustomButton from '../../../../components/Button'
import { styles } from './styles';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HocLayout from '../../../../components/HocLayout'
import TabHeader from '../TabHeader'
import Breadcrum from '../../../../components/Breadcrum'
import CustomCard from '../../../../components/Card'
const AttendReferralDetails = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const AttendepesonTitle = [
    {
      value: 1,
      name: 'Referred Person Title'
    },
    {
      value: 2,
      name: 'Ms'
    }
  ]

  const AttendTitle = [
    {
      value: 1,
      name: 'Attendee Title'
    },
    {
      value: 2,
      name: 'Ms'
    }
  ]

  const AttendAge = [
    {
      value: 1,
      name: 'Attend Age'
    },
    {
      value: 2,
      name: 'Ms'
    }
  ]
  const buttonClicked = () => { }

  const handleOnClickBreadcrumItem = () => {
    navigate("/ManagePatients")
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

    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/ManagePatients"
      onClick={handleOnClickBreadcrumItem}
      sx={styles.breadcrumbSubtext}
    >
      Manage Patients
    </Link>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Patient Registration
    </Typography>
  ];

  return (
    <>
      <Breadcrum title={"Patient Registration"} breadcrumbsArr={breadcrumbs} />
      <Box mt={2}>
        <CustomCard>
          <Box p={2}>
            <TabHeader path={location.pathname} />
            <Box padding={""}>
              <Box>
                <Box>
                  <Typography
                    sx={styles.heading}>
                    Attendee Details
                  </Typography>
                </Box>
                <Box mt={"15px"}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <CustomInput placeholder={"Attende Name"}
                        InputProps={""}
                        size={"small"} />
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CustomSelectPicker
                          placeholderText={"Attend Title"}
                          selectValue={''}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={AttendTitle}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CustomSelectPicker
                          placeholderText={"Attend Age"}
                          selectValue={''}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={AttendAge}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mt={"15px"}>
                    <Grid container spacing={4} >
                      <Grid item xs={6}>
                        <Box>
                          <CustomInput placeholder={"Attende Contact Number"}
                            InputProps={""}
                            size={"small"} />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              <Box mt={"15px"}>
                <Box>
                  <Typography
                    sx={styles.heading}>
                    Referral Details
                  </Typography>
                </Box>
                <Box mt={"15px"}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <CustomInput placeholder={"Refreed By "}
                        InputProps={""}
                        size={"small"} />
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <CustomSelectPicker
                          placeholderText={"Referred Person Title"}
                          selectValue={''}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={AttendepesonTitle}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mt={"15px"}>
                    <Grid container spacing={2} >
                      <Grid item xs={6}>
                        <Box>
                          <CustomInput placeholder={"Referred Perosn Contact Number"}
                            InputProps={""}
                            size={"small"} />
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <CustomInput placeholder={"Referral Code"}
                            InputProps={""}
                            size={"small"} />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              <Box mt={"50px"}>
                <Grid
                  container
                  flexDirection={"row"}
                  spacing={1}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                >
                  <Grid item>
                    <CustomButton
                      title={"Back"}
                      handleButtonClick={buttonClicked}
                      backgroundcolor={"#FFFFFF"}
                      bordercolor={"#204289"}
                      color={"#204289"}
                      width={110}
                    />
                  </Grid>
                  <Grid item>
                    <CustomButton
                      title={"Register"}
                      handleButtonClick={buttonClicked}
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      color={"#fffff"}
                      width={110}
                      padding={7}
                    />
                  </Grid>
                  <Grid item>
                    <CustomButton
                      title={"Next"}
                      handleButtonClick={buttonClicked}
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      color={"#fffff"}
                      width={110}
                      padding={7}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </CustomCard>
      </Box>
    </>

  )
}
const AttendReferralDetailsHoc = HocLayout(AttendReferralDetails)
export default AttendReferralDetailsHoc
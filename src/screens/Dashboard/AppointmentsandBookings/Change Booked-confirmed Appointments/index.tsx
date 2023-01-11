import { Grid, Typography, Box, duration } from '@mui/material'
import React from 'react'
import CustomButton from '../../../../components/Button'
import CustomDatePicker from '../../../../components/DatePicker'
import CustomSelectPicker from '../../../../components/SelectPicker'
import { styles } from './styles'

type headProps={
  heading:String
}
const ChangeBookedAndConfirmedAppointments = (props:headProps) => {
  const SelectDoctor = [
    {
      value: 1,
      name: "Select Doctor",
    },
    {
      value: 2,
      name: "Sunny",
    },
  ];
  const TimeData = [
    {
      value: 1,
      name: "12:30 Pm",
    },
    {
      value: 2,
      name: "1:00 Am",
    },
  ];
  const Am = [
    {
      value: 1,
      name: "Am",
    },
    {
      value: 2,
      name: "Pm",
    },
  ];
  const duration = [
    {
      value: 1,
      name: "15",
    },
    {
      value: 2,
      name: "20",
    },
  ];

  const SelectChair = [
    {
      value: 1,
      name: "Red",
    },
    {
      value: 2,
      name: "Green",
    },
  ];

  const buttonClicked=()=>{}
  return (
    <>
      <Typography fontFamily={"poppins"}
        fontSize={"12px"}
        color={'#021025'}>
        Patient Details
      </Typography>
      <Box
        display={"flex"} gap={"10px"} mt={3}>
        <Box
          component="img"
          width={50}
          height={50}
          borderRadius={40}
          alt="Logo"
          src={require("../../../../assets/avtar.png")} />
        <Grid container flexDirection={"row"} alignItems={'center'}>
          <Grid item alignItems={'center'}>
            <Typography sx={styles.patientHeading}>
              Patient Name
            </Typography>
          </Grid>
          <Grid item alignItems={'center'}>
            <Typography sx={styles.patientHeading}>:</Typography>
          </Grid>
          <Grid item alignItems={'center'}>
            <Typography sx={styles.patientId}>Smrithi</Typography>
          </Grid>
          <Grid container flexDirection={'row'}>
            <Grid item alignItems={'center'}>
              <Typography sx={styles.patientDetails}>
                16 Sep 1995
              </Typography>
            </Grid>
            <Grid item alignItems={'center'}>
              <Typography sx={styles.patientDetails}>
                | 27 Yrs |
              </Typography>
            </Grid>
            <Grid item alignItems={'center'}>
              <Typography sx={styles.patientDetails}>
                Female
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container flexDirection={"row"} alignItems={'center'}>
          <Grid item>
            <Typography sx={styles.patientHeading}>
              Patient ID
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={styles.patientHeading}>:</Typography>
          </Grid>
          <Grid item alignItems={'center'}>
            <Typography sx={styles.patientId}>142567</Typography>
          </Grid>
          <Grid container flexDirection={"row"}>
            <Grid item alignItems={'center'}>
              <Typography sx={styles.patientHeading}>
                Contact No
              </Typography>
            </Grid>
            <Grid item alignItems={'center'}>
              <Typography sx={styles.patientHeading}>:</Typography>
            </Grid>
            <Grid item>
              <Typography sx={styles.patientId}>9018290198</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <Typography fontFamily={"poppins"}
          fontSize={"12px"}
          fontWeight={'600'}
          color={'#021025'}>
         Appointment Details
        </Typography>
      </Box>
      <Box mt={2}>
        <Grid container flexDirection={"row"} alignItems={'center'}>
          <Grid item>
            <Typography fontFamily={"poppins"}
              fontSize={"12px"}
              color={'#021025'}>
             {props.heading}
            </Typography>
          </Grid>
          <Grid item alignItems={"center "}>
            <Typography sx={styles.patientDetails}> 14 Aug 2022 | </Typography>
          </Grid>
          <Grid item alignItems={"center"}>
            <Typography sx={styles.patientDetails}>02:00 pm</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box padding={"10px 60px"}>
        <Box mt={2}>
          <CustomSelectPicker
            placeholderText={'Select Doctor'}
            selectValue={1}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log("hii")}
            width={"100%"}
            selectData={SelectDoctor}
          />
        </Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CustomDatePicker fullWidth={"20px"} />
            </Grid>
            <Grid item xs={4}>
              <CustomSelectPicker
                placeholderText={'Time'}
                selectValue={''}
                size={"small"}
                fullWidth={true}
                handleSelectValue={(val: any) => console.log("hii")}
                width={""}
                selectData={TimeData}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomSelectPicker
                placeholderText={'Am'}
                selectValue={''}
                size={"small"}
                fullWidth={true}
                handleSelectValue={(val: any) => console.log("hii")}
                width={""}
                selectData={Am}
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CustomSelectPicker
                placeholderText={'Duration'}
                selectValue={''}
                size={"small"}
                fullWidth={true}
                handleSelectValue={(val: any) => console.log("hii")}
                width={""}
                selectData={duration}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomSelectPicker
                placeholderText={'Select Chair'}
                selectValue={''}
                size={"small"}
                fullWidth={true}
                handleSelectValue={(val: any) => console.log("hii")}
                width={""}
                selectData={SelectChair}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box mt={2}>
        <Grid
          container
          flexDirection={"row"}
          spacing={1}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Grid item>
            <CustomButton
              title={"Cancel"}
              handleButtonClick={buttonClicked}
              backgroundcolor={"#fff"}
              bordercolor={"#204289"}
              color={"#204289"}
              width={120}
              padding={7}
            />
          </Grid>
          <Grid item>
            <CustomButton
              title={"Change"}
              handleButtonClick={buttonClicked}
              backgroundcolor={"#204289"}
              bordercolor={"#204289"}
              color={"#fffff"}
              width={120}
              padding={7}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ChangeBookedAndConfirmedAppointments
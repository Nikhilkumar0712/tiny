import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CustomInput from '../../../components/Input'
import CustomButton from '../../../components/Button'
import { styles } from './styles'
import CustomSelectPicker from '../../../components/SelectPicker'
const ReceiveWork = () => {


  const Doctor = [
    {
      value: 1,
      name: "Type1",
    },
    {
      value: 2,
      name: "Sunny",
    },
  ];
  const SelectRepresentative = [
    {
      value: 1,
      name: "Select Representative",
    },
    {
      value: 2,
      name: "Sunny",
    },
  ];

  const [showData, setshowData] = useState(false)
  const [GenerateOTP, setGenerateOTP] = useState(false)
  const Find = () => {
    setshowData(true)
  }

  const GenerateOtp = () => {
    setGenerateOTP(true)
  }
  return (
    <>
      <Box
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}>
        <Box flexGrow={1}>
          <CustomInput placeholder={"Enter work id / Patient name / Phone No."}
            InputProps={""}
            size={"small"} />
        </Box>
        <Box>
          <CustomButton title={"Find"}
            handleButtonClick={Find}
            backgroundcolor={"#204289"}
            bordercolor={"#204289"}
            border={"1px solid"}
            fontsize={"14px"}
            color={"info"}
            padding={"4px 40px"}
            endIcon={''} />
        </Box>
      </Box>
      {
        showData ?
          <Box mt={'10px'}>
            <Grid container spacing={2} >
              <Grid item xs={6}>
                <CustomInput placeholder={"Dr.Surendra"}
                  InputProps={""}
                  size={"small"} />
              </Grid>
              <Grid item xs={6}>
                <CustomInput placeholder={"Ravi Chandra"}
                  InputProps={""}
                  size={"small"} />
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={'5px'}>
              <Grid item xs={6}>
                <CustomInput placeholder={"Cap"}
                  InputProps={""}
                  size={"small"} />
              </Grid>
              <Grid item xs={6}>
                <CustomSelectPicker
                  selectValue={1}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={"100%"}
                  selectData={Doctor}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={'5px'}>
              <Grid item xs={6}>
                <CustomInput placeholder={"OliveLabs"}
                  InputProps={""}
                  size={"small"} />
              </Grid>
              <Grid item xs={6}>
                <CustomSelectPicker
                  selectValue={1}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={"100%"}
                  selectData={SelectRepresentative}
                />
              </Grid>
            </Grid>
            <Box textAlign={'right'}
              mt={"20px"}
              onClick={GenerateOtp}>
              <Typography sx={styles.otp}>
                Generate OTP
              </Typography>
            </Box>
          </Box> : null
      }
      {
        GenerateOTP ?
          <>
            <Box bgcolor={"#F7F7F7"}
              borderRadius={"19px"}
              padding={"20px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={"20px"} 
              mt={"20px"}>
              <Box
                color={"#204289"}
                fontSize={"12px"}
                fontFamily={"poppins"}>
                Please share this OTP with lab representative
              </Box>
              <Box
                color={"#204289"}
                fontSize={"20px"}
                fontFamily={"poppins"}
                fontWeight={"550"}>
                2388
              </Box>
            </Box>
          </>
          : null
      }
    </>
  )
}

export default ReceiveWork
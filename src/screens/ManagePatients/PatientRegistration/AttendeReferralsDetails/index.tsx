import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import CustomInput from '../../../../components/Input'
import CustomSelectPicker from '../../../../components/SelectPicker'
import CustomButton from '../../../../components/Button'
const AttendReferralDetails = () => {
    const AttendepesonTitle = [
        {
            value: 1,
            name: 'Mr'
        },
        {
            value: 2,
            name: 'Ms'
        }
    ]
    const buttonClicked =()=>{

    }
    return (
        <>
            <Box>
                <Box>
                    <Typography 
                     sx={{fontFamily:"poppins", fontSize:"14px", color:"#021025"}}>
                        Attendee Details
                    </Typography>
                </Box>
                <Box mt={"15px"}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <CustomInput placeholder={"Attende By Person Name"}
                                InputProps={""}
                                size={"small"} />
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <CustomSelectPicker
                                    selectValue={1}
                                    size={"small"}
                                    fullWidth={false}
                                    handleSelectValue={(val: any) => console.log("hii")}
                                    width={"70%"}
                                    selectData={AttendepesonTitle}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={"15px"}>
                        <Grid container spacing={4} >
                            <Grid item xs={6}>
                                <Box>
                                    <CustomInput placeholder={"Attende Person Contact Number"}
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
                    sx={{fontFamily:"poppins", fontSize:"14px", color:"#021025"}}>
                        Referral Details
                    </Typography>
                </Box>
                <Box mt={"15px"}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <CustomInput placeholder={"Refreed By Person"}
                                InputProps={""}
                                size={"small"} />
                        </Grid>
                        <Grid item xs={6}>
                            <Box>
                                <CustomSelectPicker
                                    selectValue={1}
                                    size={"small"}
                                    fullWidth={false}
                                    handleSelectValue={(val: any) => console.log("hii")}
                                    width={"70%"}
                                    selectData={AttendepesonTitle}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={"15px"}>
                        <Grid container spacing={4} >
                            <Grid item xs={6}>
                                <Box>
                                    <CustomInput placeholder={"Referred Perosn Contact"}
                                        InputProps={""}
                                        size={"small"} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box
                display={"flex"}
                gap={"10px"}
                justifyContent={"flex-end"}
                mt={"50px"}>
                <Box mt={"18px"}>
                    <CustomButton title={"Cancel"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#FFFFFF"}
                        bordercolor={"#9DA2AB"}
                        padding={"4px 30px"}
                        border={"1px solid"}
                        fontsize={"14px"}
                        color={"primary"}
                        endIcon={""} />
                </Box>
                <Box mt={"18px"}>
                    <CustomButton title={"Next"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#204289"}
                        bordercolor={"#204289"}
                        border={"1px solid"}
                        fontsize={"14px"}
                        color={"info"}
                        padding={"4px 30px"}
                        endIcon={""} />
                </Box>
            </Box>
        </>

    )
}

export default AttendReferralDetails
import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomCard from '../../../components/Card'
import { Styles } from './style'
interface Card {
    title: string,
    image: any,
    totalnumbers: any,
    bgcolor:any
}
const Analytics = () => {
    return (
        <>
            <Box
                display={"flex"}
                gap={2}>
                <Box flexGrow={'1'}>
                    <CustomCard>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}>
                            <Box>
                                <Typography sx={Styles.breadcrumbSubtext}>
                                    Appointments
                                </Typography>
                            </Box>
                            <Box
                                display={"flex"}
                                gap={1}
                                flexDirection={"column"}>
                                <Box
                                    display={"flex"}
                                    gap={1}
                                    alignItems={"center"}>
                                    <Typography sx={Styles.today}>
                                        Today
                                    </Typography>
                                    <Box>
                                        <ArrowDropDownIcon />
                                    </Box>
                                </Box>
                                <Box
                                    display={"flex"}
                                    gap={1}
                                    alignItems={"center"}
                                    justifyContent={"end"}>
                                    <Box
                                        component={'img'}
                                        src={require("../../../assets/Analytics.svg")}
                                        alt='Analytics'
                                        fontSize={'20px'}>
                                    </Box>
                                    <Box>
                                        <Typography sx={Styles.AnalatyicsNumber}>
                                            80%
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}>
                            <Box
                                padding={"15px"}
                                bgcolor={"#FD7238"}
                                borderRadius={"15px"}>
                                <Box
                                    component={"img"}
                                    alt=" Appointment"
                                    src={require("../../../assets/Analytics Appointemnts Icons.svg")}
                                   >
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={Styles.TotalAppointments}>
                                    25
                                </Typography>
                            </Box>
                        </Box>
                    </CustomCard>
                </Box>
                <Box flexGrow={'1'}>
                    <PatientandDoctors
                        title={"Total Patients"}
                        totalnumbers={"590"}
                        image={require("../../../assets/AnalyticsDoctor.svg")} 
                        bgcolor={"#5246A0"}/>
                </Box>
                <Box flexGrow={'1'}>
                    <PatientandDoctors
                        title={"Total Doctors"}
                        totalnumbers={"890"}
                        image={require("../../../assets/Analytics Stethoscopes.svg")} 
                        bgcolor={"#3DD230"}/>
                </Box>
            </Box>
        </>
    )
}
export const PatientandDoctors = (props: Card) => {
    return (
        <>
            <CustomCard >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}>
                    <Box>
                        <Typography sx={Styles.breadcrumbSubtext}>
                            {props.title}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"} 
                    mt={"35px"}>
                    <Box
                        padding={"15px"}
                        bgcolor={props.bgcolor}
                        borderRadius={"15px"}>
                        <Box
                            component={"img"}
                            alt=" Appointment"
                            src={props.image}>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={Styles.TotalAppointments}>
                            {props.totalnumbers}
                        </Typography>
                    </Box>
                </Box>
            </CustomCard>
        </>
    )
}
export default Analytics
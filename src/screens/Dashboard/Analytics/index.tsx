import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomCard from '../../../components/Card'
import { Styles } from './style'
interface Card {
    title: string,
    image: any,
    totalnumbers: any,
    bgcolor: any
}
const Analytics = () => {
    return (
        <>
            <Box
                display={"flex"}
                width={'100%'}
                gap={2}>
                <Box width={"100%"}>
                    <CustomCard>
                        <Box sx={Styles.Container}>
                            <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"baseline"}>
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
                                        alignItems={"center"}>
                                        <Typography sx={Styles.today}>
                                            Today
                                        </Typography>
                                        <ArrowDropDownIcon />
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
                                >
                                    <Box
                                        component={"img"}
                                        padding={"10px"}
                                        bgcolor={"#FD7238"}
                                        borderRadius={"15px"}
                                        alt=" Appointment"
                                        width={"50px"}
                                        src={require("../../../assets/Analytics Appointemnts Icons.svg")}>
                                    </Box>
                                </Box> 
                                <Box>
                                    <Typography sx={Styles.TotalAppointments}>
                                        25
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </CustomCard>
                </Box>
                <Box width={"100%"}>
                    <PatientandDoctors
                        title={"Total Patients"}
                        totalnumbers={"590"}
                        image={require("../../../assets/AnalyticsDoctor.svg")}
                        bgcolor={"#5246A0"} />
                </Box>
                <Box width={"100%"}>
                    <PatientandDoctors
                        title={"Total Doctors"}
                        totalnumbers={"890"}
                        image={require("../../../assets/Analytics Stethoscopes.svg")}
                        bgcolor={"#3DD230"} />
                </Box>
            </Box>

        </>
    )
}
export const PatientandDoctors = (props: Card) => {
    return (
        <>
            <CustomCard >
                <Box sx={Styles.Container}>
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
                        mt={"30px"}>
                        <Box
                        >
                            <Box
                                padding={"10px"}
                                bgcolor={props.bgcolor}
                                borderRadius={"8px"}
                                component={"img"}
                                alt=" Appointment"
                                width={"50px"}
                                src={props.image}>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={Styles.TotalAppointments}>
                                {props.totalnumbers}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CustomCard>
        </>
    )
}
export default Analytics
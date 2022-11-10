import { Box, Grid } from '@mui/material'
import React from 'react'
import CustomSelectPicker from '../../../../components/SelectPicker'
import CustomInput from '../../../../components/Input'
import CustomDatePicker from '../../../../components/DatePicker'
import CustomButton from '../../../../components/Button'

const PatientDetails = () => {
    const selectData = [
        {
            value: 1,
            name: "Mr",
        },
        {
            value: 2,
            name: "Ms",
        },
    ];

    const RelationAbbrevations = [
        {
            value: 1,
            name: "S/o"
        },
        {
            value: 2,
            name: "D/o"
        },
    ]

    const Nationality = [
        {
            value: 1,
            name: "Select Nationality",
        },
        {
            value: 2,
            name: "Other",
        }
    ]

    const State = [
        {
            value: 1,
            name: 'Select State',
        },
        {
            value: 2,
            name: 'Andhra Pradesh',
        },
    ]

    const MaterialStatus = [
        {
            value: 1,
            name: "Select Martial Status"
        },
        {
            value: 2,
            name: "UnMarried"
        }
    ]

    const Gender = [
        {
            value: 1,
            name: 'Gender'
        },
        {
            value: 2,
            name: 'Female'
        }
    ]

    const buttonClicked = () => {

    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Box
                        position={"relative"}
                        width={"fit-content"}>
                        <Box
                            bgcolor={"#F5F5F5"}
                            padding={"20px"}
                            width={"115px"}
                            display={"flex"}
                            borderRadius={"50%"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            height={"115px"}>
                            <Box
                                width={"45px"}
                                component="img"
                                alt="Logo"
                                src={require("../../../../assets/profilecard.svg")}>
                            </Box>
                        </Box>
                        <Box
                            position={"absolute"}
                            bottom={"0px"}
                            right={"0px"}
                            bgcolor={"#204289"}
                            padding={"5px"}
                            borderRadius={"50%"}
                            width={"30px"}
                            height={"30px"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}>
                            <Box
                                component="img"
                                alt="Logo"
                                src={require("../../../../assets/camera.svg")}>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        gap={"12px"}
                        alignItems={"center"}
                        mt={"20px"}>
                        <Box>
                            <CustomSelectPicker
                                selectValue={1}
                                size={"small"}
                                fullWidth={false}
                                handleSelectValue={(val: any) => console.log("hii")}
                                width={"68px"}
                                selectData={selectData}
                            />
                        </Box>
                        <Box flexGrow={1}>
                            <CustomInput placeholder={"Enter Patient Name"}
                                InputProps={""}
                                size={"small"} />
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        gap={"12px"}
                        alignItems={"center"}
                        mt={"15px"}>
                        <Box>
                            <CustomSelectPicker
                                selectValue={1}
                                size={"small"}
                                fullWidth={false}
                                handleSelectValue={(val: any) => console.log("hii")}
                                width={"70%"}
                                selectData={RelationAbbrevations}
                            />
                        </Box>
                        <Box flexGrow={1}>
                            <CustomInput placeholder={"Enter  Name"}
                                InputProps={""}
                                size={"small"} />
                        </Box>
                    </Box>
                    <Box mt={"15px"}>
                        <CustomSelectPicker
                            selectValue={1}
                            size={"small"}
                            fullWidth={true}
                            handleSelectValue={(val: any) => console.log("hii")}
                            width={"100%"}
                            selectData={Nationality}
                        />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomDatePicker fullWidth={"fullWidth"} />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomSelectPicker
                            selectValue={1}
                            size={"small"}
                            fullWidth={true}
                            handleSelectValue={(val: any) => console.log("hii")}
                            width={"100%"}
                            selectData={MaterialStatus}
                        />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomSelectPicker
                            selectValue={1}
                            size={"small"}
                            fullWidth={true}
                            handleSelectValue={(val: any) => console.log("hii")}
                            width={"100%"}
                            selectData={Gender}
                        />
                    </Box>
                </Grid>
                <Grid item xs={4} mt={"65px"}>
                    <Box mt={"15px"}>
                        <CustomSelectPicker
                            selectValue={1}
                            size={"small"}
                            fullWidth={true}
                            handleSelectValue={(val: any) => console.log("hii")}
                            width={"100%"}
                            selectData={State}
                        />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"occupation"}
                            InputProps={""}
                            size={"small"} />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"Aadhar No"}
                            InputProps={""}
                            size={"small"} />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"Patient Code"}
                            InputProps={""}
                            size={"small"} />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"Primary Mobile Number"}
                            InputProps={""}
                            size={"small"} />
                    </Box>
                </Grid>
                <Grid item xs={4} mt={"65px"}>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"Alternate Mobile Number"}
                            InputProps={""}
                            size={"small"} />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"Zip Code"}
                            InputProps={""}
                            size={"small"} />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"Address 1"}
                            InputProps={""}
                            size={"small"} />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"Address 2"}
                            InputProps={""}
                            size={"small"} />
                    </Box>
                    <Box mt={"15px"}>
                        <CustomInput placeholder={"Location/ Area"}
                            InputProps={""}
                            size={"small"} />
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
                </Grid>
            </Grid>
        </>
    )
}

export default PatientDetails
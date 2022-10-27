import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../../components/Button'
import CustomCard from '../../../components/Card'
import CustomDatePicker from '../../../components/DatePicker'
import CustomInput from '../../../components/Input'
import CustomSelectPicker from '../../../components/SelectPicker'
import { Styles } from './styles'
const selectData = [
    {
        value: 1,
        name: "Male",
    },
    {
        value: 2,
        name: "Female",
    },
];
const TimeData = [
    {
        value: 1,
        name: 'Am',
    },
    {
        value: 2,
        name: 'Pm',
    },
]
const SelectDoctor = [
    {
        value: 1,
        name: "Nikhil",
    },
    {
        value: 1,
        name: "Sunny",
    },
]
const NewBookings = () => {
    const buttonClicked = () => { };
    return (
        <>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <Typography sx={Styles.MainHeading}>
                    New Bookings
                </Typography>
                <Typography sx={Styles.SideHeading}>
                    View All Bookings
                </Typography>
            </Box>
            <Box mt={'18px'}>
                <CustomCard>
                    <Box>
                        <CustomInput placeholder={"Enter Mobile Number"}
                            InputProps={""}
                            size={"Normal"} />
                    </Box>
                    <Box mt={2}>
                        <CustomInput placeholder={"Enter Name"}
                            InputProps={""}
                            size={"Normal"} />
                    </Box>
                    <Box
                        display={"flex"}
                        gap={"10px"}>
                        <Box mt={2} flexGrow={1}>
                            <CustomDatePicker fullWidth={"fullWidth"} />
                        </Box>
                        <Box mt={2}>
                            <CustomInput placeholder={"Age"}
                                InputProps={""}
                                size={"Normal"} />
                        </Box>
                        <Box mt={2}>
                            <CustomSelectPicker
                                selectValue={1}
                                size={"small"}
                                fullWidth={true}
                                handleSelectValue={(val: any) => console.log("hii")}
                                width={220}
                                selectData={selectData}
                            />
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        gap={"10px"}>
                        <Box mt={2} flexGrow={1}>
                            <CustomDatePicker fullWidth={"fullWidth"} />
                        </Box>
                        <Box mt={2}>
                            <CustomInput placeholder={"Time"}
                                InputProps={""}
                                size={"Normal"} />
                        </Box>
                        <Box mt={2}>
                            <CustomSelectPicker
                                selectValue={1}
                                size={"small"}
                                fullWidth={true}
                                handleSelectValue={(val: any) => console.log("hii")}
                                width={220}
                                selectData={TimeData}
                            />
                        </Box>
                    </Box>
                    <Box mt={2} >
                        <CustomSelectPicker
                            selectValue={1}
                            size={"small"}
                            fullWidth={true}
                            handleSelectValue={(val: any) => console.log("hii")}
                            width={'100%'}
                            selectData={SelectDoctor}
                        />
                    </Box>
                    <Box mt={2}>
                        <CustomInput placeholder={"Referred By"}
                            InputProps={""}
                            size={"Normal"} />
                    </Box>  <Box mt={2}>
                        <CustomInput placeholder={"Referred Title"}
                            InputProps={""}
                            size={"Normal"} />
                    </Box>  <Box mt={2}>
                        <CustomInput placeholder={"Referred Contact Number"}
                            InputProps={""}
                            size={"Normal"} />
                    </Box>
                    <Box
                        display={"flex"}
                        gap={"10px"}
                        justifyContent={"flex-end"}>
                        <Box mt={"18px"}>
                            <CustomButton title={"Cancel"}
                                handleButtonClick={buttonClicked}
                                backgroundcolor={"#FFFFFF"}
                                bordercolor={"#9DA2AB"}
                                padding={"8px 60px"}
                                border={"1px solid"}
                                fontsize={"14px"}
                                color={"primary"} />
                        </Box>
                        <Box mt={"18px"}>
                            <CustomButton title={"Book"}
                                handleButtonClick={buttonClicked}
                                backgroundcolor={"#204289"}
                                bordercolor={"#204289"}
                                border={"1px solid"}
                                fontsize={"14px"}
                                color={"info"}
                                padding={"8px 60px"} />
                        </Box>
                    </Box>
                </CustomCard>
            </Box>
        </>
    )
}

export default NewBookings
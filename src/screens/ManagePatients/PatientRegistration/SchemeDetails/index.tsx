import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { Styles } from './styles';
import Checkbox from '@mui/material/Checkbox';
import CustomSelectPicker from '../../../../components/SelectPicker';
import CustomInput from '../../../../components/Input';
import CustomButton from '../../../../components/Button';
const SchemeDetails = () => {
    const TypeofScheme = [
        {
            value: 1,
            name: "something"
        },
        {
            value: 2,
            name: "something"
        },
    ]
    const buttonClicked=()=>{}
    return (
        <>

            <Box
                display={"flex"}
                gap={"3px"}
                alignItems={"center"}>
                <Checkbox size='small' />
                <Typography style={Styles.CheckBoxLabel}>
                    Any Patient Scheme's
                </Typography>
            </Box>
            <Box mt={"15px"}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Box>
                            <CustomInput placeholder={"Enter Scheme Name"}
                                InputProps={""}
                                size={"small"} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <CustomSelectPicker
                                selectValue={1}
                                size={"small"}
                                fullWidth={false}
                                handleSelectValue={(val: any) => console.log("hii")}
                                width={"100%"}
                                selectData={TypeofScheme}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={"15px"}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Box>
                            <CustomInput placeholder={"Scheme Maximum Limit"}
                                InputProps={""}
                                size={"small"} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <CustomInput placeholder={"Governemnt Name"}
                                InputProps={""}
                                size={"small"} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={'15px'}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <CustomInput placeholder={"Scheme Maximum Bills"}
                            InputProps={""}
                            size={"small"} />
                    </Grid>
                </Grid>
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
                    <CustomButton title={"Submit"}
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

export default SchemeDetails
import { Box, Grid } from '@mui/material'
import React from 'react'
import CustomButton from '../../../../components/Button'
import CustomSelectPicker from '../../../../components/SelectPicker'
import CustomInput from '../../../../components/Input'
const AddConsentForm = () => {

    const SelectTreatment = [
        {
            value: 1,
            name: 'Select Treatment'
        },
        {
            value: 2,
            name: 'Ms'
        }
    ]

    const ConsentByRelation = [
        {
            value: 1,
            name: 'Consent By Relation'
        },
        {
            value: 2,
            name: 'Ms'
        }
    ]

    const allergyData = [
        {
            name: "Select Allergies",
            value: "",
        },
        {
            name: "allergy1",
            value: "allergy1",
        },
        {
            name: "allergy2",
            value: "allergy2",
        },
    ];

    const buttonClicked = () => { }

    return (
        <>
            <Box mt={"10px"}>
                <Box>
                    <CustomSelectPicker
                        selectValue={1}
                        size={"small"}
                        fullWidth={false}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={"100%"}
                        selectData={SelectTreatment}
                    />
                </Box>
                <Box mt={"10px"}>
                    <CustomSelectPicker
                        selectValue={["allergy1", "allergy2"]}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={"100%"}
                        selectData={allergyData}
                        multiple={true}
                    />
                </Box>
                <Box mt={'10px'}>
                    <CustomSelectPicker
                        selectValue={1}
                        size={"small"}
                        fullWidth={false}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={"100%"}
                        selectData={ConsentByRelation}
                    />
                </Box>
                <Box mt={'10px'}>
                    <CustomInput
                        placeholder={"Enter Contact Number"}
                        InputProps={""}
                        size={"small"}
                    />
                </Box>
                <Box mt={'10px'}>
                    <Box
                        display={"flex"}>
                        <Box
                            width={"287px"}
                            border={"1px solid #9DA2AB"}
                            borderRadius={"10px"}
                            color={"#9DA2AB"}
                            fontSize={"12px"}
                            padding={"11px"}
                        >
                            https://consentwhatsapplink.com
                        </Box>
                        <Box
                            border={"1px solid #9DA2AB"}
                            borderRadius={"10px"}
                            bgcolor={"#204289"}
                            fontSize={"12px"}
                            padding={"11px"}
                            ml={"-15px"}
                            color={"#fff"}>
                            Send Link
                        </Box>
                    </Box>
                </Box>
                <Box mt={"20px"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    gap={"10px"}>
                    <Box>
                        <CustomButton
                            title={"Cancel"}
                            handleButtonClick={buttonClicked}
                            backgroundcolor={"#FFFFFF"}
                            bordercolor={"#9DA2AB"}
                            padding={"4px 20px"}
                            border={"1.5px solid"}
                            fontsize={"14px"}
                            color={"primary"}
                        />
                    </Box>
                    <Box>
                        <CustomButton
                            title={"Add"}
                            handleButtonClick={buttonClicked}
                            backgroundcolor={"#204289"}
                            bordercolor={"#204289"}
                            padding={"4px 30px"}
                            border={"1.5px solid"}
                            fontsize={"14px"}
                            color={"info"}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default AddConsentForm
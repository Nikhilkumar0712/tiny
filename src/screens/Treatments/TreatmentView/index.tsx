import React from 'react'
import { Link, Typography, Grid, Box, Tab } from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomButton from '../../../components/Button';
import TabContext from '@mui/lab/TabContext';
import Breadcrumbs from '../../../components/Breadcrum';
import TreatmentDetailsHeader from '../TreatmentDetailsHeader';
import CustomCard from '../../../components/Card';
import { Styles } from './styles'
import Treatments from './Treatmets';
import VisitingPlanning from './VisitingPlanning';
import PatientRecord from '../../ManagePatients/PatientProfile/PatientRecord';
import LabWork from './LabWork';
import HocLayout from '../../../components/HocLayout';
import TreatmentCaseHistory from './CaseHistory';
import TreatmentExamination from './Examination';
import TreatmentPrescription from './Presciption';
const TreatmentView = () => {

    const handleOnClickBreadcrumItem = () => { }

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/Dashboard"
            onClick={handleOnClickBreadcrumItem}
            sx={Styles.breadcrumbSubtext}
        >
            Dashboard
        </Link>,
        <Typography key="2"
            sx={Styles.breadcrumbSubtext}>
            Treatments
        </Typography>,
        <Typography key="2"
            sx={Styles.breadcrumbSubtext}>
            View
        </Typography>,
    ];

    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };




    const buttonClicked = () => { }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Breadcrumbs title={"Treatment Planning"} breadcrumbsArr={breadcrumbs} />
                </Grid>
                <Grid item xs={4}>
                    <TreatmentDetailsHeader />
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
            <Box mt={"20px"}>
                <CustomCard>
                    <Box p={2}>
                        <TabContext value={value}>
                            <Box style={{ "position": "relative" }}>
                                <TabList aria-label="lab API tabs example" onChange={handleChange} >
                                    <Tab label="Treatments" value="1" />
                                    <Tab label="Visiting Plan" value="2" />
                                    <Tab label="Case History" value="3" />
                                    <Tab label="Examination" value="4" />
                                    <Tab label="Prescription" value="5" />
                                    <Tab label="Patients Records" value="6" />
                                    <Tab label="Lab Work" value="7" />
                                </TabList>
                                <TabPanel value="1" sx={Styles.Tabpanel}>
                                    <Box textAlign={"right"} position={"absolute"} top={"6px"} right={"0px"}>
                                        <CustomButton title={"Add Tretment +"}
                                            handleButtonClick={buttonClicked}
                                            backgroundcolor={"#204289"}
                                            bordercolor={"#204289"}
                                            border={"1px solid"}
                                            fontsize={"14px"}
                                            color={"info"}
                                            padding={"4px 30px"}
                                            endIcon={""} />
                                    </Box>
                                    <Treatments />
                                </TabPanel>
                                <TabPanel value='2' sx={Styles.Tabpanel}>
                                    <VisitingPlanning />
                                    <Box textAlign={"right"} position={"absolute"} top={"6px"} right={"0px"}>
                                        <CustomButton title={"Add Visit +"}
                                            handleButtonClick={buttonClicked}
                                            backgroundcolor={"#204289"}
                                            bordercolor={"#204289"}
                                            border={"1px solid"}
                                            fontsize={"14px"}
                                            color={"info"}
                                            padding={"4px 30px"}
                                            endIcon={""} />
                                    </Box>
                                </TabPanel>
                                <TabPanel value="3">
                                  <TreatmentCaseHistory/>
                                </TabPanel>
                                <TabPanel value="4">
                                    <TreatmentExamination/>
                                </TabPanel>
                                <TabPanel value="5">
                                  <TreatmentPrescription/>
                                </TabPanel>
                                <TabPanel value="6" sx={Styles.Tabpanel}>
                                    <PatientRecord />
                                    <Box textAlign={"right"} position={"absolute"} top={"6px"} right={"0px"}>
                                        <CustomButton title={"Add Record +"}
                                            handleButtonClick={buttonClicked}
                                            backgroundcolor={"#204289"}
                                            bordercolor={"#204289"}
                                            border={"1px solid"}
                                            fontsize={"14px"}
                                            color={"info"}
                                            padding={"4px 30px"}
                                            endIcon={""} />
                                    </Box>
                                </TabPanel>
                                <TabPanel value="7" sx={Styles.Tabpanel}>
                                    <LabWork />
                                    <Box textAlign={"right"} position={"absolute"} top={"6px"} right={"0px"}>
                                        <CustomButton title={"Add Lab Work +"}
                                            handleButtonClick={buttonClicked}
                                            backgroundcolor={"#204289"}
                                            bordercolor={"#204289"}
                                            border={"1px solid"}
                                            fontsize={"14px"}
                                            color={"info"}
                                            padding={"4px 30px"}
                                            endIcon={""} />
                                    </Box>
                                </TabPanel>
                            </Box>
                        </TabContext>
                    </Box>
                </CustomCard>
            </Box>
        </>
    )
}
const TreatmentViewhoc = HocLayout(TreatmentView)
export default TreatmentViewhoc
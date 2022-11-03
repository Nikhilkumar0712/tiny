import { Box, Grid, Typography, Link } from '@mui/material'
import React from 'react'
import CustomCard from '../../../components/Card'
import HocLayout from '../../../components/HocLayout'
import CustomButton from '../../../components/Button'
import Breadcrum from '../../../components/Breadcrum'
import { styles } from './patientprofilestyles';
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserAppointments from './UserAppointments'
import UserTreatments from './UserTreatments'
import UserPrescription from './UserPrescriptions'
import UserBilling from './UserBilling'
import PatientRecord from './PatientRecord'
import OtherDetails from './UserOtherDetails'


const PatientProfile = () => {

    const buttonClicked = () => { }


    const handleOnClickBreadcrumItem = () => { }


    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/Dashboard"
            onClick={handleOnClickBreadcrumItem}
            sx={styles.breadcrumbSubtext}
        >
            Dashboard
        </Link>,
        <Typography key="2" sx={styles.breadcrumbSubtext}>
            Patients
        </Typography>
    ];

    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mr={2}>
                <Breadcrum title={"Patients Profile"} breadcrumbsArr={breadcrumbs} />
                <CustomButton title={"Edit Profile"}
                    handleButtonClick={buttonClicked}
                    backgroundcolor={"#204289"}
                    bordercolor={"#204289"}
                    border={"1px solid"}
                    fontsize={"14px"}
                    color={"info"}
                    padding={"4px 20px"}
                    endIcon={''} />
            </Box>
            <Box sx={styles.screenContainer}>
                <CustomCard>
                    <Grid container spacing={2}>
                        <Grid item >
                            <Box
                                component={"img"}
                                alt=" Appointment"
                                src={require("../../../assets/user.png")}
                                width={"100px"}>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <Typography sx={styles.namehead}>
                                    Patient Name : <span
                                        style={styles.nametext}>Smrithi</span>
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography sx={styles.namehead}>
                                    Age : <span style={styles.nametext}>27 Yrs</span>
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography sx={styles.namehead}>
                                    Registered On : <span style={styles.nametext}>22 Sept 2022</span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <Typography sx={styles.namehead}>
                                    Patient ID :<span style={styles.nametext}>142567 </span>
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography sx={styles.namehead}>
                                    Gender : <span style={styles.nametext}>Male</span>
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography sx={styles.namehead}>
                                    Address : <span style={styles.nametext}>Slv Syam Enclave, Ameerpet, Hyderabad - 512345</span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <Typography sx={styles.namehead}>
                                    Contact No : <span style={styles.nametext}>9640373728</span>
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography sx={styles.namehead}>
                                    Email : <span style={styles.nametext}>nk812151@gmail.com</span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CustomCard>
                <Box mt={"30px"}>
                    <CustomCard>
                        <TabContext value={value} >
                            <Box >
                                <TabList aria-label="lab API tabs example" onChange={handleChange} >
                                    <Tab label="Appointments" value="1" />
                                    <Tab label="Treatments" value="2" />
                                    <Tab label="Prescriptions" value="3" />
                                    <Tab label="Billing" value="4" />
                                    <Tab label="Patient Record" value="5" />
                                    <Tab label="Other Details" value="6" />
                                </TabList>
                            </Box>
                            <TabPanel value='1' sx={styles.TabPanel}>
                                <UserAppointments />
                            </TabPanel>
                            <TabPanel value='2' sx={styles.TabPanel}>
                                <UserTreatments />
                            </TabPanel>
                            <TabPanel value='3' sx={styles.TabPanel}>
                                <UserPrescription />
                            </TabPanel>
                            <TabPanel value='4' sx={styles.TabPanel}>
                                <UserBilling />
                            </TabPanel>
                            <TabPanel value='5' sx={styles.TabPanel}>
                                <PatientRecord />
                            </TabPanel>
                            <TabPanel value='6' sx={styles.TabPanel}>
                                <OtherDetails />
                            </TabPanel>
                        </TabContext>
                    </CustomCard>
                </Box>
            </Box>
        </>
    )
}
const PatientProfilehoc = HocLayout(PatientProfile)
export default PatientProfilehoc
import React from 'react'
import HocLayout from '../../../components/HocLayout'
import Breadcrum from '../../../components/Breadcrum'
import { useNavigate } from "react-router-dom";
import { Typography, Link, Grid, Box } from "@mui/material"
import { styles } from './styles'
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomCard from '../../../components/Card';
import PatientDetails from './PatientDetails';
import AttendReferralDetails from './AttendeReferralsDetails';
import SchemeDetails from './SchemeDetails';
import TabContext from '@mui/lab/TabContext';

const PatientRegistration = () => {

  const buttonClicked = () => { };

  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("/ManagePatients")
  };

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

    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/ManagePatients"
      onClick={handleOnClickBreadcrumItem}
      sx={styles.breadcrumbSubtext}
    >
      Manage Patients
    </Link>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Patient Registration
    </Typography>
  ];

  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Breadcrum title={"Patient Registration"} breadcrumbsArr={breadcrumbs} />
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Grid container>
            <Grid item md={12}>
              <Grid>
                <Box>
                  <TabContext value={value}>
                    <Box >
                      <TabList aria-label="lab API tabs example" onChange={handleChange} centered>
                        <Tab label="Patient Details" value="1" sx={styles.tab}/>
                        <Tab label="Attendee and Referral Details" value="2" sx={styles.tab}/>
                        <Tab label="Scheme Details" value="3" sx={styles.tab}/>
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <PatientDetails />
                    </TabPanel>
                    <TabPanel value="2">
                      <AttendReferralDetails />
                    </TabPanel>
                    <TabPanel value="3">
                      <SchemeDetails />
                    </TabPanel>
                  </TabContext>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </CustomCard>
      </Box >

    </>
  )
}
const PatientRegistrationhoc = HocLayout(PatientRegistration)
export default PatientRegistrationhoc
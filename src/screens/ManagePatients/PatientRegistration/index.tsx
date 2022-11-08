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
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  tab: {
    color: "#021025 !important",
    '&.Mui-selected': {
      color: "#204289 !important"
    }
  },
});


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

  const classes = useStyles();
  const tabClasses = { root: classes.tab };

  return (
    <>
      <Breadcrum title={"Patient Registration"} breadcrumbsArr={breadcrumbs} />
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Box p={2}>
            <Grid container>
              <Grid item md={12}>
                <Grid>
                  <Box>
                    <TabContext value={value}>
                      <Box>
                        <TabList aria-label="lab API tabs example" onChange={handleChange}
                          sx={styles.Tablist}>
                          <Tab label="Patient Details" value="1"
                            sx={styles.TabColor}
                            classes={tabClasses} />
                          <Tab label="Attendee and Referral Details" value="2"
                            classes={tabClasses}
                            sx={styles.TabColor} />
                          <Tab label="Scheme Details" value="3"
                            classes={tabClasses}
                            sx={styles.TabColor} />
                        </TabList>
                      </Box>
                      <TabPanel value="1" sx={styles.Tabpanel}>
                        <PatientDetails />
                      </TabPanel>
                      <TabPanel value="2" sx={styles.Tabpanel}>
                        <AttendReferralDetails />
                      </TabPanel>
                      <TabPanel value="3" sx={styles.Tabpanel}>
                        <SchemeDetails />
                      </TabPanel>
                    </TabContext>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box >

    </>
  )
}
const PatientRegistrationhoc = HocLayout(PatientRegistration)
export default PatientRegistrationhoc
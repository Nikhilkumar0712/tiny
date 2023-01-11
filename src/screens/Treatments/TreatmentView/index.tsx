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
import CustomInput from '../../../components/Input';
import HocLayout from '../../../components/HocLayout';
import TreatmentCaseHistory from './CaseHistory';
import TreatmentExamination from './Examination';
import TreatmentPrescription from './Presciption';
import AccountsHeader from '../../Billing/AccountsHeader';
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  tab: {
    color: "#021025 !important",
    '&.Mui-selected': {
      color: "#204289 !important"
    }
  },
});


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



  const classes = useStyles();
  const tabClasses = { root: classes.tab };

  const buttonClicked = () => { }
  return (
    <>
      {/* <Grid container spacing={2}>
        <Grid item xs={4}>
          <Breadcrumbs title={"Treatment View"} breadcrumbsArr={breadcrumbs} />
        </Grid>
        <Grid item xs={4}>
          <TreatmentDetailsHeader />
        </Grid>
        <Grid item xs={4}>
          <AccountsHeader />
        </Grid>
      </Grid> */}
      <Box 
      display={"flex"}
      justifyContent={"space-between"}>
        <Box>
          <Breadcrumbs title={"Treatment View"} breadcrumbsArr={breadcrumbs} />
        </Box>
        <Box width={"45%"}>
          <TreatmentDetailsHeader />
        </Box>
        <Box>
          <AccountsHeader />
        </Box>
      </Box>
      <Box sx={Styles.screencontaner}>
        <CustomCard>
          <Box p={2}>
            <TabContext value={value}>
              <Box style={{ "position": "relative" }}>
                <TabList aria-label="lab API tabs example" onChange={handleChange} sx={Styles.Tablist}>
                  <Tab label="Treatments" value="1" sx={Styles.TabColor}
                    classes={tabClasses} />
                  <Tab label="Visiting Plan" value="2"
                    sx={Styles.TabColor}
                    classes={tabClasses} />
                  <Tab label="Case History" value="3"
                    sx={Styles.TabColor}
                    classes={tabClasses} />
                  <Tab label="Examination" value="4"
                    sx={Styles.TabColor}
                    classes={tabClasses} />
                  <Tab label="Prescription" value="5"
                    sx={Styles.TabColor}
                    classes={tabClasses} />
                  <Tab label="Patients Records" value="6"
                    sx={Styles.TabColor}
                    classes={tabClasses} />
                  <Tab label="Lab Work" value="7"
                    sx={Styles.TabColor}
                    classes={tabClasses} />
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
                <TabPanel value="3" sx={Styles.Tabpanel}>
                  <TreatmentCaseHistory />
                </TabPanel>
                <TabPanel value="4" sx={Styles.Tabpanel}>
                  <TreatmentExamination />
                </TabPanel>
                <TabPanel value="5" sx={Styles.Tabpanel}>
                  <TreatmentPrescription />
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
        <Box mt={"16px"} mb={"20px"}>
          <TabContext value={value}>
            <TabPanel value="5" sx={Styles.Tabpanel}>
              <CustomCard>
                <Box p={2}>
                  <Box >
                    <Grid
                      container
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                    >
                      <Grid item md={6}>
                        <Typography sx={Styles.label}>General Instructions</Typography>
                      </Grid>
                    </Grid>
                    <CustomInput
                      placeholder={"General Instructions"}
                      InputProps={""}
                      size={"small"}
                      multiline={true}
                    />
                  </Box>
                  <Box mt={"10px"}>
                    <Grid
                      container
                      flexDirection={"row"}
                      justifyContent={"flex-end"}
                      alignItems={"center"}
                    >
                      <CustomButton
                        title={"Cancel"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#FFFFFF"}
                        bordercolor={"#9DA2AB"}
                        padding={"4px 50px"}
                        border={"1px solid"}
                        fontsize={"14px"}
                        color={"primary"}
                      />
                      <Box sx={{ marginLeft: 1 }}>
                        <CustomButton
                          title={"Submit"}
                          handleButtonClick={buttonClicked}
                          backgroundcolor={"#204289"}
                          bordercolor={"#204289"}
                          border={"1px solid"}
                          fontsize={"14px"}
                          color={"info"}
                          padding={"4px 50px"}
                        />
                      </Box>
                    </Grid>
                  </Box>
                </Box>
              </CustomCard>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  )
}
const TreatmentViewhoc = HocLayout(TreatmentView)
export default TreatmentViewhoc
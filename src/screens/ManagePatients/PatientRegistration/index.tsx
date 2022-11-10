import React from 'react'
import HocLayout from '../../../components/HocLayout'
import Breadcrum from '../../../components/Breadcrum'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link as RouterLink } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CustomTable from '../../../components/Tabel';
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

  const tableHeadData = [
    "Document Name",
    "File Type",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      DocumentName: "P1245",
      FileType: "Teeth Whitening",
      Actions: "",
    },
  ];


  return (
    <>
      <Breadcrum title={"Patient Registration"} breadcrumbsArr={breadcrumbs} />
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Box p={2}>
            <TabContext value={value}>
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
        </CustomCard>
        <Box mt={"20px"}>
          <TabContext value={value}>
            <TabPanel value='3' sx={styles.Tabpanel}>
              <CustomCard>
                <Box p={2}>
                  <Typography sx={styles.SchemeDocuments}>
                    Scheme Documents
                  </Typography>
                  <CustomTable header={tableHeadData}>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Typography sx={styles.tableCell}>
                            {row.DocumentName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={styles.tableCell}>
                            {row.FileType}
                          </Typography>
                        </TableCell>       
                        <TableCell>
                          <Grid
                            container
                            flexDirection="row"
                            spacing={2}
                            justifyContent={'space-around'}
                            alignItems={'center'}>
                            <Grid item>
                              <Grid container flexDirection="row"
                                gap={"5px"} alignItems={"center"}>
                                <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink
                                  to="/"
                                  style={{ textDecoration: "none" }}
                                >
                                  <Typography sx={styles.tableCell}>
                                    {" "}
                                    View{" "}
                                  </Typography>
                                </RouterLink>
                              </Grid>
                            </Grid>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    ))}
                  </CustomTable>
                </Box>
              </CustomCard>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  )
}
const PatientRegistrationhoc = HocLayout(PatientRegistration)
export default PatientRegistrationhoc
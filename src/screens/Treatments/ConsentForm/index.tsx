import React from 'react';
import { Box, Link, Typography, Grid } from "@mui/material";
import CustomTable from "../../../components/Tabel";
import { styles } from './styles';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { Link as RouterLink } from 'react-router-dom';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrum";
import CustomCard from "../../../components/Card";
import AccountsHeader from '../../Billing/AccountsHeader';
import Image from '../../../assets/print.svg'
import CustomButton from '../../../components/Button';
import HocLayout from '../../../components/HocLayout';
import EditPencil from '../../../assets/edit pencil.svg'
import CustomModal from '../../../components/Modal';
import CloseIcon from '@mui/icons-material/Close';
import AddConsentForm from './AddConsentForm';

const ConsentForm = () => {

  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("./Dashboard");
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
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Treatments
    </Typography>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Consent Form
    </Typography>,
  ];



  const tableHeadData = [
    "Consent Date",
    "Treatment Course",
    "Form Name",
    "Contact Name",
    "Relation",
    "Phone Number",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      ConsentDate: "22 Sept 2022",
      TreatmentCourse: "22 Sept 2022",
      FormName: "156",
      ContactName: "22 Sept 2022",
      Relation: "OP",
      PhoneNumber: "7000",
      Actions: "",
    },
    {
      id: 2,
      ConsentDate: "22 Sept 2022",
      TreatmentCourse: "22 Sept 2022",
      FormName: "156",
      ContactName: "22 Sept 2022",
      Relation: "OP",
      PhoneNumber: "7000",
      Actions: "",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CustomModal open={open}
        handleClose={''}
        handleOpen={handleOpen}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Typography sx={styles.ModalHeading}>
            Add Consent Form
          </Typography>
          <CloseIcon onClick={handleClose} sx={styles.closeicon} />
        </Box>
        <Box mt={"20px"}>
          <AddConsentForm />
        </Box>
      </CustomModal>
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Visiting Plan"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>
      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box p={2}>
                <Box display={"flex"}
                  justifyContent={"end"}>
                  <CustomButton title={"Add Consent Form +"}
                    handleButtonClick={handleOpen}
                    backgroundcolor={"#204289"}
                    bordercolor={"#204289"}
                    border={"1px solid"}
                    fontsize={"14px"}
                    color={"info"}
                    padding={"4px 30px"}
                    endIcon={""} />
                </Box>
                <Box sx={styles.tableContainer}>
                  <CustomTable header={tableHeadData}>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Typography sx={styles.tableCell}>
                            {row.ConsentDate}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={styles.tableCell}>
                            {row.TreatmentCourse}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={styles.tableCell}>
                            {row.FormName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={styles.tableCell}>
                            {row.ContactName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={styles.tableCell}>
                            {row.Relation}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={styles.tableCell}>
                            {row.PhoneNumber}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Grid
                            container
                            flexDirection="row"
                            spacing={2}
                            justifyContent={'space-between'}
                            alignItems={'center'}>
                            <Grid item>
                              <Grid container flexDirection="column"
                                alignItems={"center"}
                                gap={"10px"}>
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
                            <Grid item>
                              <Grid container flexDirection="column"
                                alignItems={"center"}
                                gap={"10px"}>
                                <LocalPrintshopOutlinedIcon
                                  sx={styles.actionIcon}
                                />
                                <RouterLink
                                  to="/"
                                  style={{ textDecoration: "none" }}>
                                  <Typography sx={styles.tableCell}>
                                    {" "}
                                    Print{" "}
                                  </Typography>
                                </RouterLink>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid container flexDirection="column"
                                alignItems={"center"}
                                gap={"10px"}>
                                <CloudDownloadOutlinedIcon sx={styles.actionIcon} />
                                <RouterLink
                                  to="/"
                                  style={{ textDecoration: "none" }}
                                >
                                  <Typography sx={styles.tableCell}>
                                    {" "}
                                    Download{" "}
                                  </Typography>
                                </RouterLink>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid container flexDirection="column"
                                alignItems={"center"}
                                gap={"10px"}>
                                <Box
                                  component={"img"}
                                  alt=" Appointment"
                                  src={EditPencil}
                                  width={"18px"}
                                  height={"18px"}
                                  fontSize={"18px"}>
                                </Box>
                                <RouterLink
                                  to="/"
                                  style={{ textDecoration: "none" }}
                                >
                                  <Typography sx={styles.tableCell}>
                                    {" "}
                                    Edit{" "}
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
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </>

  )

}
const ConsentFormhoc = HocLayout(ConsentForm)
export default ConsentFormhoc
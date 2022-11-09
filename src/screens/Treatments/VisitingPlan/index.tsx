import React from 'react'
import HocLayout from '../../../components/HocLayout'
import { Box, Link, Typography, Grid } from "@mui/material";
import CustomTable from "../../../components/Tabel";
import { styles } from './styles';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CustomSelectPicker from '../../../components/SelectPicker';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrum";
import CustomCard from "../../../components/Card";
import Checkbox from '@mui/material/Checkbox';
import CustomButton from '../../../components/Button';
import CustomDatePicker from '../../../components/DatePicker';
import TimePicker from '../../../components/TimePicker';
import AccountsHeader from '../../Billing/AccountsHeader';
import DeleteImage from '../../../assets/delete.svg'


const VisitingPlan = () => {

  const buttonClicked = () => { }



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
      Treatment
    </Typography>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Visiting Plan
    </Typography>,
  ];


  const AttendepesonTitle = [
    {
      value: 1,
      name: 'Select Doctor'
    },
    {
      value: 2,
      name: 'Ms'
    }
  ]
  const Status = [
    {
      value: 1,
      name: 'Status'
    },
    {
      value: 2,
      name: 'Ms'
    }
  ]

  const tableHeadData = [
    "Select",
    "Visits",
    "Treatment",
    "Date & Time",
    "Cost",
    'Treatment Status',
    "Payment Status",
    "Actions"
  ];

  const rows = [
    {
      id: 1,
      Select: '',
      Visits: 'Visits 1',
      Treatment: 'Treatment 1',
      DateTime: "",
      Cost: 7000,
      TreatmentStatus: "Pending",
      PaymentStatus: "Done",
      Actions: ""
    },


  ];


  return (
    <>
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Visiting Plan"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>
      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box sx={styles.tableContainer}>
                <CustomTable header={tableHeadData}>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Box>
                          <Checkbox size="small" />
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Visits}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Box width={"70%"}>
                            <CustomSelectPicker
                              selectValue={1}
                              size={"small"}
                              fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                              width={"100%"}
                              selectData={AttendepesonTitle}
                            />
                          </Box>
                          <Box
                            display={"flex"}
                            gap={"10px"} mt={"8px"}>
                            <Box width={"70%"}>
                              <CustomSelectPicker
                                selectValue={1}
                                size={"small"}
                                fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                                width={"100%"}
                                selectData={AttendepesonTitle}
                              />
                            </Box>
                            <Box width={"20%"}>
                              <CustomButton title={"+"}
                                handleButtonClick={buttonClicked}
                                backgroundcolor={"#fff"}
                                bordercolor={"#9DA2AB"}
                                border={"1px solid"}
                                fontsize={"14px"}
                                color={"primary"}
                                padding={""}
                                endIcon={""} />
                            </Box>
                          </Box>
                        </Box>

                      </TableCell>
                      <TableCell>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <CustomDatePicker fullWidth={''} />
                          </Grid>
                          <Grid item xs={6}>
                            <TimePicker />
                          </Grid>
                        </Grid>
                        <Box mt={"8px"}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <CustomDatePicker fullWidth={''} />
                            </Grid>
                            <Grid item xs={6}>
                              <TimePicker />
                            </Grid>
                          </Grid>
                        </Box>
                      </TableCell>
                      <TableCell >
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          flexDirection={"column"}
                          gap={"30px"}>
                          <Typography sx={styles.tableCell}>
                            {row.Cost}
                          </Typography>
                          <Typography sx={styles.tableCell}>
                            {row.Cost}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell >
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          flexDirection={"column"}
                          gap={"30px"}>
                          <Typography sx={styles.tableCell}>
                            {row.TreatmentStatus}
                          </Typography>
                          <Typography sx={styles.tableCell}>
                            {row.TreatmentStatus}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell >
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          flexDirection={"column"}
                          gap={"30px"}>
                          <Typography sx={styles.tableCell}>
                            {row.PaymentStatus}
                          </Typography>
                          <Typography sx={styles.tableCell}>
                            {row.PaymentStatus}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          flexDirection={"row"}
                          gap={"8px"}>
                          <Box
                            component={"img"}
                            alt=" Appointment"
                            src={DeleteImage}
                            width={"18px"}
                            height={"18px"}
                            fontSize={"18px"}>
                          </Box>
                          <Typography sx={styles.tableCell} style={{ "color": "#CE0505" }}>
                            delete
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </CustomTable>
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
const VisitingPlanhoc = HocLayout(VisitingPlan)
export default VisitingPlanhoc
import React from 'react'
import HocLayout from '../../../components/HocLayout'
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
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
      <Breadcrumbs title={"Visiting Plan"} breadcrumbsArr={breadcrumbs} />
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
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}>
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
                            gap={"10px"}>
                            <Box width={"70%"}>
                              <CustomSelectPicker
                                selectValue={1}
                                size={"small"}
                                fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                                width={"100%"}
                                selectData={AttendepesonTitle}
                              />
                            </Box>
                            <Box>
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
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}
                          alignItems={"center"}>
                          <Box
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"baseline"}
                            gap={"10px"}>
                            <Box width={"102px"}>
                              <CustomDatePicker fullWidth={''} />
                            </Box>
                            <Box width={"102px"}>
                              <TimePicker />
                            </Box>
                          </Box>
                          <Box
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"baseline"}
                            gap={"10px"}>
                            <Box width={"102px"}>
                              <CustomDatePicker fullWidth={''} />
                            </Box>
                            <Box width={"102px"}>
                              <TimePicker />
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell >
                        <Typography sx={styles.tableCell}>
                          {row.Cost}
                        </Typography>
                      </TableCell>
                      <TableCell >
                        <Typography sx={styles.tableCell}>
                          {row.TreatmentStatus}
                        </Typography>
                      </TableCell>
                      <TableCell >
                        <Typography sx={styles.tableCell}>
                          {row.PaymentStatus}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box
                          display={"flex"}
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
                          <Typography sx={styles.tableCell}>
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
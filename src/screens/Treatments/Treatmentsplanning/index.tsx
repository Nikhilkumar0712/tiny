
import React from 'react'
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Box, Link, Typography, Grid, InputAdornment, Button, Tab } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '../../../components/Breadcrum';
import { useNavigate } from "react-router-dom";
import CustomCard from '../../../components/Card';
import CustomTable from '../../../components/Tabel';
import TreatmentDetailsHeader from '../TreatmentDetailsHeader';
import Checkbox from '@mui/material/Checkbox';
import CustomInput from '../../../components/Input';
import CustomSelectPicker from '../../../components/SelectPicker';
import { styles } from './styles'
import CustomDatePicker from '../../../components/DatePicker';
import CustomButton from '../../../components/Button';
import HocLayout from '../../../components/HocLayout'
import AccountsHeader from '../../Billing/AccountsHeader';
const TreatmentPlanning = () => {


  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("");
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
    <Typography key="2"
      sx={styles.breadcrumbSubtext}>
      Treatments
    </Typography>,
  ];

  const tableHeadData = [
    "Select",
    "Tooth No",
    "Treatment",
    "Select Date",
    "Cost",
    'Discount',
    "Treatment Cost",
    "Doctor",
    "Treatment Status"
  ];

  const rows = [
    {
      id: 1,
      Select: '',
      ToothNo: '12',
      Treatment: 'Treatment 1',
      SelectDate: "",
      Cost: "",
      Discount: "",
      TreatmentCost: "",
      Doctor: "",
      TreatmentStatus: ""
    },

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

  const buttonClicked = () => { }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Breadcrumbs title={"Treatment Planning"} breadcrumbsArr={breadcrumbs} />
        </Grid>
        <Grid item xs={5}>
          <TreatmentDetailsHeader />
        </Grid>
        <Grid item xs={4}>
          <AccountsHeader />
        </Grid>
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
                        <Box display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}>
                          <Checkbox size="small" />
                          <Checkbox size="small" />
                          <Checkbox size="small" />
                        </Box>
                      </TableCell>
                      <TableCell sx={{ width: "7%" }}>
                        <Typography sx={styles.tableCell}>
                          {row.ToothNo}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ width: "9%" }}>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"30px"}>
                          <Typography sx={styles.tableCell}>
                            {row.Treatment}
                          </Typography>
                          <Typography sx={styles.tableCell}>
                            {row.Treatment}
                          </Typography>
                          <Typography sx={styles.tableCell}>
                            {row.Treatment}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}>
                          <CustomDatePicker fullWidth={'fullWidth'} />
                          <CustomDatePicker fullWidth={'fullWidth'} />
                          <CustomDatePicker fullWidth={'fullWidth'} />
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}>
                          <Box>
                            <CustomInput placeholder={"Enter Cost"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                          <Box>
                            <CustomInput placeholder={"Enter Cost"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                          <Box>
                            <CustomInput placeholder={"Enter Cost"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}>
                          <Box>
                            <CustomInput placeholder={"Enter Disc%"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                          <Box>
                            <CustomInput placeholder={"Enter Disc%"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                          <Box>
                            <CustomInput placeholder={"Enter Disc%"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}>
                          <Box>
                            <CustomInput placeholder={"T.Cost"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                          <Box>
                            <CustomInput placeholder={"T.cost"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                          <Box>
                            <CustomInput placeholder={"T.cost"}
                              InputProps={""}
                              size={"small"} />
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}>
                          <Box>
                            <CustomSelectPicker
                              selectValue={1}
                              size={"small"}
                              fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                              width={"100%"}
                              selectData={AttendepesonTitle}
                            />
                          </Box>
                          <Box>
                            <CustomSelectPicker
                              selectValue={1}
                              size={"small"}
                              fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                              width={"100%"}
                              selectData={AttendepesonTitle}
                            />
                          </Box>
                          <Box>
                            <CustomSelectPicker
                              selectValue={1}
                              size={"small"}
                              fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                              width={"100%"}
                              selectData={AttendepesonTitle}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ width: "11%" }}>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}>
                          <Box>
                            <CustomSelectPicker
                              selectValue={1}
                              size={"small"}
                              fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                              width={"100%"}
                              selectData={Status}
                            />
                          </Box>
                          <Box>
                            <CustomSelectPicker
                              selectValue={1}
                              size={"small"}
                              fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                              width={"100%"}
                              selectData={Status}
                            />
                          </Box>
                          <Box>
                            <CustomSelectPicker
                              selectValue={1}
                              size={"small"}
                              fullWidth={false} handleSelectValue={(val: any) => console.log("hii")}
                              width={"100%"}
                              selectData={Status}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </CustomTable>
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
        <Box mt={"20px"} sx={styles.screencontaner}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CustomCard>
                <Box p={2}>
                  <Box>
                    <Typography sx={styles.TotalCost}>
                      Total Treatment Course Cost
                    </Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography sx={styles.TotalCost}>
                      Rs. 7,600
                    </Typography>
                  </Box>
                </Box>
              </CustomCard>
            </Grid>
            <Grid item xs={8} alignItems={"end"}>
              <Box
                display={"flex"}
                gap={"10px"}
                justifyContent={"flex-end"}>
                <Box mt={"18px"}>
                  <CustomButton title={"Cancel"}
                    handleButtonClick={buttonClicked}
                    backgroundcolor={"#FFFFFF"}
                    bordercolor={"#9DA2AB"}
                    padding={"4px 30px"}
                    border={"1px solid"}
                    fontsize={"14px"}
                    color={"primary"}
                    endIcon={""} />
                </Box>
                <Box mt={"18px"}>
                  <CustomButton title={"Save & Next"}
                    handleButtonClick={buttonClicked}
                    backgroundcolor={"#204289"}
                    bordercolor={"#204289"}
                    border={"1px solid"}
                    fontsize={"14px"}
                    color={"info"}
                    padding={"4px 30px"}
                    endIcon={""} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
const TreatmentPlanninghoc = HocLayout(TreatmentPlanning)
export default TreatmentPlanninghoc
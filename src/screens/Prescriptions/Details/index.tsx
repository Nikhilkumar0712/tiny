import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Grid, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrum";
import CustomButton from "../../../components/Button";
import CustomCard from "../../../components/Card";
import HocLayout from "../../../components/HocLayout";
import CustomTable from "../../../components/Tabel";
import { styles } from "./styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomInput from "../../../components/Input";

const PrescriptionsDetails = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Prescriptions
    </Typography>,
  ];

  const selectData = [
    {
      value: 1,
      name: "By Doctor",
    },
    {
      value: 2,
      name: "By Patient",
    },
  ];

  const tableHeadData = [
    "Select",
    "S.No",
    "Drug/Trade Name",
    "Dosage",
    "Frequency",
    "Duration",
    "Prescribed Quantity",
    "Instructions",
  ];

  const rows = [
    {
      id: 1,
      select: "07 OCt 2022",
      DrugName: "Diurectics",
      Dosage: "100mg",
      Frequency: "",
      Duration: "3 Days",
      PrescribedQuantity: "12",
      Instructions: "After Tiffin, Lunch and Dinner",
    },
    {
      id: 2,
      select: "07 OCt 2022",
      DrugName: "Diurectics",
      Dosage: "100mg",
      Frequency: "",
      Duration: "3 Days",
      PrescribedQuantity: "12",
      Instructions: "After Tiffin, Lunch and Dinner",
    },
    {
      id: 3,
      select: "07 OCt 2022",
      DrugName: "Diurectics",
      Dosage: "100mg",
      Frequency: "",
      Duration: "3 Days",
      PrescribedQuantity: "12",
      Instructions: "After Tiffin, Lunch and Dinner",
    },
    {
      id: 4,
      select: "07 OCt 2022",
      DrugName: "Diurectics",
      Dosage: "100mg",
      Frequency: "",
      Duration: "3 Days",
      PrescribedQuantity: "12",
      Instructions: "After Tiffin, Lunch and Dinner",
    },
  ];

  const buttonClicked = () => {
    console.log('hii')
  }

  return (
    <>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Prescriptions"} breadcrumbsArr={breadcrumbs} />
      </Grid>
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Box sx={styles.detailsContainer}>
            <Grid container justifyContent={"space-between"} rowSpacing={2}>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Box
                      component="img"
                      sx={styles.avatarImage}
                      alt="Logo"
                      src={require("../../../assets/avtar.png")}
                    />
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.patientName}>
                      Patient Name : Smrithi
                    </Typography>
                    <Typography sx={styles.patientData}>
                      142567 | 27 Yrs | Female
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Prescription Name :
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.value}>
                      Sever Tooth Ache at 18 and 22
                    </Typography>
                  </Grid>
                </Grid>
                <Box sx={{ marginTop: 1.5 }} />
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Prescription Date :{" "}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.value}>22 Sept 2022</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Prescription ID :
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.value}>P123</Typography>
                  </Grid>
                </Grid>
                <Box sx={{ marginTop: 1.5 }} />
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>Prescribed by :</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.value}>Dr.Surendra</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box>

      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box sx={styles.tableHeaderContainer}>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  <Grid item md={6}>
                    <Grid
                      container
                      spacing={1}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Grid item md={4}>
                        <Typography sx={styles.filterHeading}>
                          ID : P123
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={1} justifyContent={"flex-end"}>
                      <Grid item>
                        <Grid
                          container
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Box
                            component="img"
                            sx={{
                              height: 35,
                              width: 35,
                            }}
                            alt={"Instructions"}
                            src={require("../../../assets/activeaccounts.svg")}
                          />
                          <Typography sx={styles.filterHeading}>
                            Instructions
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={styles.tableContainer}>
                <CustomTable header={tableHeadData}>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Grid
                          container
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <CheckCircleIcon sx={styles.actionIcon} />
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>{row.id}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.DrugName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Dosage}
                        </Typography>
                        
                        <Typography sx={styles.tableheading}>
                          Quantity Given&nbsp;&nbsp;&nbsp;:
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell1}>Frequency</Typography>
                        <Box sx={{marginTop:5,width:120}}>
                          <CustomInput
                            size={"small"}
                            placeholder="12"
                            InputProps={""}
                          />
                        </Box>
                     </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Duration}
                        </Typography>
                        <Typography sx={styles.tableheading}>
                          Cost Per Unit&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp; Rs. 144{" "}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.PrescribedQuantity}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Instructions}
                        </Typography>
                        <Typography sx={styles.tableheading}>
                          Total Cost &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; Rs. 144{" "}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </CustomTable>
              </Box>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.screenContainer}>
          <Grid container justifyContent={'space-between'}>
                <Grid item md={4}>
                    <CustomCard>
                       <Box sx={styles.totalAmountContainer}>
                            <Typography sx={styles.totalAmountHeading}>Total Amount</Typography>
                            <Typography sx={styles.totalAmount}>Rs. 180</Typography>
                       </Box>
                    </CustomCard>
                </Grid>
                <Grid item md={8}>
                  <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-end'} alignItems={"center"}>
                    <Grid item>
                      <CustomButton
                        title={"Cancel"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#FFFFFF"}
                        bordercolor={"#204289"}
                        color={"#204289"}
                        width={120}
                      />
                    </Grid>
                    <Grid item>
                      <CustomButton
                        title={"Submit"}
                        handleButtonClick={buttonClicked}
                        backgroundcolor={"#204289"}
                        bordercolor={"#204289"}
                        color={"#fffff"}
                        width={120}
                        padding={7}
                      />
                    </Grid>
                      
                  </Grid>
                </Grid>
          </Grid>
      </Box>    
    </>
  );
};

const PrescriptionsDetailsHoc = HocLayout(PrescriptionsDetails);
export default PrescriptionsDetailsHoc;

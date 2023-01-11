import React from "react";
import HocLayout from "../../components/HocLayout";
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import Breadcrumbs from "../../components/Breadcrum";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/Card";
import CustomTable from "../../components/Tabel";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link as RouterLink } from "react-router-dom";
import AccountsHeader from "../Billing/AccountsHeader";
import CustomInput from "../../components/Input";
import CustomDatePicker from "../../components/DatePicker";
import CustomSelectPicker from "../../components/SelectPicker";
import { Search } from "@mui/icons-material";


const Prescriptions = () => {
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
    "ID",
    "Date",
    "Patient Id",
    "Patient Name",
    "Prescription Name",
    "Prescribed By",
    "Instructions",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
    {
      id: 2,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
    {
      id: 3,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
    {
      id: 4,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
    {
      id: 5,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
    {
      id: 6,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
    {
      id: 7,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
    {
      id: 8,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
    {
      id: 9,
      ReceiptNo: "P123",
      ReceiptDate: "22 Sept 2022",
      BillNo: "172919",
      BillDate: "Harish",
      TreatmentType: "Severe Tooth Ache at 18 and 22",
      Amount: "Dr.Surendra",
      Mode: "",
      Actions: "",
    },
  ];

  return (
    <>
      <Grid container  alignItems={"center"} justifyContent={'space-between'}>
         <Breadcrumbs title={"Prescriptions"} breadcrumbsArr={breadcrumbs} />
      </Grid>
    
      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={styles.filterContainer}
                spacing={2}
              >
                <Grid item md={8}>
                  <Box sx={{width:320}}>
                    <CustomInput
                      size={"small"}
                      placeholder="Search"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  
                </Grid>
                <Grid item md={4}>
                  <Grid container spacing={1}>
                    <Grid item md={6}>
                      <CustomDatePicker fullWidth={true} />
                    </Grid>
                    <Grid item md={6}>
                      <CustomSelectPicker
                        selectValue={1}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={220}
                        selectData={selectData}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box sx={styles.tableContainer}>
                <CustomTable header={tableHeadData}>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.ReceiptNo}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.ReceiptDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.BillNo}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.BillDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.TreatmentType}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Amount}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          <Grid
                            container
                          >
                            <Box
                              component="img"
                              sx={{
                                height: 30,
                                width: 30,
                                marginBottom : 0.5
                              }}
                              alt={row.BillNo}
                              src={require("../../assets/activeaccounts.svg")}
                            />
                            <Typography sx={styles.tableCell}>Notes</Typography>
                          </Grid>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid container flexDirection="row">
                          <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                          <RouterLink
                            to="/PrescriptionDetails"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography sx={styles.tableCell}>
                              View
                            </Typography>
                          </RouterLink>
                        </Grid>
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
  );
};

const PrescriptionsHoc = HocLayout(Prescriptions);
export default PrescriptionsHoc;

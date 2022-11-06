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
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import AccountsHeader from "../Billing/AccountsHeader";

const Receipt = () => {
  const navigate = useNavigate();


  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Receipt
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
    "Receipt No",
    "Receipt Date",
    "Bill No",
    "Bill Date",
    "Treatment Type",
    "Amount",
    "Mode",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      ReceiptNo: "R23",
      ReceiptDate: "22 Sept 2022",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "",
    },
    {
      id: 2,
      ReceiptNo: "R23",
      ReceiptDate: "22 Sept 2022",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "",
    },
    {
      id: 3,
      ReceiptNo: "R23",
      ReceiptDate: "22 Sept 2022",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "",
    },
    {
      id: 4,
      ReceiptNo: "R23",
      ReceiptDate: "22 Sept 2022",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "",
    },
    {
      id: 5,
      ReceiptNo: "R23",
      ReceiptDate: "22 Sept 2022",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "",
    },
    {
      id: 6,
      ReceiptNo: "R23",
      ReceiptDate: "22 Sept 2022",
      BillNo: "156",
      BillDate: "22 Sept ",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "",
    },
    {
      id: 7,
      ReceiptNo: "R23",
      ReceiptDate: "22 Sept 2022",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "",
    },
    {
      id: 8,
      ReceiptNo: "R23",
      ReceiptDate: "22 Sept 2022",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "",
    },
  ];

  return (
    <>
      <Grid container  alignItems={"center"} justifyContent={'space-between'}>
         <Breadcrumbs title={"Receipt"} breadcrumbsArr={breadcrumbs} />
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
                          {row.Mode}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          flexDirection="row"
                          spacing={2}
                          justifyContent={'center'}
                          alignItems={'center'}
                        >
                          <Grid item>
                            <Grid container flexDirection="row">
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
                            <Grid container flexDirection="row">
                              <LocalPrintshopOutlinedIcon
                                sx={styles.actionIcon}
                              />
                              <RouterLink
                                to="/"
                                style={{ textDecoration: "none" }}
                              >
                                <Typography sx={styles.tableCell}>
                                  {" "}
                                  Print{" "}
                                </Typography>
                              </RouterLink>
                            </Grid>
                          </Grid> 
                          <Grid item>
                            <Grid container flexDirection="row">
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

const ReceiptHoc = HocLayout(Receipt);
export default ReceiptHoc;

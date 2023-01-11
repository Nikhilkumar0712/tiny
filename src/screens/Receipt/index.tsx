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
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AccountsHeader from "../Billing/AccountsHeader";
import CustomButton from "../../components/Button";
import CustomModal from "../../components/Modal";


const Receipt = () => {
  const [showModal,setShowModal] = React.useState(false)
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
    <CustomModal
        open={showModal}
        handleClose={() => setShowModal(false)}
        width={850}
      >
        <Box>
          <Grid
            container
            rowSpacing={4}
            spacing={1}
            justifyContent={"flex-end"}
          >
            <Grid item md={12}>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Typography sx={styles.modalHeader}>
                    Receipt View
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                    <Grid item>
                      <CustomButton
                        title={"Download"}
                        handleButtonClick={() => {console.log('hii')}}
                        backgroundcolor={"#204289"}
                        bordercolor={"#204289"}
                        color={"#fffff"}
                        width={100}
                      /> 
                    </Grid>
                    <Grid item>
                      <CustomButton
                        title={"Print"}
                        handleButtonClick={() => {console.log('hii')}}
                        backgroundcolor={"#204289"}
                        bordercolor={"#204289"}
                        color={"#fffff"}
                        width={100}
                      />
                    </Grid>
                      
                      <Grid item>
                        <ClearOutlinedIcon
                          onClick={() => setShowModal(false)}
                          sx={styles.actionIcon}
                        />
                      </Grid>
                  </Grid>
                 
                </Grid>
              </Grid>
              </Grid>
              <Grid item md={12}>
                <Grid
                  container
                  rowSpacing={4}
                  justifyContent={'space-between'}
                >
                  
                  <Grid item md={4}>
                    <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-start'} alignItems={'center'}>
                      <Grid item>
                        <Typography sx={styles.heading}>Receipt No</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.heading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.value}>235</Typography>
                      </Grid>
                    </Grid>
                  </Grid>


                  <Grid item md={4}>
                    <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-start'} alignItems={'center'}>
                      <Grid item>
                        <Typography sx={styles.heading}>Receipt Date</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.heading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.value}>22 Sept 2022</Typography>
                      </Grid>
                    </Grid>
                  </Grid>


                  <Grid item md={4}>
                    <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-start'} alignItems={'center'}>
                      <Grid item>
                        <Typography sx={styles.heading}>Bill No</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.heading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.value}>156</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={4}>
                    <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-start'} alignItems={'center'}>
                      <Grid item>
                        <Typography sx={styles.heading}>Bill Date</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.heading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.value}>22 Sept 2022</Typography>
                      </Grid>
                    </Grid>
                  </Grid>


                  <Grid item md={8}>
                    <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-start'} alignItems={'center'}>
                      <Grid item>
                        <Typography sx={styles.heading}>Treatment Name</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.heading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.value}> Root Canal</Typography>
                      </Grid>
                    </Grid>
                  </Grid>


                  <Grid item md={4}>
                    <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-start'} alignItems={'center'}>
                      <Grid item>
                        <Typography sx={styles.heading}>Treatment Type</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.heading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.value}>OP</Typography>
                      </Grid>
                    </Grid>
                  </Grid>


                  <Grid item md={4}>
                    <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-start'} alignItems={'center'}>
                      <Grid item>
                        <Typography sx={styles.heading}>Payment Mode</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.heading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.value}>Cash</Typography>
                      </Grid>
                    </Grid>
                  </Grid>


                  <Grid item md={4}>
                    <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-start'} alignItems={'center'}>
                      <Grid item>
                        <Typography sx={styles.amountHeading}>Amount</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.heading}>:</Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={styles.amount}>7000 RS</Typography>
                      </Grid>
                    </Grid>
                  </Grid>



                </Grid>
              </Grid>
          </Grid>
        </Box>
      </CustomModal>
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
                              <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} onClick={() => setShowModal(true)} />
                                <Typography sx={styles.tableCell}>
                                  {" "}
                                  View{" "}
                                </Typography>
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

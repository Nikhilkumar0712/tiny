import React , { useState } from "react";
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
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CustomButton from "../../components/Button"
import CustomInput from "../../components/Input";
import CustomSelectPicker from "../../components/SelectPicker";


const Billing = () => {
  const [showForm , setShowForm ] = useState(false)
  const navigate = useNavigate();


  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Billing
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
    "Bill No",
    "Date",
    "Receipt No",
    "Type",
    "Payment Mode",
    "Amount",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      BillNo: "R23",
      Date: "22 Sept 2022",
      ReceiptNo: "156",
      Type: "OP",
      PaymentMode: "Cash",
      Amount: "7000",
      Actions: "",
    },
    {
      id: 2,
      BillNo: "R23",
      Date: "22 Sept 2022",
      ReceiptNo: "156",
      Type: "OP",
      PaymentMode: "Cash",
      Amount: "7000",
      Actions: "",
    },
    {
      id: 3,
      BillNo: "R23",
      Date: "22 Sept 2022",
      ReceiptNo: "156",
      Type: "OP",
      PaymentMode: "Cash",
      Amount: "7000",
      Actions: "",
    },
    {
      id: 4,
      BillNo: "R23",
      Date: "22 Sept 2022",
      ReceiptNo: "156",
      Type: "OP",
      PaymentMode: "Cash",
      Amount: "7000",
      Actions: "",
    },
    {
      id: 5,
      BillNo: "R23",
      Date: "22 Sept 2022",
      ReceiptNo: "156",
      Type: "OP",
      PaymentMode: "Cash",
      Amount: "7000",
      Actions: "",
    },
    {
      id: 6,
      BillNo: "R23",
      Date: "22 Sept 2022",
      ReceiptNo: "156",
      Type: "OP",
      PaymentMode: "Cash",
      Amount: "7000",
      Actions: "",
    },
    {
      id: 7,
      BillNo: "R23",
      Date: "22 Sept 2022",
      ReceiptNo: "156",
      Type: "OP",
      PaymentMode: "Cash",
      Amount: "7000",
      Actions: "",
    },
    {
      id: 8,
      BillNo: "R23",
      Date: "22 Sept 2022",
      ReceiptNo: "156",
      Type: "OP",
      PaymentMode: "Cash",
      Amount: "7000",
      Actions: "",
    },
  ];

  const buttonClicked = () => {
    setShowForm(false)
  }



const schemeData = [
  {
    value: 1,
    name: "scheme1",
  },
  {
    value: 2,
    name: "scheme2",
  },
];

const amountData = [
  {
    value: 1,
    name: "amount1",
  },
  {
    value: 2,
    name: "amount1",
  },
];

const typeData = [
  {
    value: 1,
    name: "type1",
  },
  {
    value: 2,
    name: "type3",
  },
];

const paymentModes = [
  {
    value: 1,
    name: "cash",
  },
  {
    value: 2,
    name: "card",
  },
];

  return (
    <>
      <Grid container  alignItems={"center"} justifyContent={'space-between'}>
         <Breadcrumbs title={"Billing"} breadcrumbsArr={breadcrumbs} />
         <AccountsHeader />
      </Grid>

{
  showForm &&   <Box sx={styles.screenContainer}>
  <CustomCard>
    <Typography key="2" sx={styles.cardHeader}>
      Add Bill
    </Typography>
    <Box sx={styles.formContainer}>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-evenly"}
        spacing={6}
      >
        <Grid item md={4}>
          <CustomInput
            placeholder={"Bill Date : 22 Sept 2022"}
            InputProps={""}
            size={"small"}
            disabled={true}
          />
        </Grid>
        <Grid item md={4}>
          <CustomInput
            placeholder={"Bill No : 712081928018282"}
            InputProps={""}
            size={"small"}
            disabled={true}
          />
        </Grid>
        <Grid item md={4}>
          <CustomSelectPicker
            selectValue={''}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log(val)}
            width={"100%"}
            selectData={selectData}
            placeholderText={'Select Doctor'}
          />
        </Grid>
      </Grid>
    </Box>
    <Box sx={styles.formContainer}>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-evenly"}
        spacing={6}
      >
        <Grid item md={4}>
          <CustomSelectPicker
            selectValue={''}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log(val)}
            width={"100%"}
            selectData={schemeData}
            placeholderText={'Select Scheme'}
          />
        </Grid>
        <Grid item md={4}>
          <CustomSelectPicker
            selectValue={''}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log(val)}
            width={"100%"}
            selectData={amountData}
            placeholderText={'Amount'}
          />
        </Grid>
        <Grid item md={4}>
          <CustomSelectPicker
            selectValue={''}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log(val)}
            width={"100%"}
            selectData={typeData}
            placeholderText={'Type of Bill'}
          />
        </Grid>
      </Grid>
    </Box>
    <Box sx={styles.formContainer}>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-evenly"}
        spacing={6}
      >
        <Grid item md={4}>
          <CustomSelectPicker
            selectValue={''}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log(val)}
            width={"100%"}
            selectData={paymentModes}
            placeholderText={'Select Mode of Payment'}
          />
        </Grid>
        <Grid item md={4}>
          <CustomInput
            placeholder={"Bill notes"}
            InputProps={""}
            size={"small"}
            multiline={true}
          />
        </Grid>
        <Grid item md={4}>
          <Grid container flexDirection={"row"} spacing={1} justifyContent={'center'} alignItems={"center"}>
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
                title={"Save"}
                handleButtonClick={buttonClicked}
                backgroundcolor={"#204289"}
                color={"#fffff"}
                padding={7}
                width={120}
              />
            </Grid>
              
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </CustomCard>
</Box>
}
      

      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Grid container justifyContent={'flex-end'}>
                  <Grid item sx={{marginTop:1.5,marginRight:1.5}}>
                       <CustomButton
                        endIcon={<AddOutlinedIcon />}
                        handleButtonClick={() => {setShowForm(true)}}
                        title="Add Billing"
                        backgroundcolor={"#204289"}
                        bordercolor={"#204289"}
                        border={"1px solid"}
                        fontsize={"13px"}
                        color={"info"}
                        width={140}
                      />
                  </Grid>
              </Grid>
              <Box sx={styles.tableContainer}>
                <CustomTable header={tableHeadData}>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.BillNo}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.ReceiptNo}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Type}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.PaymentMode}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Amount}
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

const BillingHoc = HocLayout(Billing);
export default BillingHoc;

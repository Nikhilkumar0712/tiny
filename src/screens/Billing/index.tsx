import React from "react";
import { Link, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HocLayout from "../../components/HocLayout";
import { styles } from "./styles";
import Breadcrumbs from "../../components/Breadcrum";
import AccountsHeader from "./AccountsHeader";
import CustomCard from "../../components/Card";
import CustomInput from "../../components/Input";
import CustomSelectPicker from "../../components/SelectPicker";
import CustomButton from "../../components/Button";
import CustomTable from "../../components/Table";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const selectData = [
  {
    value: 1,
    name: "Doctor1",
  },
  {
    value: 2,
    name: "Doctor2",
  },
];

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

const Billing = () => {
  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("./Dashboard");
  };

  const columns: GridColDef[] = [
    {
      field: "BillNo",
      headerName: "Bill No",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.BillNo}</Typography>
          </>
        );
      },
    },
    {
      field: "BillDate",
      headerName: "Bill Date",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.BillDate}</Typography>
          </>
        );
      },
    },
    {
      field: "Scheme",
      headerName: "Scheme",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.Scheme}</Typography>
          </>
        );
      },
    },
    {
      field: "ReceiptNo",
      headerName: "Receipt No",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.ReceiptNo}</Typography>
          </>
        );
      },
    },
    {
      field: "TreatmentType",
      headerName: "Treatment Type",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>
              {params.row.TreatmentType}
            </Typography>
          </>
        );
      },
    },
    {
      field: "Mode",
      headerName: "Mode",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.Mode}</Typography>
          </>
        );
      },
    },
    {
      field: "Amount",
      headerName: "Amount",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.Amount}</Typography>
          </>
        );
      },
    },

    {
      field: "Actions",
      headerName: "Actions",
      width: 230,
      renderCell: (params) => {
        return (
          <Grid container flexDirection="row">
              <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
              <Typography sx={styles.rowData1}> View </Typography>
          </Grid>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      ReceiptNo: "R23",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
      Scheme: "Private Insurance",
    },
    {
      id: 2,
      ReceiptNo: "R23",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
      Scheme: "Private Insurance",
    },
    {
      id: 3,
      ReceiptNo: "R23",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
      Scheme: "Private Insurance",
    },
    {
      id: 4,
      ReceiptNo: "R23",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
      Scheme: "Private Insurance",
    },
    {
      id: 5,
      ReceiptNo: "R23",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
      Scheme: "Private Insurance",
    },
    {
      id: 6,
      ReceiptNo: "R23",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
      Scheme: "Private Insurance",
    },
    {
      id: 7,
      ReceiptNo: "R23",
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
      Scheme: "Private Insurance",
    },
  ];

  const buttonClicked = () => {};

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
      Accounts
    </Typography>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Billing
    </Typography>,
  ];

  return (
    <>
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Billing"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Typography key="2" sx={styles.cardHeader}>
            Add Bill
          </Typography>
          <Box sx={styles.formContainer}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-evenly"}
              spacing={7}
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
                  selectValue={1}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log(val)}
                  width={"100%"}
                  selectData={selectData}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={styles.secondformContainer}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-evenly"}
              spacing={7}
            >
              <Grid item md={4}>
                <CustomSelectPicker
                  selectValue={1}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log(val)}
                  width={"100%"}
                  selectData={schemeData}
                />
              </Grid>
              <Grid item md={4}>
                <CustomSelectPicker
                  selectValue={1}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log(val)}
                  width={"100%"}
                  selectData={amountData}
                />
              </Grid>
              <Grid item md={4}>
                <CustomSelectPicker
                  selectValue={1}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log(val)}
                  width={"100%"}
                  selectData={typeData}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={styles.secondformContainer}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-evenly"}
              spacing={7}
            >
              <Grid item md={4}>
                <CustomSelectPicker
                  selectValue={1}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log(val)}
                  width={"100%"}
                  selectData={paymentModes}
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
                <Grid container flexDirection={"row"} alignItems={"center"}>
                  <CustomButton
                    title={"Cancel"}
                    handleButtonClick={buttonClicked}
                    backgroundcolor={"#FFFFFF"}
                    bordercolor={"#9DA2AB"}
                    padding={"4px 50px"}
                    border={"1px solid"}
                    fontsize={"14px"}
                    color={"primary"}
                  />
                  <Box sx={{ marginLeft: 1 }}>
                    <CustomButton
                      title={"Save"}
                      handleButtonClick={buttonClicked}
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      border={"1px solid"}
                      fontsize={"14px"}
                      color={"info"}
                      padding={"4px 50px"}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CustomCard>
      </Box>
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Typography key="2" sx={styles.cardHeader}>
            Add Bill
          </Typography>
          <Box sx={styles.formContainer}>
            <CustomTable
              coloumns={columns}
              rows={rows}
              itemsPerPage={5}
              rowsPerPage={5}
            />
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

const BillingHoc = HocLayout(Billing);
export default BillingHoc;

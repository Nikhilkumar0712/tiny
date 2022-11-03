import React from 'react';
import HocLayout from '../../components/HocLayout';
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import CustomTable from "../../components/Table";
import { styles } from './styles';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { Link as RouterLink } from 'react-router-dom';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrum";
import CustomCard from "../../components/Card";


const Receipt = () => {


  const columns: GridColDef[] = [
    {
      field: "ReceiptNo",
      headerName: "Receipt No",
      width: 130,
      renderCell: (params) => {
        return (
          <Typography sx={styles.rowData}>
            {params.row.ReceiptNo}
          </Typography>
        );
      },
    },
    {
      field: "BillNo",
      headerName: "Bill No",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>
              {params.row.BillNo}
            </Typography>
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
      field: "TreatmentType",
      headerName: "Treatment Type",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.TreatmentType}</Typography>
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
      field: "Actions",
      headerName: "Actions",
      width: 230,
      renderCell: (params) => {
        return (
          <Grid
            container
            flexDirection="row"
            justifyContent={"space-between"}
          >
            <>
              <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
              <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> View </Typography></RouterLink>
            </>

            <>
              <LocalPrintshopOutlinedIcon sx={styles.actionIcon} />
              <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> Print </Typography></RouterLink>
            </>

            <>
              <CloudDownloadOutlinedIcon sx={styles.actionIcon} />
              <RouterLink to="/BookingsView"><Typography sx={styles.rowData}> Print </Typography></RouterLink>
            </>

          </Grid>
        )
      },
    },
  ];

  const rows = [
    {
      id: 1,
      ReceiptNo: 'R23',
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
    },
    {
      id: 2,
      ReceiptNo: 'R23',
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
    },
    {
      id: 3,
      ReceiptNo: 'R23',
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
    },
    {
      id: 4,
      ReceiptNo: 'R23',
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
    },
    {
      id: 5,
      ReceiptNo: 'R23',
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
    },
    {
      id: 6,
      ReceiptNo: 'R23',
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
    },
    {
      id: 7,
      ReceiptNo: 'R23',
      BillNo: "156",
      BillDate: "22 Sept 2022",
      TreatmentType: "OP",
      Amount: "7000",
      Mode: "Cash",
      Actions: "-",
    },
  ];

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
      Accounts
    </Typography>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Receipts
    </Typography>,
  ];


  return (
    <>
      <Breadcrumbs title={"Receipt"} breadcrumbsArr={breadcrumbs} />
      <Box sx={styles.screenContainer}>
        <Grid container>
          <Grid item md={12}>
            <CustomCard>
              <CustomTable coloumns={columns} rows={rows} itemsPerPage={5} rowsPerPage={5} 
              onCellClick={""}/>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </>

  )

}


const ReceiptHoc = HocLayout(Receipt);
export default ReceiptHoc;
import React, { useState } from "react";
import HocLayout from "../../../components/HocLayout";
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import Breadcrumbs from "../../../components/Breadcrum";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../../components/Card";
import CustomTable from "../../../components/Tabel";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link as RouterLink } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CustomButton from "../../../components/Button";
import CustomInput from "../../../components/Input";
import CustomSelectPicker from "../../../components/SelectPicker";
import EditIcon from "@mui/icons-material/Edit";
const InventoryDetails = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Inventory item details
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
    "Date",
    "Status",
    "Collected By",
    "Store Manager",
    "Comments",
    "Quantity",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      Date: "07 OCt 2022",
      Status: "Returned",
      CollectedBy: "Ramesh",
      StoreManager: "Sneha",
      Comments: "Teeth Whitening",
      Quantity: "01",
      Actions: "",
    },
    {
      id: 2,
      Date: "07 OCt 2022",
      Status: "Returned",
      CollectedBy: "Ramesh",
      StoreManager: "Sneha",
      Comments: "Teeth Whitening",
      Quantity: "01",
      Actions: "",
    },
    {
      id: 3,
      Date: "07 OCt 2022",
      Status: "Returned",
      CollectedBy: "Ramesh",
      StoreManager: "Sneha",
      Comments: "Teeth Whitening",
      Quantity: "01",
      Actions: "",
    },
    {
      id: 4,
      Date: "07 OCt 2022",
      Status: "Returned",
      CollectedBy: "Ramesh",
      StoreManager: "Sneha",
      Comments: "Teeth Whitening",
      Quantity: "01",
      Actions: "",
    },
    {
      id: 5,
      Date: "07 OCt 2022",
      Status: "Returned",
      CollectedBy: "Ramesh",
      StoreManager: "Sneha",
      Comments: "Teeth Whitening",
      Quantity: "01",
      Actions: "",
    },
    {
      id: 6,
      Date: "07 OCt 2022",
      Status: "Returned",
      CollectedBy: "Ramesh",
      StoreManager: "Sneha",
      Comments: "Teeth Whitening",
      Quantity: "01",
      Actions: "",
    },
    {
      id: 7,
      Date: "07 OCt 2022",
      Status: "Returned",
      CollectedBy: "Ramesh",
      StoreManager: "Sneha",
      Comments: "Teeth Whitening",
      Quantity: "01",
      Actions: "",
    },
  ];

  const buttonClicked = () => {};

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
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Breadcrumbs
          title={"Inventory item details"}
          breadcrumbsArr={breadcrumbs}
        />
      </Grid>
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Box sx={styles.detailsContainer}>
            <Grid container justifyContent={"space-between"} rowSpacing={2}>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>Id : </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.value}>235</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>Item Name :</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.value}>
                      3m Espe Ketac cement
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Item Purchased Date :{" "}
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>4 Aug 2022</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Group : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>Paedodontics</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Category : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>Consumable</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Sub Category : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>Non Disposable</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                    Supplier Name : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>Deccan Dental Depot Pvt Ltd</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                    Supplier Contact : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>+91 79182 81280</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Supplier Address : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>Nampally, Secunderabad</Typography>
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
                        <Grid
                          container
                          flexDirection={"row"}
                          alignItems={"center"}
                        >
                          <Typography sx={styles.heading}>
                            In Stock Quantity :
                          </Typography>
                          <Typography sx={styles.value}>03</Typography>
                        </Grid>
                      </Grid>
                      <Grid item md={4}>
                        <Grid
                          container
                          flexDirection={"row"}
                          alignItems={"center"}
                        >
                          <Typography sx={styles.heading}>
                            Inventory location :
                          </Typography>
                          <Typography sx={styles.value}>27</Typography>
                        </Grid>
                      </Grid>
                      <Grid item md={4}>
                        <Grid
                          container
                          flexDirection={"row"}
                          alignItems={"center"}
                        >
                          <Typography sx={styles.heading}>
                            Inventory Cost :
                          </Typography>
                          <Typography sx={styles.value}>22,000</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={1} justifyContent={"flex-end"}>
                      <Grid item>
                        <CustomButton
                          endIcon={""}
                          handleButtonClick={() => {
                            navigate('/InvoiceDetails')
                          }}
                          title="View Invoice"
                          backgroundcolor={"#204289"}
                          bordercolor={"#204289"}
                          border={"1px solid"}
                          fontsize={"13px"}
                          color={"info"}
                          width={145}
                        />
                      </Grid>
                      <Grid item>
                        <CustomButton
                          endIcon={<AddOutlinedIcon />}
                          handleButtonClick={() => {
                            console.log("hii");
                          }}
                          title="Add Status"
                          backgroundcolor={"#204289"}
                          bordercolor={"#204289"}
                          border={"1px solid"}
                          fontsize={"13px"}
                          color={"info"}
                          width={145}
                        />
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
                        <Typography sx={styles.tableCell}>
                          {row.Date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.CollectedBy}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.StoreManager}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Comments}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Quantity}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          flexDirection="row"
                          spacing={2}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Grid item>
                            <Grid
                              container
                              flexDirection="column"
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <EditIcon sx={styles.actionIcon} />
                              <RouterLink
                                to="/"
                                style={{ textDecoration: "none" }}
                              >
                                <Typography sx={styles.tableCell}>
                                  Edit
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

const InventoryDetailsHoc = HocLayout(InventoryDetails);
export default InventoryDetailsHoc;

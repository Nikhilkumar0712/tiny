import React from "react";
import HocLayout from "../../components/HocLayout";
import { Box, Link, Typography, Grid } from "@mui/material";
import Breadcrumbs from "../../components/Breadcrum";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/Card";
import CustomTable from "../../components/Tabel";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link as RouterLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import CustomSelectPicker from "../../components/SelectPicker";
import CustomDatePicker from "../../components/DatePicker";
import CustomButton from "../../components/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Receipt = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Inventory
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
    "Id#",
    "Date",
    "Item name",
    "Group",
    "Category",
    "Sub Category",
    "Stock Qty",
    "Cost",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
    {
      id: 2,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
    {
      id: 3,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
    {
      id: 4,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
    {
      id: 5,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
    {
      id: 6,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
    {
      id: 7,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
    {
      id: 8,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
    {
      id: 9,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Category: "Consumable",
      SubCategory: "Non Disposable",
      StockQty: "06",
      Cost: "Rs 22,000",
      Actions: "",
    },
  ];

  return (
    <>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Inventory"} breadcrumbsArr={breadcrumbs} />
      </Grid>

      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box sx={{marginTop:1.5,marginBottom:1}}>
                <Grid
                  container
                  justifyContent={'space-between'}
                >
                  <Grid item md={5}/>
                  <Grid item md={7}>
                    <Grid container spacing={1}>
                      <Grid item md={3}>
                        <CustomDatePicker fullWidth={true} />
                      </Grid>
                      <Grid item md={3}>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={175}
                          selectData={selectData}
                          placeholderText={"Group"}
                        />
                      </Grid>
                      <Grid item md={3}>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={175}
                          selectData={selectData}
                          placeholderText={"Sub Category"}
                        />
                      </Grid>
                      <Grid item md={3}>
                        <CustomButton
                          endIcon={<AddOutlinedIcon />}
                          handleButtonClick={() => {
                            navigate('/AddInventory')
                          }}
                          title="Add Inventory"
                          backgroundcolor={"#204289"}
                          bordercolor={"#204289"}
                          border={"1px solid"}
                          fontsize={"13px"}
                          color={"info"}
                          width={150}
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
                        <Typography sx={styles.tableCell}>{row.id}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.ItemName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Group}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Category}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.SubCategory}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.StockQty}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Cost}
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
                              <RemoveRedEyeOutlinedIcon
                                sx={styles.actionIcon}
                              />
                              <RouterLink
                                to="/InventoryDetails"
                                style={{ textDecoration: "none" }}
                              >
                                <Typography sx={styles.tableCell}>
                                  view
                                </Typography>
                              </RouterLink>
                            </Grid>
                          </Grid>
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
                                  edit
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

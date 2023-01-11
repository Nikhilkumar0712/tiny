import React, { useState } from "react";
import HocLayout from "../../../components/HocLayout";
import { Box, Link, Typography, Grid } from "@mui/material";
import Breadcrumbs from "../../../components/Breadcrum";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../../components/Card";
import CustomTable from "../../../components/Tabel";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link as RouterLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import CustomSelectPicker from "../../../components/SelectPicker";
import CustomButton from "../../../components/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CustoModal from "../../../components/Modal";
import CustomInput from "../../../components/Input";
import CustomDatePicker from "../../../components/DatePicker";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const UnderUsageInventory = () => {
  const [rowStatus, setRowStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

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
    "Item Name",
    "Group",
    "Quantity",
    "Collected by",
    "Status",
    "Actions",
  ];

  const rows = [
    {
      id: 234,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Quantity: "06",
      CollectedBy: "Nikhil",
      Status: "Returned",
      Actions: "",
    },
    {
      id: 235,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Quantity: "06",
      CollectedBy: "Nikhil",
      Status: "Collected",
      Actions: "",
    },
    {
      id: 236,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Quantity: "06",
      CollectedBy: "Nikhil",
      Status: "Condemned",
      Actions: "",
    },
    {
      id: 237,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Quantity: "06",
      CollectedBy: "Nikhil",
      Status: "Consumed",
      Actions: "",
    },
    {
      id: 238,
      Date: "4 Aug 2022",
      ItemName: "K- files 21mm #10",
      Group: "Endodontics",
      Quantity: "06",
      CollectedBy: "Nikhil",
      Status: "Given",
      Actions: "",
    },
  ];

  const handleSelectValue = (status: any) => {
    setRowStatus(status);
    setTimeout(() => {
      setShowModal(true);
    }, 300);
  };

  return (
    <>
      <CustoModal
        open={showModal}
        handleClose={() => setShowModal(false)}
        width={700}
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
                    { rowStatus === "Returned" ? 'Item Return' : rowStatus === "Condemned" ? 'Condemned'  :  rowStatus == "Condemned" ? "Consumed" : '' }
                  </Typography>
                </Grid>
                <Grid item>
                  <ClearOutlinedIcon
                    onClick={() => setShowModal(false)}
                    sx={styles.actionIcon}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <CustomCard>
                <Box sx={{ padding: 2 }}>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    rowSpacing={2}
                  >
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
                    <Grid item md={8}>
                      <Grid container flexDirection={"row"}>
                        <Grid item>
                          <Typography sx={styles.heading}>
                            Item Name :{" "}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={styles.value}>
                            K- files 21mm #10
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4}>
                      <Grid container flexDirection={"row"}>
                        <Grid item>
                          <Typography sx={styles.heading}>
                            Collected by :{" "}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={styles.value}>Nikhil</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4}>
                      <Grid container flexDirection={"row"}>
                        <Grid item>
                          <Typography sx={styles.heading}>
                            Collected Date :{" "}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={styles.value}>04 Aug 2022</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4}>
                      <Grid container flexDirection={"row"}>
                        <Grid item>
                          <Typography sx={styles.heading}>
                            Collected Quantity :{" "}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={styles.value}>06</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </CustomCard>
            </Grid>
          </Grid>
          <Box sx={{marginTop : 2,marginLeft : 13}}>
            <Grid
              container
              flexDirection={"column"}
              rowSpacing={2}
            
            >
              <Grid item md={10}>
                  <Typography sx={styles.modalSubText}>
                    { rowStatus == "Returned" ? "Receiving Details" : rowStatus == "Condemned" ?  'Condemned Details' :  rowStatus == "Condemned" ? "Consumed" : ''}
                  </Typography>
              </Grid>
            
              <Grid item md={10}>
                {
                  rowStatus == "Consumed" ? 
                  <CustomInput
                    size={"small"}
                    placeholder="Confirmed By"
                    InputProps={""}
                /> :  <CustomSelectPicker
                      selectValue={""}
                      size={"small"}
                      fullWidth={true}
                      handleSelectValue={(val: any) => console.log("hii")}
                      placeholderText={"Given By"}
                      selectData={[""]}
                      width={150}
                    />
                }
               
              </Grid>
            
              <Grid item md={10}>
                {
                  (rowStatus == "Condemned" || rowStatus == "Consumed") ?  <CustomSelectPicker
                  selectValue={""}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  placeholderText={"Confirmed Doctor"}
                  selectData={[""]}
                  width={150}
                /> :   <CustomSelectPicker
                  selectValue={""}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  placeholderText={"Collected By"}
                  selectData={[""]}
                  width={150}
                />
                }
              </Grid>
              {
                rowStatus == "Consumed" &&   <Grid item md={10}>
                    <CustomSelectPicker
                      selectValue={""}
                      size={"small"}
                      fullWidth={true}
                      handleSelectValue={(val: any) => console.log("hii")}
                      placeholderText={"Consumed Quantity"}
                      selectData={[""]}
                      width={150}
                    />
                </Grid>
              }
              {
                rowStatus == "Consumed" &&   <Grid item md={10}>
                    <CustomSelectPicker
                      selectValue={""}
                      size={"small"}
                      fullWidth={true}
                      handleSelectValue={(val: any) => console.log("hii")}
                      placeholderText={"Remarks"}
                      selectData={[""]}
                      width={150}
                    />
                </Grid>
              }
             {
                rowStatus !== "Consumed"  &&   <Grid item  md={10}>
                  {
                      rowStatus == "Condemned"  ? <CustomSelectPicker
                      selectValue={""}
                      size={"small"}
                      fullWidth={true}
                      handleSelectValue={(val: any) => console.log("hii")}
                      placeholderText={"Condemned"}
                      selectData={[""]}
                      width={150} />: 
                    <CustomInput
                      size={"small"}
                      placeholder="Collected Date"
                      InputProps={""}
                    />
                  }
                  </Grid>
             }
              
              <Grid item  md={10}>
                {
                   (rowStatus == "Condemned" || rowStatus == "Consumed")  ?  <CustomInput
                      placeholder={"Comment "}
                      InputProps={""}
                      size={"small"}
                      multiline={true}
                    />  :  <CustomInput
                    placeholder={"Receiving Quantity"}
                    InputProps={""}
                    size={"small"}
                    multiline={true}
                  />
                }
                
              </Grid>
              
              <Grid item md={10}>
                  <Grid container flexDirection={"row"} spacing={1} justifyContent={'flex-end'} alignItems={"center"}>
                    <Grid item>
                      <CustomButton
                        title={"Cancel"}
                        handleButtonClick={() => {console.log('hii')}}
                        backgroundcolor={"#FFFFFF"}
                        bordercolor={"#204289"}
                        color={"#204289"}
                        width={120}
                      />
                    </Grid>
                    <Grid item>
                      <CustomButton
                        title={"Submit"}
                        handleButtonClick={() => {console.log('hii')}}
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
          
        </Box>
      </CustoModal>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Breadcrumbs
          title={"Inventory Under Use"}
          breadcrumbsArr={breadcrumbs}
        />
      </Grid>

      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box sx={{ marginTop: 1.5, marginRight: 1, marginBottom: 1 }}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item md={6} />
                  <Grid item md={6}>
                    <Grid container spacing={1}>
                      <Grid item md={4}>
                        <CustomDatePicker fullWidth={true} />
                      </Grid>
                      <Grid item md={4}>
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
                      <Grid item md={4}>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={() => console.log("hii")}
                          width={175}
                          selectData={selectData}
                          placeholderText={"Sub Category"}
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
                          {row.Quantity}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.CollectedBy}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) =>
                            handleSelectValue(row.Status)
                          }
                          width={175}
                          selectData={selectData}
                          placeholderText={row.Status}
                        />
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

const UnderUsageInventoryHoc = HocLayout(UnderUsageInventory);
export default UnderUsageInventoryHoc;

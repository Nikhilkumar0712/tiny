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
import { Link as RouterLink } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CustomButton from "../../../components/Button";
import EditIcon from "@mui/icons-material/Edit";
import CustoModal from '../../../components/Modal'
import CustomInput from "../../../components/Input";
import CustomDatePicker from "../../../components/DatePicker";
import CustomSelectPicker from "../../../components/SelectPicker";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const InvoiceDetails = () => {

  const [showServiceModal,setShowServiceModal] = useState(false);

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
    "Type of Service",
    "Service Done By",
    "Comments",
    "Amount Paid",
    "Expenses ID",
    "Next Service Date",
    "Actions"
  ];

  const rows = [
    {
      id: 1,
      Date: "12 Sep 2022",
      TypeofService: "Accessory Purchased",
      ServiceDoneBy: "Deccan Dental",
      Comments: "Round Shield",
      AmountPaid: "Rs. 1025.00",
      ExpensesID: "#1245",
      NextServiceDate: "10 Dec 2022",
      Actions: ""
    },
    {
      id: 2,
      Date: "12 Sep 2022",
      TypeofService: "Accessory Purchased",
      ServiceDoneBy: "Deccan Dental",
      Comments: "Round Shield",
      AmountPaid: "Rs. 1025.00",
      ExpensesID: "#1245",
      NextServiceDate: "10 Dec 2022",
      Actions: ""
    },
    {
      id: 3,
      Date: "12 Sep 2022",
      TypeofService: "Accessory Purchased",
      ServiceDoneBy: "Deccan Dental",
      Comments: "Round Shield",
      AmountPaid: "Rs. 1025.00",
      ExpensesID: "#1245",
      NextServiceDate: "10 Dec 2022",
      Actions: ""
    },
    {
      id: 4,
      Date: "12 Sep 2022",
      TypeofService: "Accessory Purchased",
      ServiceDoneBy: "Deccan Dental",
      Comments: "Round Shield",
      AmountPaid: "Rs. 1025.00",
      ExpensesID: "#1245",
      NextServiceDate: "10 Dec 2022",
      Actions: ""
    },
    {
      id: 5,
      Date: "12 Sep 2022",
      TypeofService: "Accessory Purchased",
      ServiceDoneBy: "Deccan Dental",
      Comments: "Round Shield",
      AmountPaid: "Rs. 1025.00",
      ExpensesID: "#1245",
      NextServiceDate: "10 Dec 2022",
      Actions: ""
    },
    {
      id: 6,
      Date: "12 Sep 2022",
      TypeofService: "Accessory Purchased",
      ServiceDoneBy: "Deccan Dental",
      Comments: "Round Shield",
      AmountPaid: "Rs. 1025.00",
      ExpensesID: "#1245",
      NextServiceDate: "10 Dec 2022",
      Actions: ""
    },
    {
      id: 7,
      Date: "12 Sep 2022",
      TypeofService: "Accessory Purchased",
      ServiceDoneBy: "Deccan Dental",
      Comments: "Round Shield",
      AmountPaid: "Rs. 1025.00",
      ExpensesID: "#1245",
      NextServiceDate: "10 Dec 2022",
      Actions: ""
    }
   
  ];

  const buttonClicked = () => {};


  return (
    <>
    <CustoModal open={showServiceModal} handleClose={() => setShowServiceModal(false)} width={700}>
      <Grid container rowSpacing={4} spacing={1} justifyContent={'flex-end'}>
        <Grid item md={12}>
          <Grid container justifyContent={'space-between'}>
              <Grid item>
                <Typography sx={styles.modalHeader}>Add Equipment Service</Typography>
              </Grid>
              <Grid item >
                  <ClearOutlinedIcon onClick={() => setShowServiceModal(false)} sx={styles.actionIcon} />
              </Grid>
          </Grid>
          
        </Grid>
      
        <Grid item md={6}>
          <CustomDatePicker fullWidth={"fullWidth"} />
        </Grid>
        <Grid item md={6}>
             <CustomSelectPicker
                selectValue={''}
                size={"small"}
                fullWidth={true}
                handleSelectValue={(val: any) => console.log("hii")}
                placeholderText={'Select Type of service'}
                selectData={[""]}
                width={120}
              />
        </Grid>
        <Grid item md={6}>
            <CustomInput
              size={"small"}
              placeholder="Enter Service Done by"
              InputProps={''}
            />
        </Grid>
        <Grid item md={6}>
            <CustomInput
              size={"small"}
              placeholder="Enter Amount Paid"
              InputProps={''}
            />
        </Grid>
        <Grid item md={6}>
          <CustomInput
            placeholder={"Comments"}
            InputProps={""}
            size={"small"}
            multiline={true}
          />
        </Grid>
        <Grid item md={6}>
          <CustomDatePicker fullWidth={"fullWidth"} />
        </Grid>
        <Grid item md={6}>
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
                  title={"Add"}
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
    </CustoModal>
     <Box sx={styles.screenContainer}>
     <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item md={6}>
          <Breadcrumbs
            title={"Inventory item details"}
            breadcrumbsArr={breadcrumbs}
          />
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={1} justifyContent={"flex-end"}>
            <Grid item>
              <CustomButton
                endIcon={""}
                handleButtonClick={() => {
                  navigate('/InvoiceDetails')
                }}
                title="View Warranty"
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
                endIcon={''}
                handleButtonClick={() => {
                  console.log("hii");
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
          </Grid>
        </Grid>
      </Grid>
     </Box>
      
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Box sx={styles.detailsContainer}>
            <Grid container justifyContent={"space-between"} rowSpacing={2}>
              <Grid item md={3}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>Id : </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={styles.value}>235</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
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
              <Grid item md={3}>
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
            
              
              <Grid item md={3}>
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
              <Grid item md={3}>
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
              <Grid item md={3}>
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
              <Grid item md={3}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Warranty Period : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>5 Years </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                      Frequency of service : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>6 Months </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid container flexDirection={"row"}>
                  <Grid item>
                    <Typography sx={styles.heading}>
                    Supplier Name : 
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography sx={styles.value}>Deccan Dental </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3}>
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
              <Grid item md={6}>
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
                          endIcon={<AddOutlinedIcon />}
                          handleButtonClick={() => {
                            setShowServiceModal(true)
                          }}
                          title="Add Service"
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
                          {row.TypeofService}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.ServiceDoneBy}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Comments}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.AmountPaid}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.ExpensesID}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.NextServiceDate}
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

const InvoiceDetailsHoc = HocLayout(InvoiceDetails);
export default InvoiceDetailsHoc;

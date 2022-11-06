import React from "react";
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
import AccountsHeader from "../../Billing/AccountsHeader";
import Header from "../Header";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import CustomButton from "../../../components/Button";
import CustomDatePicker from "../../../components/DatePicker";
import CustomSelectPicker from "../../../components/SelectPicker";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CustomInput from "../../../components/Input"

const Investigation = () => {
  const navigate = useNavigate();

  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Diagnosis
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
    "S.No",
    "Type",
    "Drug/Trade Name",
    "Dosage",
    "Frequency",
    "Duration",
    "Quantity",
    "Instructions",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      Sno: 1,
      Type: "",
      TradeName: "",
      Dosage: "",
      Frequency: "",
      Duration: "",
      Quantity: "",
      Instructions: "",
      Actions: "",
    },
    {
      id: 2,
      Sno: 2,
      Type: "",
      TradeName: "",
      Dosage: "",
      Frequency: "",
      Duration: "",
      Quantity: "",
      Instructions: "",
      Actions: "",
    },
    {
      id: 3,
      Sno: 3,
      Type: "",
      TradeName: "",
      Dosage: "",
      Frequency: "",
      Duration: "",
      Quantity: "",
      Instructions: "",
      Actions: "",
    },
    {
      id: 4,
      Sno: 4,
      Type: "",
      TradeName: "",
      Dosage: "",
      Frequency: "",
      Duration: "",
      Quantity: "",
      Instructions: "",
      Actions: "",
    },
    {
      id: 5,
      Sno: 5,
      Type: "",
      TradeName: "",
      Dosage: "",
      Frequency: "",
      Duration: "",
      Quantity: "",
      Instructions: "",
      Actions: "",
    },
  ];

  const buttonClicked = () => {};

  return (
    <>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Diagnosis"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>

      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"space-between"}
            spacing={16}
            sx={{ padding: 2 }}
          >
            <Grid item md={6}>
              <Header path={location.pathname} />
            </Grid>
            <Grid item md={6}>
              <Box style={{ width: "50%", marginLeft: "50%" }}>
                <CustomDatePicker fullWidth={true} />
              </Box>
            </Grid>
          </Grid>
          <Box sx={styles.screenContainer1}>
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Grid item md={6}>
                <Typography sx={styles.doctorName}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr.Surendra &nbsp;&nbsp;&nbsp; |
                  &nbsp;&nbsp;&nbsp; Sever Tooth Ache at 18 and 22
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography sx={styles.investigation}>
                  Select Major Investigation &nbsp;&nbsp; : &nbsp;&nbsp;
                  Investigation Name
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Box sx={styles.tableContainer}>
                <CustomTable header={tableHeadData}>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography sx={styles.tableCell}>{row.Sno}</Typography>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={[]}
                          placeholderText={"Search Enter Drug"}
                        />
                      </TableCell>
                      <TableCell>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={[]}
                          placeholderText={"Select Dosage"}
                        />
                      </TableCell>
                      <TableCell>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={[]}
                          placeholderText={"Select Frequecy"}
                        />
                      </TableCell>
                      <TableCell>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={[]}
                          placeholderText={"Select Duration"}
                        />
                      </TableCell>
                      <TableCell>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={[]}
                          placeholderText={"00"}
                        />
                      </TableCell>
                      <TableCell>
                        <CustomSelectPicker
                          selectValue={""}
                          size={"small"}
                          fullWidth={true}
                          handleSelectValue={(val: any) => console.log(val)}
                          width={"100%"}
                          selectData={[]}
                          placeholderText={"Select Instructions"}
                        />
                      </TableCell>

                      <TableCell>
                        <Grid container>
                          <Grid item>
                            <Grid
                              container
                              flexDirection="column"
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <DeleteOutlineOutlinedIcon
                                sx={styles.actionIcon}
                              />
                              <RouterLink
                                to="/"
                                style={{ textDecoration: "none" }}
                              >
                                <Typography sx={styles.actionText}>
                                  Delete
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
            </Grid>
          </Grid>
        </CustomCard>

        <Box sx={styles.screenContainer}>
          <CustomCard>
            <Box sx={{padding:2}}>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Grid item md={6}>
                  <Typography sx={styles.label}>General Instructions</Typography>
                </Grid>
              </Grid>
              <CustomInput
                placeholder={"General Instructions"}
                InputProps={""}
                size={"small"}
                multiline={true}
              />
            </Box>
            
          </CustomCard>
        </Box>
        <Box sx={styles.screenContainer1}>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
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
                title={"Submit"}
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
        </Box>
      </Box>
    </>
  );
};

const InvestigationHoc = HocLayout(Investigation);
export default InvestigationHoc;

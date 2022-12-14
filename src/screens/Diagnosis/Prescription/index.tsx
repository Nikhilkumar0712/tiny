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
import CustomButton from "../../../components/Button";
import CustomSelectPicker from "../../../components/SelectPicker";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CustomInput from "../../../components/Input"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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
    }
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
            alignItems={'center'}
            sx={{ padding: 2 }}
          >
            <Grid item>
                <Header path={location.pathname} />
            </Grid>
            <Grid item>
              <CustomButton
                endIcon={<AddOutlinedIcon />}
                handleButtonClick={() => {console.log('hii')}}
                title="Add Drug"
                backgroundcolor={"#204289"}
                bordercolor={"#204289"}
                border={"1px solid"}
                fontsize={"13px"}
                color={"info"}
                width={130}
              />
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
                &nbsp;&nbsp;&nbsp; Prescription Date &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;22 Sept 2022&nbsp;&nbsp;&nbsp;
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
        <Box sx={styles.screenContainer}>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"flex-end"}
          spacing={1}
        >
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
              title={"Save & Exit"}
              handleButtonClick={buttonClicked}
              backgroundcolor={"#204289"}
              color={"#fffff"}
              width={120}
            />
          </Grid>
          <Grid item>
            <CustomButton
              title={"Save & Next"}
              handleButtonClick={buttonClicked}
              backgroundcolor={"#204289"}
              color={"#fffff"}
              width={120}
            />
          </Grid>
          <Grid item>
            <CustomButton
              title={"Continue Treatment"}
              handleButtonClick={buttonClicked}
              backgroundcolor={"#204289"}
              color={"#fffff"}
              width={170}
            />
          </Grid>
        </Grid>
      </Box>
      </Box>
    </>
  );
};

const InvestigationHoc = HocLayout(Investigation);
export default InvestigationHoc;

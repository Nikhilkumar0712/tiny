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
    "Tooth No",
    "Provisional Diagnosis",
    "Investigation",
    "Interpretation",
    "Final Diagnosis",
    "Exam Notes",
    "Treatment Planned",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation: "Investigation Name 1",
      Interpretation: "",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "",
      TreatmentPlanned: "",
      Actions: "",
    },
    {
      id: 2,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation: "Investigation Name 1",
      Interpretation: "",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "",
      TreatmentPlanned: "",
      Actions: "",
    },
    {
      id: 3,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation: "Investigation Name 1",
      Interpretation: "",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "",
      TreatmentPlanned: "",
      Actions: "",
    },
    {
      id: 4,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation: "Investigation Name 1",
      Interpretation: "",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "",
      TreatmentPlanned: "",
      Actions: "",
    },
    {
      id: 5,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation: "Investigation Name 1",
      Interpretation: "",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "",
      TreatmentPlanned: "",
      Actions: "",
    },
    {
      id: 6,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation: "Investigation Name 1",
      Interpretation: "",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "",
      TreatmentPlanned: "",
      Actions: "",
    },
    {
      id: 7,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation: "Investigation Name 1",
      Interpretation: "",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "",
      TreatmentPlanned: "",
      Actions: "",
    },
    {
      id: 8,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation: "Investigation Name 1",
      Interpretation: "",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "",
      TreatmentPlanned: "",
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
            <Grid item md={6} >
              <Box style={{width : '50%',marginLeft : '50%'}}>
                <CustomDatePicker fullWidth={true}/>
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
                        <Typography sx={styles.tableCell}>
                          {row.ToothNo}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.ProvisionalDiagnosis}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Investigation}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <CustomButton
                          title={"+ Add"}
                          handleButtonClick={buttonClicked}
                          backgroundcolor={"#204289"}
                          bordercolor={"#204289"}
                          border={"1px solid"}
                          fontsize={"12px"}
                          color={"info"}
                          padding={"2px 2px"}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.FinalDiagnosis}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          justifyContent={"center"}
                          alignItems={"center"}
                          flexDirection={"column"}
                        >
                          <Box
                            component="img"
                            sx={{
                              height: 25,
                              width: 25,
                              borderRadius: 22,
                            }}
                            alt={row.id + "alt"}
                            src={require("../../../assets/activeaccounts.svg")}
                          />{" "}
                          <Typography sx={styles.tableCell}>Note</Typography>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          flexDirection={"column"}
                          columnSpacing={2}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <CustomButton
                            title={"Access opening and BMP done"}
                            handleButtonClick={buttonClicked}
                            backgroundcolor={"#FFFFFF"}
                            bordercolor={"#9DA2AB"}
                            padding={"4px 40px"}
                            border={"1px solid"}
                            fontsize={"13px"}
                            color={"primary"}
                          />
                          <Box sx={{ marginTop: 1 }}>
                            <CustomButton
                              title={"Access opening"}
                              handleButtonClick={buttonClicked}
                              backgroundcolor={"#FFFFFF"}
                              bordercolor={"#9DA2AB"}
                              padding={"4px 50px"}
                              border={"1px solid"}
                              fontsize={"13px"}
                              color={"primary"}
                            />
                          </Box>
                          <Box sx={{ marginTop: 1 }}>
                            <CustomButton
                              title={"+ Add Treatment"}
                              handleButtonClick={buttonClicked}
                              backgroundcolor={"#FFFFFF"}
                              bordercolor={"#9DA2AB"}
                              padding={"4px 50px"}
                              border={"1px solid"}
                              fontsize={"13px"}
                              color={"primary"}
                            />
                          </Box>
                        </Grid>
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
                              <CreateOutlinedIcon sx={styles.actionIcon} />
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
            </Grid>
          </Grid>
        </CustomCard>
      </Box>
    </>
  );
};

const InvestigationHoc = HocLayout(Investigation);
export default InvestigationHoc;

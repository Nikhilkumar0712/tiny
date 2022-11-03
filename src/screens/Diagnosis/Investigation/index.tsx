import React from "react";
import { Link, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HocLayout from "../../../components/HocLayout";
import { styles } from "./styles";
import Breadcrumbs from "../../../components/Breadcrum";
import AccountsHeader from "../../../screens/Billing/AccountsHeader";
import CustomCard from "../../../components/Card";
import Header from '../Header';
import { useLocation } from "react-router-dom";
import CustomTable from "../../../components/Table";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import CustomButton from "../../../components/Button";
import DescriptionIcon from '@mui/icons-material/Description';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CustomDatePicker from '../../../components/DatePicker';

const Investigation = () => {

  const location = useLocation();

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
      Diagnosis
    </Typography>
    
  ];

  const buttonClicked = () => {
    console.log('hii')
  }


  
  const columns: GridColDef[] = [
    {
      field: "ToothNo",
      headerName: "Tooth No",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.ToothNo}</Typography>
          </>
        );
      },
    },
    {
      field: "ProvisionalDiagnosis",
      headerName: "Provisional Diagnosis",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.ProvisionalDiagnosis}</Typography>
          </>
        );
      },
    },
    {
      field: "Investigation",
      headerName: "Investigation",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>{params.row.Investigation}</Typography>
          </>
        );
      },
    },
    {
      field: "Interpretation",
      headerName: "Interpretation",
      width: 160,
      renderCell: (params) => {
        return (
            <CustomButton
              title={"+ Add"}
              handleButtonClick={() => { console.log('hii')}}
              backgroundcolor={"#204289"}
              bordercolor={"#204289"}
              border={"1px solid"}
              fontsize={"12px"}
              color={"info"}
              padding={"0px 0px"}
            />
        );
      },
    },
    {
      field: "FinalDiagnosis",
      headerName: "Final Diagnosis",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Typography sx={styles.rowData}>
              {params.row.FinalDiagnosis}
            </Typography>
          </>
        );
      },
    },
    {
      field: "ExamNotes",
      headerName: "Exam Notes",
      width: 130,
      renderCell: (params) => {
          return (
            <>
               <DescriptionIcon style={styles.notesIcon} />
               <Typography sx={styles.rowData}>Note</Typography>
            </>
            
          )
       
      },
    },
    {
      field: "Treatment",
      headerName: "Treatment",
      width: 350,
      
      renderCell: (params) => {
        return (
          <Box>
          <Grid container flexDirection={'column'} rowSpacing={4}>
            <Grid item>
                <CustomButton
                  title={"Access opening and BMP done"}
                  handleButtonClick={buttonClicked}
                  backgroundcolor={"#FFFFFF"}
                  bordercolor={"#9DA2AB"}
                  padding={"3px 40px"}
                  border={"1px solid"}
                  fontsize={"14px"}
                  color={"primary"}
                />
            </Grid>
            <Grid item>
                <CustomButton
                  title={"Access opening"}
                  handleButtonClick={buttonClicked}
                  backgroundcolor={"#FFFFFF"}
                  bordercolor={"#9DA2AB"}
                  padding={"4px 50px"}
                  border={"1px solid"}
                  fontsize={"14px"}
                  color={"primary"}
                />
            </Grid>  
            <Grid item>
              <CustomButton
                title={"+ Add Treatment"}
                handleButtonClick={buttonClicked}
                backgroundcolor={"#FFFFFF"}
                bordercolor={"#9DA2AB"}
                padding={"4px 50px"}
                border={"1px solid"}
                fontsize={"14px"}
                color={"primary"}
              />
            </Grid>  
              
          </Grid>
              
          </Box>
        );
      },
    },

    {
      field: "Actions",
      headerName: "Actions",
      width: 230,
      renderCell: (params) => {
        return (
          <Grid container flexDirection="column" alignItems={'center'} justifyContent={'center'}>
              <EditOutlinedIcon sx={styles.actionIcon} />
              <Typography sx={styles.rowData1}> Edit Examination </Typography>
          </Grid>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation : "Investigation Name 1",
      Interpretation: "-",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "-",
      Treatment: "-",
      Actions: "-",
    },
    {
      id: 2,
      ToothNo: "18",
      ProvisionalDiagnosis:"Investigation Implant",
      Investigation : "Investigation Name 1",
      Interpretation: "-",
      FinalDiagnosis:"Investigation Implant",
      ExamNotes: "-",
      Treatment: "-",
      Actions: "-",
    },
    {
      id: 3,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation : "Investigation Name 1",
      Interpretation: "-",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "-",
      Treatment: "-",
      Actions: "-",
    },
    {
      id: 4,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation : "Investigation Name 1",
      Interpretation: "-",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "-",
      Treatment: "-",
      Actions: "-",
    },
    {
      id: 5,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation : "Investigation Name 1",
      Interpretation: "-",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "-",
      Treatment: "-",
      Actions: "-",
    },
    {
      id: 6,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation : "Investigation Name 1",
      Interpretation: "-",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "-",
      Treatment: "-",
      Actions: "-",
    },
    {
      id: 7,
      ToothNo: "18",
      ProvisionalDiagnosis: "Investigation Implant",
      Investigation : "Investigation Name 1",
      Interpretation: "-",
      FinalDiagnosis: "Investigation Implant",
      ExamNotes: "-",
      Treatment: "-",
      Actions: "-",
    },
  ];

  return (
    <>
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Diagnosis"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>
      
      <Box sx={styles.screenContainer}>
        <CustomCard>
       
          <Box sx={styles.screenContainer}>
            <Grid container  flexDirection={"row"} justifyContent={"space-between"} spacing={16}>
                <Grid item md={6}>
                    <Header path={location.pathname} />
                </Grid>
                <Grid item md={6}>
                    <CustomDatePicker fullWidth={true}/>
                </Grid>
            </Grid>
          </Box>
          <Box sx={styles.screenContainer1}>
            <Grid container flexDirection={'row'} justifyContent={'space-between'} >
                <Grid item md={6}>
                    <Typography sx={styles.doctorName}>Dr.Surendra    |    Sever Tooth Ache at 18 and 22</Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography sx={styles.investigation}>Select Major Investigation :    Investigation Name</Typography>
                </Grid>
            </Grid>
          </Box>
          <Box sx={styles.tableContainer}>
            <CustomTable
              coloumns={columns}
              rows={rows}
              itemsPerPage={10}
              rowsPerPage={10}
              rowHeight={250}
            />
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};

const InvestigationHoc = HocLayout(Investigation);
export default InvestigationHoc;

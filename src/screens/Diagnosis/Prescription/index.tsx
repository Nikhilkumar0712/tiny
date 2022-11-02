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
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CustomSelectPicker from '../../../components/SelectPicker';
import CustomInput from '../../../components/Input';

const Prescription = () => {

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

  const selectData = [
    {
      value: 1,
      name: "cash",
    },
    {
      value: 2,
      name: "card",
    },
  ];


  
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "S.No",
      width: 40,
      renderCell: (params) => {
        return (
          <Typography sx={styles.rowData}>{params.row.id}</Typography>
        );
      },
    },
    {
      field: "DrugName",
      headerName: "Drug/Trade Name",
      width: 200,
      renderCell: (params) => {
        return (
            <CustomSelectPicker
              selectValue={'Search Enter Drug'}
              size={"small"}
              fullWidth={true}
              handleSelectValue={(val: any) => console.log(val)}
              width={"100%"}
              selectData={selectData}
            />
        );
      },
    },
    {
      field: "Dosage",
      headerName: "Dosage",
      width: 200,
      renderCell: (params) => {
        return (
            <CustomSelectPicker
              selectValue={''}
              size={"small"}
              fullWidth={true}
              handleSelectValue={(val: any) => console.log(val)}
              width={"100%"}
              selectData={selectData}
            />
        );
      },
    },
    {
      field: "Frequency",
      headerName: "Frequency",
      width: 200,
      renderCell: (params) => {
        return (
          <CustomSelectPicker
            selectValue={''}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log(val)}
            width={"100%"}
            selectData={selectData}
          />
        );
      },
    },
    {
      field: "Duration",
      headerName: "Duration",
      width: 200,
      renderCell: (params) => {
        return (
          <CustomSelectPicker
            selectValue={''}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log(val)}
            width={"100%"}
            selectData={selectData}
          />
        );
      },
    },
    {
      field: "Quantity",
      headerName: "Quantity",
      width: 100,
      renderCell: (params) => {
        return (
          <CustomSelectPicker
            selectValue={''}
            size={"small"}
            fullWidth={true}
            handleSelectValue={(val: any) => console.log(val)}
            width={"100%"}
            selectData={selectData}
          />
        );
      },
    },
    {
      field: "Instructions",
      headerName: "Instructions",
      width: 200,
      renderCell: (params) => {
          return (
            <CustomSelectPicker
              selectValue={''}
              size={"small"}
              fullWidth={true}
              handleSelectValue={(val: any) => console.log(val)}
              width={"100%"}
              selectData={selectData}
            />
          )
      },
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <Grid container flexDirection="column" alignItems={'center'} justifyContent={'center'}>
              <DeleteOutlineOutlinedIcon sx={styles.actionIcon} />
          </Grid>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      DrugName: "-",
      Dosage: "-",
      Frequency : "-",
      Duration: "-",
      Quantity: "-",
      Instructions: "-",
      Actions: "-",
    },
    {
      id: 2,
      DrugName: "-",
      Dosage: "-",
      Frequency : "-",
      Duration: "-",
      Quantity: "-",
      Instructions: "-",
      Actions: "-",
    },
    {
      id: 3,
      DrugName: "-",
      Dosage: "-",
      Frequency : "-",
      Duration: "-",
      Quantity: "-",
      Instructions: "-",
      Actions: "-",
    },
    {
      id: 4,
      DrugName: "-",
      Dosage: "-",
      Frequency : "-",
      Duration: "-",
      Quantity: "-",
      Instructions: "-",
      Actions: "-",
    }
    
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
                  <Box sx={{float : 'right'}}>
                    <CustomButton
                      title={"Add Prescription +"}
                      handleButtonClick={buttonClicked}
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      border={"1px solid"}
                      fontsize={"14px"}
                      color={"info"}
                      padding={"7px 55px"}
                    />
                  </Box>
                </Grid>
            </Grid>
          </Box>
          <Box sx={styles.screenContainer1}>
            <Grid container flexDirection={'row'} justifyContent={'space-between'} >
                <Grid item md={6}>
                    <Typography sx={styles.doctorName}>Dr.Surendra    |    Sever Tooth Ache at 18 and 22</Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography sx={styles.investigation}>Prescription Date : 22 Sept 2022</Typography>
                </Grid>
            </Grid>
          </Box>
          <Box sx={styles.tableContainer}>
            <CustomTable
              coloumns={columns}
              rows={rows}
              itemsPerPage={10}
              rowsPerPage={10}
              rowHeight={100}
            />
          </Box>
        </CustomCard>
      </Box>
      <Box sx={styles.screenContainer}>
        <CustomCard>
            <Grid container flexDirection={'row'} justifyContent={'space-between'} >
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
        </CustomCard>
      </Box>  
      <Box sx={styles.screenContainer}>
          <Grid container flexDirection={"row"} justifyContent={'flex-end'} alignItems={"center"}>
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
    </>
  );
};

const PrescriptionHoc = HocLayout(Prescription);
export default PrescriptionHoc;

import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/Breadcrum";
import CustomButton from "../../../../components/Button";
import CustomCard from "../../../../components/Card";
import HocLayout from "../../../../components/HocLayout";
import CustomInput from "../../../../components/Input";
import CustomSelectPicker from "../../../../components/SelectPicker";
import { styles } from "./styles";

const Receipt = () => {  

  const navigate = useNavigate();

  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <RouterLink to="/Inventory" style={styles.breadcrumbSubtext}>
      Inventory
    </RouterLink>,
    <Typography key="3" sx={styles.breadcrumbSubtext}>
      Add Inventory
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


  return (
    <>
      <Grid container  alignItems={"center"} justifyContent={'space-between'}>
         <Breadcrumbs title={"Add Inventory"} breadcrumbsArr={breadcrumbs} />
      </Grid>
      <Box sx={styles.screenContainer}>
        <CustomCard>
            <Box sx={styles.cardContainer}>
              <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item md={6}>
                    <CustomInput
                      size={"small"}
                      placeholder="Select item purchases date"
                      InputProps={''}
                    />
                </Grid>
                <Grid item md={6}>
                    <CustomInput
                      size={"small"}
                      placeholder="Enter Item Name"
                      InputProps={''}
                    />
                </Grid>
                
              </Grid>
              <Box sx={{marginTop:3}} />
              <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item md={6}>
                     <CustomSelectPicker
                        selectValue={''}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={220}
                        selectData={selectData}
                        placeholderText={'Category'}
                      />
                </Grid>
                <Grid item md={6}>
                      <CustomSelectPicker
                        selectValue={''}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={220}
                        selectData={selectData}
                        placeholderText={'Sub Category'}
                      />
                </Grid>
              </Grid>
              <Box sx={{marginTop:3}} />
              <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item md={6}>
                     <CustomSelectPicker
                        selectValue={''}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={220}
                        selectData={selectData}
                        placeholderText={'Group'}
                      />
                </Grid>
                <Grid item md={6}>
                   <CustomInput
                      size={"small"}
                      placeholder="Enter Company/ Brand Name"
                      InputProps={''}
                    />
                </Grid>
              </Grid>
              <Box sx={{marginTop:3}} />
              <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item md={6}>
                     <CustomSelectPicker
                        selectValue={''}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={220}
                        selectData={selectData}
                        placeholderText={'Enter Quantity'}
                      />
                </Grid>
                <Grid item md={6}>
                  <Grid container justifyContent={'space-around'} spacing={1}>
                    <Grid item md={8}>
                      <CustomInput
                        size={"small"}
                        placeholder="Invoice Copy"
                        InputProps={''}
                        disabled={true}
                      />
                    </Grid>
                    <Grid item md={4}>
                    <CustomButton
                          endIcon={""}
                          handleButtonClick={() => {
                            navigate('/AddInventory')
                          }}
                          title="Upload file"
                          backgroundcolor={"#204289"}
                          bordercolor={"#204289"}
                          border={"1px solid"}
                          fontsize={"13px"}
                          color={"info"}
                          width ={130}
                        />
                    </Grid>
                  </Grid> 
                    
                </Grid>
              </Grid>

              <Box sx={{marginTop:3}} />
              <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item md={6}>
                <Grid container justifyContent={'space-around'} spacing={1}>
                    <Grid item md={8}>
                      <CustomInput
                        size={"small"}
                        placeholder="Warranty Upload"
                        InputProps={''}
                        disabled={true}
                      />
                    </Grid>
                    <Grid item md={4}>
                        <CustomButton
                          endIcon={""}
                          handleButtonClick={() => {
                            navigate('/AddInventory')
                          }}
                          title="Upload file"
                          backgroundcolor={"#204289"}
                          bordercolor={"#204289"}
                          border={"1px solid"}
                          fontsize={"13px"}
                          color={"info"}
                          width ={130}
                        />
                    </Grid>
                  </Grid> 
                </Grid>
                <Grid item md={6}>
                    <CustomSelectPicker
                        selectValue={''}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={220}
                        selectData={selectData}
                        placeholderText={'Warranty Period'}
                    />
                </Grid>
              </Grid>

              <Box sx={{marginTop:3}} />
              <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item md={6}>
                    <CustomInput
                      size={"small"}
                      placeholder="Frequency of service"
                      InputProps={''}
                    /> 
                </Grid>
                <Grid item md={6}>
                   <CustomInput
                      size={"small"}
                      placeholder="Enter Cost"
                      InputProps={''}
                    />
                </Grid>
              </Grid>
              <Box sx={{marginTop:3}} />
              <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item md={6}>
                    <CustomInput
                      size={"small"}
                      placeholder="Enter Supplier Name"
                      InputProps={''}
                    /> 
                </Grid>
                <Grid item md={6}>
                   <CustomInput
                      size={"small"}
                      placeholder="Enter Supplier Contact No"
                      InputProps={''}
                    />
                </Grid>
              </Grid>
              <Box sx={{marginTop:3}} />
              <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item md={6}>
                    <CustomInput
                      size={"small"}
                      placeholder="Enter Supplier Address"
                      InputProps={''}
                    /> 
                </Grid>
                <Grid item md={6}>
                  
                </Grid>
              </Grid>
             
              <Box sx={{marginTop:3}} />
              <Grid container spacing={10} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item md={6}>
                    
                </Grid>
                <Grid item md={6}>
                   <Grid container spacing={1} justifyContent={'flex-end'}>
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
                            handleButtonClick={() => {
                              navigate('/AddInventoryStep2')
                            }}
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
        </CustomCard>
      </Box>   
    </>
  );
};

const ReceiptHoc = HocLayout(Receipt);
export default ReceiptHoc;

import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '../../../components/Breadcrum';
import { useNavigate } from "react-router-dom";
import TreatmentDetailsHeader from '../TreatmentDetailsHeader';
import Checkbox from '@mui/material/Checkbox';
import CustomInput from '../../../components/Input';
import CustomSelectPicker from '../../../components/SelectPicker';
import { Styles } from './styles'
import CustomDatePicker from '../../../components/DatePicker';
import CustomButton from '../../../components/Button';
import {
  Box, Typography,
  Table,
  TableBody,
  Link,
  Grid,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import CustomCard from '../../../components/Card';


const TreatmentPlanning = () => {

  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("");
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/Dashboard"
      onClick={handleOnClickBreadcrumItem}
      sx={Styles.breadcrumbSubtext}
    >
      Dashboard
    </Link>,
    <Typography key="2"
      sx={Styles.breadcrumbSubtext}>
      Treatments
    </Typography>,
  ];


  const AttendepesonTitle = [
    {
      value: 1,
      name: 'Select Doctor'
    },
    {
      value: 2,
      name: 'Ms'
    }
  ]
  const Status = [
    {
      value: 1,
      name: 'Status'
    },
    {
      value: 2,
      name: 'Ms'
    }
  ]

  const buttonClicked = () => { }

  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Breadcrumbs title={"Treatment Planning"} breadcrumbsArr={breadcrumbs} />
          </Grid>
          <Grid item xs={4}>
            <TreatmentDetailsHeader />
          </Grid>
          <Grid item xs={4}>

          </Grid>
        </Grid>
        <Box sx={Styles.screencontaner}>
          <CustomCard>
            <TableContainer component={Paper} sx={Styles.TableConatiner}>
              <Table size="small" sx={{ minWidth: 750 }} aria-label="a dense table">
                <TableHead>
                  <TableRow sx={Styles.tablerow}>
                    <TableCell sx={Styles.tablerowhead}>Select</TableCell>
                    <TableCell sx={Styles.tablerowhead} style={{ "width": "88px" }}>Tooth No</TableCell>
                    <TableCell sx={Styles.tablerowhead}
                      style={{ width: "105px" }}>Treatment</TableCell>
                    <TableCell sx={Styles.tablerowhead}>Select Date</TableCell>
                    <TableCell sx={Styles.tablerowhead}>Cost</TableCell>
                    <TableCell sx={Styles.tablerowhead}>Discount</TableCell>
                    <TableCell sx={Styles.tablerowhead}>Treatment Cost</TableCell>
                    <TableCell sx={Styles.tablerowhead}>Doctor</TableCell>
                    <TableCell sx={Styles.tablerowhead} style={{ "width": "150px" }}>Treatment Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow >
                    <TableCell
                      sx={Styles.tablefirstcellfirstItem}>
                      <Checkbox size="small" />
                      <Checkbox sx={{ mt: "18px" }} size="small" />
                      <Checkbox sx={{ mt: "18px" }} size="small" />
                    </TableCell>
                    <TableCell
                      sx={Styles.tablefirstcell} style={Styles.RowDatafont}>12</TableCell>
                    <TableCell
                      sx={Styles.tablefirstcell}>
                      <Typography sx={Styles.RowDatafont}>
                        Treatment 1
                      </Typography>
                      <Typography mt={"32px"} sx={Styles.RowDatafont}>
                        Treatment 2
                      </Typography>
                      <Typography mt={"32px"} sx={Styles.RowDatafont}>
                        Treatment 3
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomDatePicker fullWidth={'fullWidth'} />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomDatePicker fullWidth={'fullWidth'} />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomDatePicker fullWidth={'fullWidth'} />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomInput placeholder={"Enter Cost"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomInput placeholder={"Enter Cost"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomInput placeholder={"Enter Cost"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomInput placeholder={"Enter Disc %"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomInput placeholder={"Enter Disc %"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomInput placeholder={"Enter Disc %"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomInput placeholder={"Enter Cost"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomInput placeholder={"Enter Cost"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomInput placeholder={"Enter Cost"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={Styles.tablefirstcell} >
                      <Box>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={AttendepesonTitle}
                        />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={AttendepesonTitle}
                        />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={AttendepesonTitle}
                        />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={Status}
                        />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={Status}
                        />
                      </Box>
                      <Box mt={"10px"}>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={Status}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={Styles.tablefirstcell}>
                      <Box>
                        <Checkbox size="small" />
                      </Box>
                    </TableCell>
                    <TableCell sx={Styles.tablefirstcell} style={Styles.RowDatafont}>
                      13
                    </TableCell>
                    <TableCell sx={Styles.tablefirstcell}>
                      <Typography sx={Styles.RowDatafont}>
                        Treatment 1
                      </Typography>
                    </TableCell>
                    <TableCell sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomDatePicker fullWidth={'fullWidth'} />
                      </Box>
                    </TableCell>
                    <TableCell sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomInput placeholder={"Enter Cost"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </TableCell>
                    <TableCell sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomInput placeholder={"Enter Disc %"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </TableCell>
                    <TableCell sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomInput placeholder={"Enter Cost"}
                          InputProps={""}
                          size={"small"} />
                      </Box>
                    </TableCell>
                    <TableCell sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={AttendepesonTitle}
                        />
                      </Box>
                    </TableCell>
                    <TableCell sx={Styles.tablefirstcell}>
                      <Box>
                        <CustomSelectPicker
                          selectValue={1}
                          size={"small"}
                          fullWidth={false}
                          handleSelectValue={(val: any) => console.log("hii")}
                          width={"100%"}
                          selectData={AttendepesonTitle}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CustomCard>
        </Box>
        <Box mt={"20px"} sx={Styles.screencontaner}>
          <Grid container spacing={6}>
            <Grid item xs={3}>
              <CustomCard>
                <Box>
                  <Typography sx={Styles.TotalCost}>
                    Total Treatment Course Cost
                  </Typography>
                </Box>
                <Box mt={1}>
                  <Typography sx={Styles.TotalCost}>
                    Rs. 7,600
                  </Typography>
                </Box>
              </CustomCard>
            </Grid>
            <Grid item xs={9} alignItems={"end"}>
              <Box
                display={"flex"}
                gap={"10px"}
                justifyContent={"flex-end"}>
                <Box mt={"18px"}>
                  <CustomButton title={"Cancel"}
                    handleButtonClick={buttonClicked}
                    backgroundcolor={"#FFFFFF"}
                    bordercolor={"#9DA2AB"}
                    padding={"4px 30px"}
                    border={"1px solid"}
                    fontsize={"14px"}
                    color={"primary"}
                    endIcon={""} />
                </Box>
                <Box mt={"18px"}>
                  <CustomButton title={"Save & Next"}
                    handleButtonClick={buttonClicked}
                    backgroundcolor={"#204289"}
                    bordercolor={"#204289"}
                    border={"1px solid"}
                    fontsize={"14px"}
                    color={"info"}
                    padding={"4px 30px"}
                    endIcon={""} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default TreatmentPlanning
import { Box, Typography, Grid, Link } from '@mui/material'
import React from 'react'
import { Styles } from './styles'
import TableCell from "@mui/material/TableCell";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link as RouterLink } from 'react-router-dom';
import TableRow from "@mui/material/TableRow";
import ImageUploading from 'react-images-uploading';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomSelectPicker from '../../../../components/SelectPicker';
import CustomInput from '../../../../components/Input';
import CustomButton from '../../../../components/Button';
import HocLayout from '../../../../components/HocLayout';
import TabHeader from '../TabHeader';
import Breadcrum from '../../../../components/Breadcrum';
import CustomCard from '../../../../components/Card';
import CustomTabel from '../../../../components/Tabel';
import makeStyles from "@material-ui/styles/makeStyles";

const SchemeDetails = () => {

  const location = useLocation();

  const navigate = useNavigate();


  const enterEligibleAmount = [
    {
      value: 1,
      name: "12000"
    },
    {
      value: 2,
      name: "1000"
    },
  ]

  const EnterSelectSchemeType = [
    {
      value: 1,
      name: "Enter/ Select Scheme Type"
    },
    {
      value: 2,
      name: "something"
    },
  ]
  const SelectSchemeType = [
    {
      value: 1,
      name: "Select Scheme Type"
    },
    {
      value: 2,
      name: "something"
    },
  ]

  const eligibleNoOfBills = [
    {
      value: 1,
      name: "Bills Remaining"
    },
    {
      value: 2,
      name: "something"
    },
  ]
  const limitPerBill = [
    {
      value: 1,
      name: "Bills Remaining"
    },
    {
      value: 2,
      name: "something"
    },
  ]

  const buttonClicked = () => { }

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };


  const handleOnClickBreadcrumItem = () => {
    navigate("/ManagePatients")
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

    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/ManagePatients"
      onClick={handleOnClickBreadcrumItem}
      sx={Styles.breadcrumbSubtext}
    >
      Manage Patients
    </Link>,
    <Typography key="2" sx={Styles.breadcrumbSubtext}>
      Patient Registration
    </Typography>
  ];


  const useStyles = makeStyles({
    tab: {
      color: "#021025 !important",
      '&.Mui-selected': {
        color: "#204289 !important"
      }
    },
  });

  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  const classes = useStyles();
  const tabClasses = { root: classes.tab };

  const tableHeadData = [
    "Document Name",
    "File Type",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      DocumentName: "P1245",
      FileType: "Teeth Whitening",
      Actions: "",
    },
  ];

  return (
    <>
      <Breadcrum title={"Patient Registration"} breadcrumbsArr={breadcrumbs} />
      <Box mt={2}>
        <CustomCard>
          <Box p={2}>
            <TabHeader path={location.pathname} />
            <Box mt={"15px"}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Box>
                    <CustomSelectPicker
                      placeholderText={"Select Company Type (Govt)"}
                      selectValue={''}
                      size={"small"}
                      fullWidth={false}
                      handleSelectValue={(val: any) => console.log("hii")}
                      width={"100%"}
                      selectData={EnterSelectSchemeType}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <CustomInput placeholder={"Select Scheme Name"}
                      InputProps={""}
                      size={"small"} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={"15px"}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Box>
                    <CustomSelectPicker
                      selectValue={1}
                      size={"small"}
                      fullWidth={false}
                      handleSelectValue={(val: any) => console.log("hii")}
                      width={"100%"}
                      selectData={SelectSchemeType}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <CustomSelectPicker
                      placeholderText={"Enter Eligible Amount"}
                      selectValue={''}
                      size={"small"}
                      fullWidth={false}
                      handleSelectValue={(val: any) => console.log("hii")}
                      width={"100%"}
                      selectData={enterEligibleAmount}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={'15px'}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Box>
                    <CustomSelectPicker
                      placeholderText={"Enter Eligible No of Bills"}
                      selectValue={''}
                      size={"small"}
                      fullWidth={false}
                      handleSelectValue={(val: any) => console.log("hii")}
                      width={"100%"}
                      selectData={eligibleNoOfBills}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <CustomSelectPicker
                    placeholderText={"Enter limit per each bill"}
                    selectValue={''}
                    size={"small"}
                    fullWidth={false}
                    handleSelectValue={(val: any) => console.log("hii")}
                    width={"100%"}
                    selectData={limitPerBill}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box mt={"15px"}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      isDragging,
                      dragProps,
                    }) => (
                      <>
                        <Box
                          onClick={onImageUpload}
                          {...dragProps}
                          sx={Styles.DragandDrop}>
                          Drag and Drag / Upload Document
                        </Box>
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="100" />
                          </div>
                        ))}
                      </>
                    )}
                  </ImageUploading>
                </Grid>
              </Grid>
            </Box>
            <Box mt={"50px"}>
              <Grid
                container
                flexDirection={"row"}
                spacing={1}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Grid item>
                  <CustomButton
                    title={"Back"}
                    handleButtonClick={buttonClicked}
                    backgroundcolor={"#FFFFFF"}
                    bordercolor={"#204289"}
                    color={"#204289"}
                    width={110}
                  />
                </Grid>
                <Grid item>
                  <CustomButton
                    title={"Register"}
                    handleButtonClick={buttonClicked}
                    backgroundcolor={"#204289"}
                    bordercolor={"#204289"}
                    color={"#fffff"}
                    width={110}
                    padding={7}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CustomCard>
      </Box>
      {/* <Box mt={3}>
        <CustomCard>
          <TabContext value={value}>
            <TabList onChange={handleChange}>
              <Tab label="Photos" value="1"
                sx={Styles.TabColor}
                classes={tabClasses} />
              <Tab label="Documents" value="2"
                sx={Styles.TabColor}
                classes={tabClasses} />
            </TabList>
            <TabPanel value="1" sx={Styles.Tabpanel}>
              <TabContext value={value}>
                <TabPanel value='1' sx={Styles.Tabpanel}>
                  <Box>
                    <CustomTabel header={tableHeadData}>
                      {rows.map((row) => (
                        <>
                          <TableRow key={row.id}>
                            <TableCell>
                              <Typography sx={Styles.tableCell}>
                                {row.DocumentName}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography sx={Styles.tableCell}>
                                {row.FileType}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Grid
                                container
                                flexDirection="row"
                                spacing={2}
                                justifyContent={'space-around'}
                                alignItems={'center'}>
                                <Grid item>
                                  <Grid container flexDirection="row"
                                    gap={"5px"} alignItems={"center"}>
                                    <RemoveRedEyeOutlinedIcon sx={Styles.actionIcon} />
                                    <RouterLink
                                      to="/"
                                      style={{ textDecoration: "none" }}
                                    >
                                      <Typography sx={Styles.tableCell}>
                                        {" "}
                                        View{" "}
                                      </Typography>
                                    </RouterLink>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                    </CustomTabel>
                  </Box>
                </TabPanel>
                <TabPanel value='2' sx={Styles.Tabpanel}>
                  <h1>hi</h1>
                </TabPanel>
              </TabContext>
            </TabPanel>
          </TabContext>
        </CustomCard>
      </Box> */}
    </>
  )
}
const SchemeDetailsHoc = HocLayout(SchemeDetails)
export default SchemeDetailsHoc
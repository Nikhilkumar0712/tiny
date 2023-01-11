import React from 'react'
import Breadcrumbs from '../../../components/Breadcrum';
import AccountsHeader from '../../Billing/AccountsHeader';
import { Link as RouterLink } from "react-router-dom";
import CustomInput from '../../../components/Input';
import CustomSelectPicker from '../../../components/SelectPicker';
import { styles } from './styles';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CustomTable from '../../../components/Tabel';
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import HocLayout from '../../../components/HocLayout';
import CustomCard from '../../../components/Card';
import ImageUploading from 'react-images-uploading';

const LabWorkView = () => {

  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Lab Work
    </Typography>,
  ];

  const tableHeadData = [
    "Step No",
    "Lab visits data & time",
    "Lab representative",
    "Visit Title",
    "Received by",
    "Images of Lab work received",
    "Status",
  ];

  const rows = [
    {
      id: 1,
      StepNo: "#1",
      Labvisitsdataime: "22 Sept 2022",
      time: "06:00 Pm",
      Labrepresentative: "Srinivas",
      VisitTitle: "22 Sept 2022",
      Receivedby: "Srinivas",
      ImagesofLabworkreceived: "7000",
      Status: "Cash",
    },
  ];

  const Doctor = [
    {
      value: 1,
      name: "Not started",
    },
    {
      value: 2,
      name: "Sunny",
    },
  ];

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <Grid container alignItems={"center"} justifyContent={'space-between'}>
        <Breadcrumbs title={"Lab work View"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>
      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box p={2}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}>
                  <Box display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                    justifyContent={"space-between"}>
                    <Box display={"flex"}
                      alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Work id :
                      </Typography>
                      <Typography sx={styles.Id}>
                        123
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={"center"} alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Lab Name :
                      </Typography>
                      <Typography sx={styles.Id}>
                        Olivia Labs
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={"center"} alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Work Title :
                      </Typography>
                      <Typography sx={styles.Id}>
                        Dental Caps
                      </Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                    justifyContent={"space-between"}
                    mt={"10px"}>
                    <Box display={"flex"} gap={"center"} alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Type of Work :
                      </Typography>
                      <Typography sx={styles.Id}>
                        Dental Caps
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={"center"} alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Doctor :
                      </Typography>
                      <Typography sx={styles.Id}>
                        Dr.Surendra
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={"center"} alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Status :
                      </Typography>
                      <Typography sx={styles.Id}>
                        0/3
                      </Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                    mt={"10px"}
                    justifyContent={"space-between"}>
                    <Box display={"flex"} gap={"center"} alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Creation Date :
                      </Typography>
                      <Typography sx={styles.Id}>
                        22 Aug 2022
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={"center"} alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Delivery Date :
                      </Typography>
                      <Typography sx={styles.Id}>
                        22 Aug 2022
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={"center"} alignItems={"center"}>
                      <Typography sx={styles.Work}>
                        Amount :
                      </Typography>
                      <Typography sx={styles.Id}>
                        7000 RS
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CustomCard>
            <Box mt={"20px"}>
              <CustomCard>
                <Box p={2}>
                  <Box sx={styles.tableContainer}>
                    <CustomTable header={tableHeadData}>
                      {rows.map((row) => (
                        <>
                          <TableRow key={row.id}>
                            <TableCell>
                              <Typography sx={styles.tableCell}>
                                {row.StepNo}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography sx={styles.tableCell}>
                                {row.Labvisitsdataime}
                              </Typography>
                              <Typography sx={styles.tableCell}>
                                {row.time}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography sx={styles.tableCell}>
                                {row.Labrepresentative}
                              </Typography>

                            </TableCell>
                            <TableCell>
                              <Typography sx={styles.tableCell}>
                                {row.VisitTitle}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography sx={styles.tableCell}>
                                {row.VisitTitle}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography sx={styles.tableCell}>
                                {row.ImagesofLabworkreceived}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Box>
                                <CustomSelectPicker
                                  selectValue={1}
                                  size={"small"}
                                  fullWidth={true}
                                  handleSelectValue={(val: any) => console.log("hii")}
                                  width={"100%"}
                                  selectData={Doctor}
                                />
                              </Box>
                            </TableCell>
                          </TableRow>
                          <TableRow key={row.id}>
                            <TableCell colSpan={2}>
                              <Typography sx={styles.tableCell}>
                              <ImageUploading
                              multiple
                              value={images}
                              onChange={onChange}
                              maxNumber={maxNumber}>
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
                                    >
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
                              </Typography>
                            </TableCell>
                            <TableCell colSpan={3}>
                              <Box>
                                <Typography sx={styles.tableCell}
                                  style={{ "textAlign": "inherit" }}>
                                  Doctor Comments
                                </Typography>
                                <Box mt={"10px"}>
                                  <CustomInput
                                    size={"small"}
                                    placeholder="Check patient treatment images"
                                    InputProps={""}
                                  />
                                </Box>
                              </Box>
                            </TableCell>
                         
                          </TableRow>
                        </>
                      ))}
                    </CustomTable>
                  </Box>
                </Box>
              </CustomCard>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
const LabWorkViewhoc = HocLayout(LabWorkView)
export default LabWorkViewhoc
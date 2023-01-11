import React from 'react'
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import Breadcrumbs from '../../components/Breadcrum';
import { useNavigate } from "react-router-dom";
import { styles } from './styles'
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CustomSelectPicker from '../../components/SelectPicker';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CustomTable from '../../components/Tabel';
import CustomButton from '../../components/Button';
import CustomCard from '../../components/Card';
import { Link as RouterLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import HocLayout from '../../components/HocLayout';
import CustomModal from '../../components/Modal';
import ReceiveWork from './ReceiveWork';

const Labs = () => {

  const navigate = useNavigate();

  const breadcrumbs = [
    <RouterLink to="/Dashboard" style={styles.breadcrumbSubtext}>
      Dashboard
    </RouterLink>,
    <Typography key="2" sx={styles.breadcrumbSubtext}>
      Lab works List
    </Typography>,
  ];

  const buttonClicked = () => { }

  const tableHeadData = [
    "S.No",
    "Lab Work ID",
    "Patient",
    "Doctor",
    "Work Title",
    "Lab Name",
    "Type of Work",
    "Creation Date",
    "Delivery Date",
    "Status",
    "Cost",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      SNo: "1",
      LabWorkID: "222",
      Patient: "Sunny",
      Doctor: "Harish",
      WorkTitle: "cop",
      LabName: "Apolla",
      TypeofWork: "Type 1",
      CreationDate: "22 Sept 2022",
      DeliveryDate: "22 Sept 2022",
      Status: "open",
      Cost: "32323",
      Actions: "",
    },
    {
      id: 2,
      SNo: "1",
      LabWorkID: "222",
      Patient: "Sunny",
      Doctor: "Harish",
      WorkTitle: "cop",
      LabName: "Apolla",
      TypeofWork: "Type 1",
      CreationDate: "22 Sept 2022",
      DeliveryDate: "22 Sept 2022",
      Status: "open",
      Cost: "Rs 32323",
      Actions: "",
    },

  ];

  const Doctor = [
    {
      value: 1,
      name: "SelectDoctor",
    },
    {
      value: 2,
      name: "Sunny",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CustomModal
        open={open}
        handleClose={''}
        handleOpen={handleOpen}
        width={"600px"}>
        <Box >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Typography sx={styles.ModalHeading}>
              Receive Work
            </Typography>
            <CloseIcon onClick={handleClose} sx={styles.closeicon} />
          </Box>
          <Box mt={"20px"}></Box>
        </Box>
        <ReceiveWork />
      </CustomModal>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"10px"}
        mr={1}>
        <Box>
          <Breadcrumbs title={"Lab works list"} breadcrumbsArr={breadcrumbs} />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"10px"}>
          <Box>
            <CustomButton
              title={"+ Add Lab work"}
              handleButtonClick={buttonClicked}
              backgroundcolor={"#204289"}
              bordercolor={"#204289"}
              border={"1px solid"}
              fontsize={"14px"}
              color={"info"}
              padding={"4px 30px"} />
          </Box>
          <Box>
            <CustomButton
              title={"Recieve Item"}
              backgroundcolor={"#204289"}
              handleButtonClick={handleOpen}
              bordercolor={"#204289"}
              border={"1px solid"}
              fontsize={"14px"}
              color={"info"}
              padding={"4px 30px"} />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box
                mt={1}
                marginRight={"20px"}
                display={"flex"}
                gap={"10px"}
                justifyContent={"flex-end"}
                alignItems={"center"}>
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
              </Box>
              <Box>
                <CustomTable header={tableHeadData}>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.SNo}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.LabWorkID}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Patient}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Doctor}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.WorkTitle}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.LabName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.TypeofWork}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.CreationDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.DeliveryDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Cost}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          flexDirection="row"
                          spacing={2}
                          justifyContent={'center'}
                          alignItems={'center'}
                        >
                          <Grid item>
                            <Grid container flexDirection="row">
                              <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                              <RouterLink
                                to="/LabCreation"
                                style={{ textDecoration: "none" }}
                              >
                                <Typography sx={styles.tableCell}>
                                  {" "}
                                  View{" "}
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
  )
}
const Labshoc = HocLayout(Labs)
export default Labshoc
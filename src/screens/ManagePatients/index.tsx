import React from "react";
import CustomTable from "../../components/Tabel";
import HocLayout from "../../components/HocLayout";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Breadcrum from "../../components/Breadcrum";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { styles } from "./styles";
import { Link as RouterLink } from "react-router-dom";
import EditPencil from "../../assets/edit pencil.svg";
import CustomButton from "../../components/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/Card";
import CustomSwitch from "../../components/Switch";
const ManagePatients = () => {
  const navigate = useNavigate();

  const handleOnClickBreadcrumItem = () => {
    navigate("");
  };
  const buttonClicked = () => {
    navigate("/PatientDetails");
  };

  const tableHeadData = [
    "Patient Name",
    "Patient ID",
    "Date of Birth",
    "Age",
    "Gender",
    "Contact No",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      PatientName: "Suresh",
      image: require("../../assets/profile.png"),
      PatientID: "1543355",
      DateofBirth: "22 Sept 2022",
      Age: "27",
      Gender: "Male",
      ContactNo: "+91 1234565432",
      Actions: "",
    },
    {
      id: 2,
      PatientName: "Suresh",
      image: require("../../assets/profile.png"),
      PatientID: "1543355",
      DateofBirth: "22 Sept 2022",
      Age: "27",
      Gender: "Male",
      ContactNo: "+91 1234565432",
      Actions: "",
    },
    {
      id: 3,
      PatientName: "Suresh",
      image: require("../../assets/profile.png"),
      PatientID: "1543355",
      DateofBirth: "22 Sept 2022",
      Age: "27",
      Gender: "Male",
      ContactNo: "+91 1234565432",
      Actions: "",
    },
    {
      id: 4,
      PatientName: "Suresh",
      image: require("../../assets/profile.png"),
      PatientID: "1543355",
      DateofBirth: "22 Sept 2022",
      Age: "27",
      Gender: "Male",
      ContactNo: "+91 1234565432",
      Actions: "",
    },
    {
      id: 5,
      PatientName: "Suresh",
      image: require("../../assets/profile.png"),
      PatientID: "1543355",
      DateofBirth: "22 Sept 2022",
      Age: "27",
      Gender: "Male",
      ContactNo: "+91 1234565432",
      Actions: "",
    },
  ];
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} mr={1} mt={2}>
        <Breadcrum title={"Patients"} breadcrumbsArr={[]} />
        <CustomButton
          title={"New Patient Registration"}
          handleButtonClick={buttonClicked}
          backgroundcolor={"#204289"}
          padding={7}
          endIcon={<AddIcon sx={styles.plusIcon} />}
          width={230}
        />
      </Box>
      <Box sx={styles.screenContainer}>
        <CustomCard>
          <Box sx={styles.tableContainer}>
            <CustomTable header={tableHeadData}>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Typography sx={styles.tableCell}>
                      {row.PatientID}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={"18px"}
                      justifyContent={"center"}
                    >
                      <Box
                        component={"img"}
                        alt=" Appointment"
                        src={row.image}
                        width={"40px"}
                        height={"40px"}
                        borderRadius={"50%"}
                      ></Box>
                      <Typography sx={styles.patientName}>
                        {row.PatientName}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Typography sx={styles.tableCell}>
                      {row.DateofBirth}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={styles.tableCell}>{row.Age}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={styles.tableCell}>{row.Gender}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={styles.tableCell}>
                      {row.ContactNo}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Grid container spacing={4} justifyContent={'center'} alignItems={'center'}>
                      <Grid item>
                        <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                        <RouterLink
                          to="/PatientProfile"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography sx={styles.tableCell}> View </Typography>
                        </RouterLink>
                      </Grid>
                      <Grid item>
                        <Box
                          component={"img"}
                          alt=" Appointment"
                          src={EditPencil}
                          width={"18px"}
                          height={"18px"}
                          fontSize={"18px"}
                        />
                        <RouterLink to="/" style={{ textDecoration: "none" }}>
                          <Typography sx={styles.tableCell}> Edit </Typography>
                        </RouterLink>
                      </Grid>
                      <Grid item>
                        <Box>
                          <CustomSwitch />
                        </Box>
                        <RouterLink to="/" style={{ textDecoration: "none" }}>
                          <Typography sx={styles.tableCell}>
                            {" "}
                            Active{" "}
                          </Typography>
                        </RouterLink>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </CustomTable>
          </Box>
        </CustomCard>
      </Box>
    </>
  );
};
const ManagePatientshoc = HocLayout(ManagePatients);
export default ManagePatientshoc;

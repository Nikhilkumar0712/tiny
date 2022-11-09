import React from 'react'
import { Box, Link, Typography, Grid, InputAdornment } from "@mui/material";
import { styles } from "./styles";
import DeleteImage from '../../../../assets/delete.svg'
import { useNavigate } from "react-router-dom";
import CustomTable from "../../../../components/Tabel";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link as RouterLink } from "react-router-dom";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
const TreatmentPrescription = () => {

  const navigate = useNavigate();
  const tableHeadData = [
    "S.No",
    "Type",
    "Drug/Trade Name",
    "Dosage",
    "Frequency",
    "Duration",
    "Quantity",
    "Instructions",
    "Actions"

  ];

  const rows = [
    {
      id: 1,
      SNo: '1',
      Type: "",
      Drug: "Search Enter Drug",
      Dosage: "Select Dosage",
      Frequency: "Select Dosage",
      Duration: "Select Duration",
      Quantity: "00",
      Instructions: "Select Instructions",
      Actions: "-"
    }
  ];
  const buttonClicked = () => { };
  return (
    <>
    
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Box sx={styles.tableContainer}>
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
                      {row.Type}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={styles.tableCell}>
                      {row.Drug}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={styles.tableCell}>
                      {row.Dosage}
                    </Typography>
                  </TableCell >
                  <TableCell sx={styles.tableCell}>
                    {row.Frequency}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    {row.Duration}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    {row.Quantity}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    {row.Instructions}
                  </TableCell>
                  <TableCell>
                    <Box
                      display={"flex"}
                      gap={"10px"}
                      justifyContent={"center"}
                      alignItems={"center"}>
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
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        flexDirection={"column"}
                      >
                        <Box
                          component={"img"}
                          alt=" Appointment"
                          src={DeleteImage}
                          width={"18px"}
                          height={"18px"}
                          fontSize={"18px"}>
                        </Box>
                        <Typography sx={styles.tableCell} style={{ "color": "#CE0505" }}>
                          delete
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </CustomTable>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default TreatmentPrescription
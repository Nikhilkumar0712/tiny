import React, { useState } from 'react';
import { Box, Link, Typography, Grid } from "@mui/material";
import CustomTable from "../../components/Tabel";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HocLayout from '../../components/HocLayout';
import { styles } from './styles';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrum";
import Popover from '@mui/material/Popover';
import CustomCard from "../../components/Card";
import Image from '../../assets/meetballicon.svg'
import PopOverMenu from './PopOverMenu';
import EditPencil from '../../assets/edit pencil.svg'
import AccountsHeader from '../Billing/AccountsHeader';
import CustomPopOver from '../../components/PopOver';
// import CustomPopOver from '../../components/PopOver';
const Treatments = () => {

  const [PopOver, setPopOver] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setPopOver(event.currentTarget);
  };

  const handleClose = (event: MouseEvent) => {
    setPopOver(null);
  };
  const open = Boolean(PopOver);
  const id = open ? 'simple-popover' : undefined;


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
      Treatments
    </Typography>,

  ];



  const tableHeadData = [
    "S.No",
    "Treatment Course",
    "Examination Date",
    "Overall Status",
    "Treatment Course Cost",
    "Actions",
  ];

  const rows = [
    {
      id: 1,
      Sn: "1",
      TreatmentCourse: "R23",
      ExaminationDate: "22 Sept 2022",
      OverallStatus: "156",
      TreatmentCourseCost: "OP",
      Actions: "",
    },
    {
      id: 1,
      Sn: "1",
      TreatmentCourse: "R23",
      ExaminationDate: "22 Sept 2022",
      OverallStatus: "156",
      TreatmentCourseCost: "OP",
      Actions: "",
    },
  ];

  return (
    <>
      <Grid container flexDirection={"row"} justifyContent={"space-between"}>
        <Breadcrumbs title={"Treatments"} breadcrumbsArr={breadcrumbs} />
        <AccountsHeader />
      </Grid>
      <Box sx={styles.screenContainer}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <CustomCard>
              <Box sx={styles.tableContainer}>
                <CustomTable header={tableHeadData}>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.Sn}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.TreatmentCourse}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.ExaminationDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.OverallStatus}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={styles.tableCell}>
                          {row.TreatmentCourseCost}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Grid
                          container
                          flexDirection="row"
                          spacing={2}
                          justifyContent={"space-between"}
                          alignItems={'center'}
                        >
                          <Grid item>
                            <Grid container flexDirection="row">
                              <RemoveRedEyeOutlinedIcon sx={styles.actionIcon} />
                              <RouterLink
                                to="/TreatmentView"
                                style={{ textDecoration: "none" }}>
                                <Typography sx={styles.tableCell}>
                                  View
                                </Typography>
                              </RouterLink>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid container flexDirection="row">
                              <Box
                                component={"img"}
                                alt=" Appointment"
                                src={EditPencil}
                                width={"18px"}
                                height={"18px"}
                                fontSize={"18px"}>
                              </Box>
                              <RouterLink
                                to="/"
                                style={{ textDecoration: "none" }}
                              >
                                <Typography sx={styles.tableCell}>
                                  {" "}
                                  Edit{" "}
                                </Typography>
                              </RouterLink>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid container flexDirection="row">
                              <Popover
                                id={id}
                                open={open}
                                anchorEl={PopOver}
                                onClose={handleClose}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'left',
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                                }}>
                                <PopOverMenu />
                              </Popover>
                              {/* <CustomPopOver
                                id={id}
                                open={open}
                                PopOver={PopOver}
                                onClose={handleClose}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'left',
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                                }}>
                                <PopOverMenu />
                              </CustomPopOver> */}
                              <Box
                                onClick={handleClick}
                                display={"flex"}
                                flexDirection={"row"}
                                alignItems={"center"}>
                                <img src={Image} alt="" style={styles.Imagemeetball} />
                                <Typography sx={styles.tableCell}>
                                  {" "}
                                  More{" "}
                                </Typography>
                              </Box>
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
const Treatmentshoc = HocLayout(Treatments)
export default Treatmentshoc
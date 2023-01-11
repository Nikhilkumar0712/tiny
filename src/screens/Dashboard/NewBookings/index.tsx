import { Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../../components/Button";
import CustomCard from "../../../components/Card";
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from "@mui/material";
import CustomDatePicker from "../../../components/DatePicker";
import CustomInput from "../../../components/Input";
import CustomSelectPicker from "../../../components/SelectPicker";
import { Styles } from "./styles";
import CustomModal from "../../../components/Modal";
import AvailableSlots from "../AvailableSlots";

const gender = [
  {
    value: 1,
    name: "Gender",
  },
  {
    value: 2,
    name: "Female",
  },
];
const TimeData = [
  {
    value: 1,
    name: "12:30 Pm",
  },
  {
    value: 2,
    name: "1:00 Am",
  },
];

const SelectChair = [
  {
    value: 1,
    name: "Red",
  },
  {
    value: 2,
    name: "Green",
  },
];

const SelectAssistant = [
  {
    value: 1,
    name: "Sai",
  },
  {
    value: 2,
    name: "Sunny",
  },
];

const SelectDoctor = [
  {
    value: 1,
    name: "Select Doctor",
  },
  {
    value: 2,
    name: "Sunny",
  },
];

const typeOfBooking = [
  {
    id: 1,
    name: 'Online',
  },
  {
    id: 1,
    name: 'Offline',
  },
]

const referalName = [
  {
    id: 1,
    name: 'Nikhil'
  },
  {
    id: 2,
    name: 'Akhil'
  }
]

const title = [
  {
    id: 1,
    name: "Mr"
  },
  {
    id: 2,
    name: "Ms"
  }
]
const NewBookings = () => {
  const buttonClicked = () => { };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <CustomModal
        open={open}
        handleClose={''}
        handleOpen={handleOpen}
        width={"550px"}>
        {/* <Box >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Typography fontSize={"22px"}
              fontFamily={"poppins"}
              color={"#204289"}>
              Availble Slots
            </Typography>
            <Box width={"100px"}>
              <CustomDatePicker fullWidth={"20px"} />
            </Box>
            <Box   width={"100px"}>
              <CustomSelectPicker
                placeholderText={'Time'}
                selectValue={''}
                size={"small"}
                fullWidth={true}
                handleSelectValue={(val: any) => console.log("hii")}
                width={"100px"}
                selectData={TimeData}
              />
            </Box>
            <CloseIcon onClick={handleClose} />
          </Box>
          <Box mt={"20px"}></Box>
        </Box> */}
        <Box >
          <Grid container spacing={2} alignItems={'center'}>
            <Grid item xs={5}>
              <Typography fontSize={"22px"}
                fontFamily={"poppins"}
                fontWeight={"600"}
                color={"#204289"}>
                Availble Slots
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <CustomSelectPicker
                placeholderText={'Select Chair'}
                selectValue={''}
                size={"small"}
                fullWidth={true}
                handleSelectValue={(val: any) => console.log("hii")}
                width={"100px"}
                selectData={SelectChair}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomDatePicker fullWidth={"20px"} />
            </Grid>
            <Grid item xs={1}>
              <CloseIcon onClick={handleClose} />
            </Grid>
          </Grid>
        </Box>
        <Box mt={4}>
          <AvailableSlots />
        </Box>
      </CustomModal>
      <Box sx={{ marginRight: 1 }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Typography sx={Styles.MainHeading}>Book an Appointment</Typography>
        </Box>
        <Box mt={"12px"}>
          <CustomCard>
            <Box sx={Styles.overflow}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box mt={2}>
                    <CustomDatePicker fullWidth={""} />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box mt={2}>
                    <CustomSelectPicker
                      placeholderText={'Time'}
                      selectValue={''}
                      size={"small"}
                      fullWidth={true}
                      handleSelectValue={(val: any) => console.log("hii")}
                      width={""}
                      selectData={TimeData}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2}>
                <CustomSelectPicker
                  placeholderText={'Select Chair'}
                  selectValue={''}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={"100%"}
                  selectData={SelectChair}
                />
              </Box>
              <Box mt={2}>
                <CustomSelectPicker
                  placeholderText={'Select Doctor'}
                  selectValue={1}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={"100%"}
                  selectData={SelectDoctor}
                />
              </Box>
              <Box mt={2}>
                <CustomSelectPicker
                  placeholderText={'Select Assistant'}
                  selectValue={''}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={"100%"}
                  selectData={SelectAssistant}
                />
              </Box>
              <Box mt={2}>
                <CustomSelectPicker
                  placeholderText={'Type of Booking'}
                  selectValue={''}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={"100%"}
                  selectData={typeOfBooking}
                />
              </Box>
              <Box mt={2}>
                <CustomSelectPicker
                  placeholderText={'Duration'}
                  selectValue={''}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={"100%"}
                  selectData={TimeData}
                />
              </Box>
              <Box mt={2} textAlign={'right'}>
                <CustomButton
                  title={"Check Availbility"}
                  handleButtonClick={handleOpen}
                  backgroundcolor={"#204289"}
                  bordercolor={"#204289"}
                  color={"#fffff"}
                  width={150}
                  padding={7}
                />
              </Box>
              <Box
                mt={2}>
                <Typography sx={Styles.MainHeading}>Patient Details</Typography>
              </Box>
              <Box mt={2}>
                <Box>
                  <CustomInput
                    placeholder={"Enter Name"}
                    InputProps={""}
                    size={"small"}
                  />
                </Box>
                <Box mt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <CustomInput
                        placeholder={"Enter Mobile Number"}
                        InputProps={""}
                        size={"small"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomInput
                        placeholder={"Email"}
                        InputProps={""}
                        size={"small"}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <CustomDatePicker fullWidth={""} />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomSelectPicker
                        selectValue={1}
                        size={"small"}
                        fullWidth={true}
                        handleSelectValue={(val: any) => console.log("hii")}
                        width={""}
                        selectData={gender}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box
                mt={2}>
                <Typography sx={Styles.MainHeading}>Referral Details</Typography>
              </Box>
              <Box mt={2}>
                <CustomSelectPicker
                  placeholderText={'Referal Name'}
                  selectValue={''}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={""}
                  selectData={referalName}
                />
              </Box>
              <Box mt={2}>
                <CustomSelectPicker
                  placeholderText={'Title'}
                  selectValue={''}
                  size={"small"}
                  fullWidth={true}
                  handleSelectValue={(val: any) => console.log("hii")}
                  width={""}
                  selectData={title}
                />
              </Box>
              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <CustomInput
                      placeholder={" Mobile Number"}
                      InputProps={""}
                      size={"small"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomInput
                      placeholder={"Referral Code"}
                      InputProps={""}
                      size={"small"}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid
                  container
                  flexDirection={"row"}
                  spacing={1}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                >
                  <Grid item>
                    <CustomButton
                      title={"Book"}
                      handleButtonClick={buttonClicked}
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      color={"#fffff"}
                      width={120}
                      padding={7}
                    />
                  </Grid>
                  <Grid item>
                    <CustomButton
                      title={"Book & Confirm"}
                      handleButtonClick={buttonClicked}
                      backgroundcolor={"#204289"}
                      bordercolor={"#204289"}
                      color={"#fffff"}
                      width={120}
                      padding={7}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </CustomCard>
        </Box>
      </Box>
    </>
  );
};

export default NewBookings;

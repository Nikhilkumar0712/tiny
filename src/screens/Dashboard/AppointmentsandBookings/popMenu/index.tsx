import React from 'react'
import { Typography, Box, Link } from '@mui/material'
import { Link as RouterLink, Router } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CustomModal from '../../../../components/Modal';
import ChangeBookedAndConfirmedAppointments from '../Change Booked-confirmed Appointments';
const ConfirmedAppointmentsMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomModal
        open={open}
        handleClose={''}
        handleOpen={handleOpen}
        width={"500px"}>
        <Box >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Typography fontSize={"22px"}
              fontFamily={"poppins"}
              fontWeight={"600"}
              color={"#204289"} >
              Change Confirmed Appointment
            </Typography>
            <CloseIcon onClick={handleClose} />
          </Box>
          <Box mt={"20px"}></Box>
        </Box>
        <ChangeBookedAndConfirmedAppointments heading={"Existing Appointment Date & Time :"}/>
      </CustomModal>
      <Box
        padding={"8px"}>
        <RouterLink to={''}>
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"}>
            View Patient Profile
          </Typography>
        </RouterLink>
        <RouterLink to={''} >
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"} mt={'6px'}>
            Collect Payment
          </Typography>
        </RouterLink>
        <Box onClick={handleOpen}>
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"} mt={'6px'}>
            Change Appointment
          </Typography>
        </Box>
        <RouterLink to={''}>
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"} mt={'6px'}>
            Cancel Appointment
          </Typography>
        </RouterLink>
      </Box>
    </>
  )
}

export const BookedAppointmentMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomModal
        open={open}
        handleClose={''}
        handleOpen={handleOpen}
        width={"500px"}>
        <Box >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Typography fontSize={"22px"}
              fontFamily={"poppins"}
              fontWeight={"600"}
              color={"#204289"} >
              Change Booked Appointment
            </Typography>
            <CloseIcon onClick={handleClose} />
          </Box>
          <Box mt={"20px"}></Box>
        </Box>
        <ChangeBookedAndConfirmedAppointments heading={"Current Appointment Date & Time :"}/>
      </CustomModal>
      <Box
        padding={"8px"}>
        <RouterLink to={''}>
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"}>
            Register Patient
          </Typography>
        </RouterLink>
        <RouterLink to={''}>
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"} mt={'6px'}>
            Collect Payment
          </Typography>
        </RouterLink>
        <RouterLink to={''}>
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"} mt={'6px'}>
            Confirm Appointment
          </Typography>
        </RouterLink>
        <Box onClick={handleOpen} >
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"} mt={'6px'}>
            Change Appointment
          </Typography>
        </Box>
        <RouterLink to={''}>
          <Typography fontFamily={"poppins"} fontSize={"12px"} color={"#204289"} mt={'6px'}>
            Cancel Appointment
          </Typography>
        </RouterLink>
      </Box>
    </>
  )
}
export default ConfirmedAppointmentsMenu